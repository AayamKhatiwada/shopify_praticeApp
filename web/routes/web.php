<?php

use App\Exceptions\ShopifyProductCreatorException;
use App\Lib\AuthRedirection;
use App\Lib\EnsureBilling;
use App\Lib\ProductCreator;
use App\Models\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Shopify\Auth\OAuth;
use Shopify\Auth\Session as AuthSession;
use Shopify\Clients\Graphql;
use Shopify\Clients\HttpHeaders;
use Shopify\Clients\Rest;
use Shopify\Context;
use Shopify\Exception\InvalidWebhookException;
use Shopify\Utils;
use Shopify\Webhooks\Registry;
use Shopify\Webhooks\Topics;
use Shopify\Rest\Admin2022_10\ScriptTag;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::fallback(function (Request $request) {
    if (Context::$IS_EMBEDDED_APP &&  $request->query("embedded", false) === "1") {
        if (env('APP_ENV') === 'production') {
            return file_get_contents(public_path('index.html'));
        } else {
            return file_get_contents(base_path('frontend/index.html'));
        }
    } else {
        return redirect(Utils::getEmbeddedAppUrl($request->query("host", null)) . "/" . $request->path());
    }
})->middleware('shopify.installed');

Route::get('/api/auth', function (Request $request) {
    $shop = Utils::sanitizeShopDomain($request->query('shop'));

    // Delete any previously created OAuth sessions that were not completed (don't have an access token)
    Session::where('shop', $shop)->where('access_token', null)->delete();

    return AuthRedirection::redirect($request);
});

Route::get('/api/auth/callback', function (Request $request) {
    $session = OAuth::callback(
        $request->cookie(),
        $request->query(),
        ['App\Lib\CookieHandler', 'saveShopifyCookie'],
    );

    $host = $request->query('host');
    $shop = Utils::sanitizeShopDomain($request->query('shop'));

    $response = Registry::register('/api/webhooks', Topics::APP_UNINSTALLED, $shop, $session->getAccessToken());
    if ($response->isSuccess()) {
        Log::debug("Registered APP_UNINSTALLED webhook for shop $shop");
    } else {
        Log::error(
            "Failed to register APP_UNINSTALLED webhook for shop $shop with response body: " .
                print_r($response->getBody(), true)
        );
    }

    $redirectUrl = Utils::getEmbeddedAppUrl($host);
    if (Config::get('shopify.billing.required')) {
        list($hasPayment, $confirmationUrl) = EnsureBilling::check($session, Config::get('shopify.billing'));

        if (!$hasPayment) {
            $redirectUrl = $confirmationUrl;
        }
    }

    return redirect($redirectUrl);
});

Route::get('/api/products/count', function (Request $request) {
    /** @var AuthSession */
    $session = $request->get('shopifySession'); // Provided by the shopify.auth middleware, guaranteed to be active

    $client = new Rest($session->getShop(), $session->getAccessToken());
    $result = $client->get('products/count');

    dd(response($result->getDecodedBody()));
    return response($result->getDecodedBody());
})->middleware('shopify.auth');

Route::get('/api/products/create', function (Request $request) {
    /** @var AuthSession */
    $session = $request->get('shopifySession'); // Provided by the shopify.auth middleware, guaranteed to be active

    $success = $code = $error = null;
    try {
        ProductCreator::call($session, 5);
        $success = true;
        $code = 200;
        $error = null;
    } catch (\Exception $e) {
        $success = false;

        if ($e instanceof ShopifyProductCreatorException) {
            $code = $e->response->getStatusCode();
            $error = $e->response->getDecodedBody();
            if (array_key_exists("errors", $error)) {
                $error = $error["errors"];
            }
        } else {
            $code = 500;
            $error = $e->getMessage();
        }

        Log::error("Failed to create products: $error");
    } finally {
        return response()->json(["success" => $success, "error" => $error], $code);
    }
})->middleware('shopify.auth');

Route::post('/api/webhooks', function (Request $request) {
    try {
        $topic = $request->header(HttpHeaders::X_SHOPIFY_TOPIC, '');

        $response = Registry::process($request->header(), $request->getContent());
        if (!$response->isSuccess()) {
            Log::error("Failed to process '$topic' webhook: {$response->getErrorMessage()}");
            return response()->json(['message' => "Failed to process '$topic' webhook"], 500);
        }
    } catch (InvalidWebhookException $e) {
        Log::error("Got invalid webhook request for topic '$topic': {$e->getMessage()}");
        return response()->json(['message' => "Got invalid webhook request for topic '$topic'"], 401);
    } catch (\Exception $e) {
        Log::error("Got an exception when handling '$topic' webhook: {$e->getMessage()}");
        return response()->json(['message' => "Got an exception when handling '$topic' webhook"], 500);
    }
});

Route::get('/api/products', function (Request $request) {
    $session = $request->get('shopifySession');

    $client = new Rest($session->getShop(), $session->getAccessToken());
    $result = $client->get('products');

    return response($result->getDecodedBody());
})->middleware('shopify.auth');

Route::get('/api/orders', function (Request $request) {
    $session = $request->get('shopifySession');

    $client = new Rest($session->getShop(), $session->getAccessToken());
    $result = $client->get('orders');

    return response($result->getDecodedBody());
})->middleware('shopify.auth');

Route::get('/api/collections', function (Request $request) {
    $session = $request->get('shopifySession');

    $queryString = <<<'QUERY'
      {
        collections(first: 76) {
          edges {
            node {
              id
              title
              productsCount
              products(first: 10) {
                nodes {
                  id
                  title
                }
              }
            }
          }
        }
      }
    QUERY;

    $client = new Graphql($session->getShop(), $session->getAccessToken());

    $products = $client->query($queryString);

    return response($products->getBody());
})->middleware('shopify.auth');

Route::post('/api/editProductCollection', function (Request $request) {

    $add = array();
    $remove = array();

    foreach ($request->collections as $collect) {
        if (!in_array($collect, $request->oldCollections)) {
            array_push($add, $collect);
        }
    }

    foreach ($request->oldCollections as $collect) {
        if (!in_array($collect, $request->collections)) {
            array_push($remove, $collect);
        }
    }

    foreach ($add as $addCollect) {

        $session = $request->get('shopifySession');

        $queryString = <<<'QUERY'
        mutation collectionAddProducts($id: ID!, $productIds: [ID!]!) {
            collectionAddProducts(id: $id, productIds: $productIds) {
              collection {
                id
                products(first: 10){
                  nodes{
                    id
                  }
                }
              }
            }
          }
        QUERY;

        $client = new Graphql($session->getShop(), $session->getAccessToken());

        $client->query(
            [
                "query" => $queryString,
                "variables" => [
                    "id" => $addCollect["id"],
                    "productIds" => [
                        $request->gid
                    ]
                ]
            ],
        );
    }

    foreach ($remove as $remveCollect) {

        $session = $request->get('shopifySession');

        $queryString = <<<'QUERY'
        mutation collectionRemoveProducts($id: ID!, $productIds: [ID!]!) {
            collectionRemoveProducts(id: $id, productIds: $productIds) {
              job {
                done
                id
              }
            }
          }
        QUERY;

        $client = new Graphql($session->getShop(), $session->getAccessToken());

        $client->query(
            [
                "query" => $queryString,
                "variables" => [
                    "id" => $remveCollect["id"],
                    "productIds" => [
                        $request->gid
                    ]
                ]
            ],
        );
    }

    return [$add, $remove];
})->middleware('shopify.auth');

Route::post('/api/deleteProduct', function (Request $request) {

    $session = $request->get('shopifySession');

    $queryString = <<<'QUERY'
    mutation productDelete($input: ProductDeleteInput!){
        productDelete(input: $input) {
          deletedProductId
        }
    }
    QUERY;

    $client = new Graphql($session->getShop(), $session->getAccessToken());

    $products = $client->query(
        [
            "query" => $queryString,
            "variables" => [
                "input" => [
                    "id" => $request->gid,
                ]
            ]
        ],
    );

    return response($products->getBody());
})->middleware('shopify.auth');

Route::get('/api/createProduct', function (Request $request) {

    $session = $request->get('shopifySession');

    $queryString = <<<'QUERY'
    mutation productCreate($input: ProductInput!) {
        productCreate(input: $input) {
          product {
            id
            title
          }
        }
    }
    QUERY;

    $client = new Graphql($session->getShop(), $session->getAccessToken());

    $products = $client->query(
        [
            "query" => $queryString,
            "variables" => [
                "input" => [
                    "title" => "Home",
                    "bodyHtml" => "HomeWork",
                    "productType" =>  "Classwork",
                    "status" => "ACTIVE",
                    "variants" => [["price" => "9.000"]],
                ]
            ]
        ],
    );

    return response($products->getBody());
})->middleware('shopify.auth');

Route::get('/api/getProducts/{slug}', function ($slug, Request $request) {

    $id = "gid://shopify/Product/" . $slug;
    $session = $request->get('shopifySession');

    $queryString = <<<'QUERY'
        query product($input: ID!){ 
            product(id: $input){
                id
                title
                description
                images(first: 10){
                    edges{
                        node{
                            url
                        }
                    }
                }
                variants(first: 1) {
                    nodes{
                        price
                        taxable
                        compareAtPrice
                        sku
                        barcode
                    }
                }
                productType
                status
                vendor
            }
        }
    QUERY;

    $client = new Graphql($session->getShop(), $session->getAccessToken());

    $products = $client->query(
        [
            "query" => $queryString,
            "variables" => [
                "input" => $id,
            ]
        ],
    );

    return response($products->getBody());
})->middleware('shopify.auth');

Route::post('/api/editProduct', function (Request $request) {

    $session = $request->get('shopifySession');

    $queryString = <<<'QUERY'
    mutation productUpdate($input: ProductInput!) {
        productUpdate(input: $input) {
          product {
            id
          }
        }
    }
    QUERY;

    $client = new Graphql($session->getShop(), $session->getAccessToken());

    $products = $client->query(
        [
            "query" => $queryString,
            "variables" => [
                "input" => [
                    "id" => $request->gid,
                    "title" => $request->title,
                    "bodyHtml" => $request->description,
                    "productType" => $request->productType,
                    "status" => $request->selected,
                    "vendor" => $request->vendor,
                    "variants" => [
                        [
                            "price" => $request->price,
                            "compareAtPrice" => $request->compareAtPrice,
                            "taxable" => $request->checkedChargeTax,
                            "sku" => $request->stockUnit,
                            "barcode" => $request->barCode,
                        ]
                    ],
                ]
            ]
        ],
    );

    return response($products->getBody());

    // return ["response" => $request->compareTax];
})->middleware('shopify.auth');

Route::post('/api/addImage', function (Request $request) {

    $session = $request->get('shopifySession');

    $queryString = <<<'QUERY'
    mutation productAppendImages($input: ProductAppendImagesInput!) {
        productAppendImages(input: $input) {
            product {
                id
            }
        }
    }
    QUERY;

    $client = new Graphql($session->getShop(), $session->getAccessToken());

    $products = $client->query(
        [
            "query" => $queryString,
            "variables" => [
                "input" => [
                    "id" => $request->gid,
                    "images" => [
                        [
                            "src" => $request->imageUrl
                        ]
                    ]
                ]
            ]
        ],
    );

    return response($products->getBody());
})->middleware('shopify.auth');

// mutation to add a products

// mutation{
//     productCreate(input: {
//         title: "hello world"
//     }){
//         product{
//             id
//         }
//     }
// }


// Get 3 products

// {
//     products (first: 3) {
//       edges {
//         node {
//           id
//           title
//         }
//       }
//     }
//   }

// mutation to add script tag

// mutation {
//     scriptTagCreate(input: {cache: false, displayScope: ALL, src: "https://localhost/my-app/web/frontend/script-tag/actions/index.jsx"}) 
//     {
//       scriptTag {
//         id
//         src
//         displayScope
//       }
//     }
//   }


// delete a product

// mutation {
//     productDelete(input: {id: "gid://shopify/Product/7884664504539"}) {
//       deletedProductId
//     }
//   }


// delete a script_tag

// mutation{
//     scriptTagDelete(id: "gid://shopify/ScriptTag/213059698907") {
//       deletedScriptTagId
//       userErrors {
//         field
//         message
//       }
//     }
//   }

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/', function () {
    return "Hello API";
});

// Route::post('/deleteProduct', function (Request $request) {

    // $session = $request->get('shopifySession');

    // $queryString = <<<'QUERY'
    // mutation productDelete($gid: ProductInput!){
    //     productDelete(input: {id: $gid}) {
    //       deletedProductId
    //     }
    // }
    // QUERY;

    // $client = new Graphql($session->getShop(), $session->getAccessToken());

    // $products = $client->query(
    //     [
    //         "query" => $queryString,
    //         "variables" => [
    //             "input" => [
    //                 "gid" => $request->gid,
    //             ]
    //         ]
    //     ],
    // );

    // return response($products->getBody());

//     return ['response' => '$request->all()'];
// })->middleware('shopify.auth');

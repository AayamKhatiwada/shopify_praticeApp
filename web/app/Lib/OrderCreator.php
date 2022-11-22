<?php

declare(strict_types=1);

namespace App\Lib;

use Shopify\Auth\Session;
use Shopify\Clients\Graphql;

class OrderCreator
{
    private const CREATE_ORDER_MUTATION = <<<'QUERY'
    mutation draftOrderCreate($input: DraftOrderInput!) {
        draftOrderCreate(input: $input) {
          draftOrder {
            id
            order {
              id
            }
            status
          }
          userErrors {
            field
            message
          }
        }
      }
    QUERY;

    public static function call(Session $session)
    {
        $client = new Graphql($session->getShop(), $session->getAccessToken());

        $response = $client->query(
            [
                "query" => self::CREATE_ORDER_MUTATION,
                "variables" => [
                    "items" => [
                        "email" => "123abc@hotmail.com",
                        "lineItems" => [
                            [
                                "variantId" => "gid://shopify/ProductVariant/32231002996788",
                                "quantity" => 1
                            ]
                        ]
                    ]
                ]
            ],
        );
    }
}

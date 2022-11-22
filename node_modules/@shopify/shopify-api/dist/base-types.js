"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifyHeader = exports.LATEST_API_VERSION = exports.ApiVersion = void 0;
var ApiVersion;
(function (ApiVersion) {
    ApiVersion["October21"] = "2021-10";
    ApiVersion["January22"] = "2022-01";
    ApiVersion["April22"] = "2022-04";
    ApiVersion["July22"] = "2022-07";
    ApiVersion["October22"] = "2022-10";
    ApiVersion["Unstable"] = "unstable";
})(ApiVersion = exports.ApiVersion || (exports.ApiVersion = {}));
exports.LATEST_API_VERSION = ApiVersion.October22;
var ShopifyHeader;
(function (ShopifyHeader) {
    ShopifyHeader["AccessToken"] = "X-Shopify-Access-Token";
    ShopifyHeader["StorefrontAccessToken"] = "X-Shopify-Storefront-Access-Token";
    ShopifyHeader["Hmac"] = "X-Shopify-Hmac-Sha256";
    ShopifyHeader["Topic"] = "X-Shopify-Topic";
    ShopifyHeader["Domain"] = "X-Shopify-Shop-Domain";
})(ShopifyHeader = exports.ShopifyHeader || (exports.ShopifyHeader = {}));

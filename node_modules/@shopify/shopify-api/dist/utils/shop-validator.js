"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeHost = exports.sanitizeShop = void 0;
var tslib_1 = require("tslib");
var error_1 = require("../error");
var context_1 = require("../context");
/**
 * Validates and sanitizes shop domain urls. If Context.CUSTOM_SHOP_DOMAINS is set, shops ending in those domains are
 * allowed. Accepts myshopify.com and myshopify.io by default.
 *
 * @param shop Shop url: {shop}.{domain}
 * @param throwOnInvalid Whether to raise an exception if the shop is invalid
 */
function sanitizeShop(shop, throwOnInvalid) {
    if (throwOnInvalid === void 0) { throwOnInvalid = false; }
    var domainsRegex = ['myshopify\\.com', 'myshopify\\.io'];
    if (context_1.Context.CUSTOM_SHOP_DOMAINS) {
        domainsRegex.push.apply(domainsRegex, tslib_1.__spreadArray([], tslib_1.__read(context_1.Context.CUSTOM_SHOP_DOMAINS.map(function (regex) {
            return typeof regex === 'string' ? regex : regex.source;
        })), false));
    }
    var shopUrlRegex = new RegExp("^[a-zA-Z0-9][a-zA-Z0-9-_]*\\.(".concat(domainsRegex.join('|'), ")[/]*$"));
    var sanitizedShop = shopUrlRegex.test(shop) ? shop : null;
    if (!sanitizedShop && throwOnInvalid) {
        throw new error_1.InvalidShopError('Received invalid shop argument');
    }
    return sanitizedShop;
}
exports.sanitizeShop = sanitizeShop;
/**
 * Validates and sanitizes Shopify host arguments.
 *
 * @param host Host address
 * @param throwOnInvalid Whether to raise an exception if the host is invalid
 */
function sanitizeHost(host, throwOnInvalid) {
    if (throwOnInvalid === void 0) { throwOnInvalid = false; }
    var base64regex = /^[0-9a-zA-Z+/]+={0,2}$/;
    var sanitizedHost = base64regex.test(host) ? host : null;
    if (!sanitizedHost && throwOnInvalid) {
        throw new error_1.InvalidHostError('Received invalid host argument');
    }
    return sanitizedHost;
}
exports.sanitizeHost = sanitizeHost;

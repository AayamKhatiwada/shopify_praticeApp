"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildEmbeddedAppUrl = void 0;
var tslib_1 = require("tslib");
var ShopifyErrors = tslib_1.__importStar(require("../error"));
var context_1 = require("../context");
var shop_validator_1 = require("./shop-validator");
/**
 * Helper method to get the host URL for the app.
 *
 * @param request Current HTTP request
 */
function getEmbeddedAppUrl(request) {
    if (!request) {
        throw new ShopifyErrors.MissingRequiredArgument('getEmbeddedAppUrl requires a request object argument');
    }
    if (!request.url) {
        throw new ShopifyErrors.InvalidRequestError('Request does not contain a URL');
    }
    var url = new URL(request.url, "https://".concat(request.headers.host));
    var host = url.searchParams.get('host');
    if (typeof host !== 'string') {
        throw new ShopifyErrors.InvalidRequestError('Request does not contain a host query parameter');
    }
    return buildEmbeddedAppUrl(host);
}
exports.default = getEmbeddedAppUrl;
function buildEmbeddedAppUrl(host) {
    (0, shop_validator_1.sanitizeHost)(host, true);
    var decodedHost = Buffer.from(host, 'base64').toString();
    return "https://".concat(decodedHost, "/apps/").concat(context_1.Context.API_KEY);
}
exports.buildEmbeddedAppUrl = buildEmbeddedAppUrl;

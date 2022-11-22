"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var crypto_1 = tslib_1.__importDefault(require("crypto"));
var ShopifyErrors = tslib_1.__importStar(require("../error"));
/**
 * A timing safe string comparison utility.
 *
 * @param strA any string, array of strings, or object with string values
 * @param strB any string, array of strings, or object with string values
 */
function safeCompare(strA, strB) {
    var buffA;
    var buffB;
    if (typeof strA !== typeof strB) {
        throw new ShopifyErrors.SafeCompareError("Mismatched data types provided: ".concat(typeof strA, " and ").concat(typeof strB));
    }
    if (typeof strA === 'object') {
        buffA = Buffer.from(JSON.stringify(strA));
    }
    else {
        buffA = Buffer.from(strA);
    }
    if (typeof strB === 'object') {
        buffB = Buffer.from(JSON.stringify(strB));
    }
    else {
        buffB = Buffer.from(strB);
    }
    if (buffA.length === buffB.length) {
        return crypto_1.default.timingSafeEqual(buffA, buffB);
    }
    return false;
}
exports.default = safeCompare;

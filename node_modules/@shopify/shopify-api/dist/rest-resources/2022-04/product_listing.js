"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductListing = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var image_1 = require("./image");
var variant_1 = require("./variant");
var ProductListing = /** @class */ (function (_super) {
    tslib_1.__extends(ProductListing, _super);
    function ProductListing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductListing.find = function (_a) {
        var session = _a.session, product_id = _a.product_id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ProductListing.baseFind({
                            session: session,
                            urlIds: { "product_id": product_id },
                            params: {},
                        })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, result ? result[0] : null];
                }
            });
        });
    };
    ProductListing.delete = function (_a) {
        var session = _a.session, product_id = _a.product_id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ProductListing.request({
                            http_method: "delete",
                            operation: "delete",
                            session: session,
                            urlIds: { "product_id": product_id },
                            params: {},
                        })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    ProductListing.all = function (_a) {
        var session = _a.session, _b = _a.product_ids, product_ids = _b === void 0 ? null : _b, _c = _a.limit, limit = _c === void 0 ? null : _c, _d = _a.collection_id, collection_id = _d === void 0 ? null : _d, _e = _a.updated_at_min, updated_at_min = _e === void 0 ? null : _e, _f = _a.handle, handle = _f === void 0 ? null : _f, otherArgs = tslib_1.__rest(_a, ["session", "product_ids", "limit", "collection_id", "updated_at_min", "handle"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_g) {
                switch (_g.label) {
                    case 0: return [4 /*yield*/, ProductListing.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "product_ids": product_ids, "limit": limit, "collection_id": collection_id, "updated_at_min": updated_at_min, "handle": handle }, otherArgs),
                        })];
                    case 1:
                        response = _g.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    ProductListing.count = function (_a) {
        var session = _a.session, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ProductListing.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({}, otherArgs),
                            body: {},
                            entity: null,
                        })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    ProductListing.product_ids = function (_a) {
        var session = _a.session, _b = _a.limit, limit = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "limit"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, ProductListing.request({
                            http_method: "get",
                            operation: "product_ids",
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "limit": limit }, otherArgs),
                            body: {},
                            entity: null,
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    ProductListing.API_VERSION = base_types_1.ApiVersion.April22;
    ProductListing.NAME = 'product_listing';
    ProductListing.PLURAL_NAME = 'product_listings';
    ProductListing.HAS_ONE = {};
    ProductListing.HAS_MANY = {
        "images": image_1.Image,
        "variants": variant_1.Variant
    };
    ProductListing.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["product_id"], "path": "product_listings/<product_id>.json" },
        { "http_method": "get", "operation": "count", "ids": [], "path": "product_listings/count.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "product_listings.json" },
        { "http_method": "get", "operation": "get", "ids": ["product_id"], "path": "product_listings/<product_id>.json" },
        { "http_method": "get", "operation": "product_ids", "ids": [], "path": "product_listings/product_ids.json" },
        { "http_method": "put", "operation": "put", "ids": ["product_id"], "path": "product_listings/<product_id>.json" }
    ];
    ProductListing.PRIMARY_KEY = "product_id";
    return ProductListing;
}(base_rest_resource_1.default));
exports.ProductListing = ProductListing;

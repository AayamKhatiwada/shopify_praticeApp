"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var image_1 = require("./image");
var variant_1 = require("./variant");
var Product = /** @class */ (function (_super) {
    tslib_1.__extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Product.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.fields, fields = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Product.baseFind({
                            session: session,
                            urlIds: { "id": id },
                            params: { "fields": fields },
                        })];
                    case 1:
                        result = _c.sent();
                        return [2 /*return*/, result ? result[0] : null];
                }
            });
        });
    };
    Product.delete = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Product.request({
                            http_method: "delete",
                            operation: "delete",
                            session: session,
                            urlIds: { "id": id },
                            params: {},
                        })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Product.all = function (_a) {
        var session = _a.session, _b = _a.ids, ids = _b === void 0 ? null : _b, _c = _a.limit, limit = _c === void 0 ? null : _c, _d = _a.since_id, since_id = _d === void 0 ? null : _d, _e = _a.title, title = _e === void 0 ? null : _e, _f = _a.vendor, vendor = _f === void 0 ? null : _f, _g = _a.handle, handle = _g === void 0 ? null : _g, _h = _a.product_type, product_type = _h === void 0 ? null : _h, _j = _a.status, status = _j === void 0 ? null : _j, _k = _a.collection_id, collection_id = _k === void 0 ? null : _k, _l = _a.created_at_min, created_at_min = _l === void 0 ? null : _l, _m = _a.created_at_max, created_at_max = _m === void 0 ? null : _m, _o = _a.updated_at_min, updated_at_min = _o === void 0 ? null : _o, _p = _a.updated_at_max, updated_at_max = _p === void 0 ? null : _p, _q = _a.published_at_min, published_at_min = _q === void 0 ? null : _q, _r = _a.published_at_max, published_at_max = _r === void 0 ? null : _r, _s = _a.published_status, published_status = _s === void 0 ? null : _s, _t = _a.fields, fields = _t === void 0 ? null : _t, _u = _a.presentment_currencies, presentment_currencies = _u === void 0 ? null : _u, otherArgs = tslib_1.__rest(_a, ["session", "ids", "limit", "since_id", "title", "vendor", "handle", "product_type", "status", "collection_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "published_at_min", "published_at_max", "published_status", "fields", "presentment_currencies"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_v) {
                switch (_v.label) {
                    case 0: return [4 /*yield*/, Product.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "ids": ids, "limit": limit, "since_id": since_id, "title": title, "vendor": vendor, "handle": handle, "product_type": product_type, "status": status, "collection_id": collection_id, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "published_at_min": published_at_min, "published_at_max": published_at_max, "published_status": published_status, "fields": fields, "presentment_currencies": presentment_currencies }, otherArgs),
                        })];
                    case 1:
                        response = _v.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Product.count = function (_a) {
        var session = _a.session, _b = _a.vendor, vendor = _b === void 0 ? null : _b, _c = _a.product_type, product_type = _c === void 0 ? null : _c, _d = _a.collection_id, collection_id = _d === void 0 ? null : _d, _e = _a.created_at_min, created_at_min = _e === void 0 ? null : _e, _f = _a.created_at_max, created_at_max = _f === void 0 ? null : _f, _g = _a.updated_at_min, updated_at_min = _g === void 0 ? null : _g, _h = _a.updated_at_max, updated_at_max = _h === void 0 ? null : _h, _j = _a.published_at_min, published_at_min = _j === void 0 ? null : _j, _k = _a.published_at_max, published_at_max = _k === void 0 ? null : _k, _l = _a.published_status, published_status = _l === void 0 ? null : _l, otherArgs = tslib_1.__rest(_a, ["session", "vendor", "product_type", "collection_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "published_at_min", "published_at_max", "published_status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_m) {
                switch (_m.label) {
                    case 0: return [4 /*yield*/, Product.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "vendor": vendor, "product_type": product_type, "collection_id": collection_id, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "published_at_min": published_at_min, "published_at_max": published_at_max, "published_status": published_status }, otherArgs),
                            body: {},
                            entity: null,
                        })];
                    case 1:
                        response = _m.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Product.API_VERSION = base_types_1.ApiVersion.April22;
    Product.NAME = 'product';
    Product.PLURAL_NAME = 'products';
    Product.HAS_ONE = {};
    Product.HAS_MANY = {
        "images": image_1.Image,
        "variants": variant_1.Variant
    };
    Product.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "products/<id>.json" },
        { "http_method": "get", "operation": "count", "ids": [], "path": "products/count.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "products.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "products/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "products.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "products/<id>.json" }
    ];
    return Product;
}(base_rest_resource_1.default));
exports.Product = Product;

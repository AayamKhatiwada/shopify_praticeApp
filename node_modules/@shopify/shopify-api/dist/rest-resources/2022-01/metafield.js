"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metafield = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var Metafield = /** @class */ (function (_super) {
    tslib_1.__extends(Metafield, _super);
    function Metafield() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Metafield.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.article_id, article_id = _b === void 0 ? null : _b, _c = _a.blog_id, blog_id = _c === void 0 ? null : _c, _d = _a.collection_id, collection_id = _d === void 0 ? null : _d, _e = _a.customer_id, customer_id = _e === void 0 ? null : _e, _f = _a.draft_order_id, draft_order_id = _f === void 0 ? null : _f, _g = _a.order_id, order_id = _g === void 0 ? null : _g, _h = _a.page_id, page_id = _h === void 0 ? null : _h, _j = _a.product_image_id, product_image_id = _j === void 0 ? null : _j, _k = _a.product_id, product_id = _k === void 0 ? null : _k, _l = _a.variant_id, variant_id = _l === void 0 ? null : _l, _m = _a.fields, fields = _m === void 0 ? null : _m;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_o) {
                switch (_o.label) {
                    case 0: return [4 /*yield*/, Metafield.baseFind({
                            session: session,
                            urlIds: { "id": id, "article_id": article_id, "blog_id": blog_id, "collection_id": collection_id, "customer_id": customer_id, "draft_order_id": draft_order_id, "order_id": order_id, "page_id": page_id, "product_image_id": product_image_id, "product_id": product_id, "variant_id": variant_id },
                            params: { "fields": fields },
                        })];
                    case 1:
                        result = _o.sent();
                        return [2 /*return*/, result ? result[0] : null];
                }
            });
        });
    };
    Metafield.delete = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.article_id, article_id = _b === void 0 ? null : _b, _c = _a.blog_id, blog_id = _c === void 0 ? null : _c, _d = _a.collection_id, collection_id = _d === void 0 ? null : _d, _e = _a.customer_id, customer_id = _e === void 0 ? null : _e, _f = _a.draft_order_id, draft_order_id = _f === void 0 ? null : _f, _g = _a.order_id, order_id = _g === void 0 ? null : _g, _h = _a.page_id, page_id = _h === void 0 ? null : _h, _j = _a.product_image_id, product_image_id = _j === void 0 ? null : _j, _k = _a.product_id, product_id = _k === void 0 ? null : _k, _l = _a.variant_id, variant_id = _l === void 0 ? null : _l;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_m) {
                switch (_m.label) {
                    case 0: return [4 /*yield*/, Metafield.request({
                            http_method: "delete",
                            operation: "delete",
                            session: session,
                            urlIds: { "id": id, "article_id": article_id, "blog_id": blog_id, "collection_id": collection_id, "customer_id": customer_id, "draft_order_id": draft_order_id, "order_id": order_id, "page_id": page_id, "product_image_id": product_image_id, "product_id": product_id, "variant_id": variant_id },
                            params: {},
                        })];
                    case 1:
                        response = _m.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Metafield.all = function (_a) {
        var session = _a.session, _b = _a.article_id, article_id = _b === void 0 ? null : _b, _c = _a.blog_id, blog_id = _c === void 0 ? null : _c, _d = _a.collection_id, collection_id = _d === void 0 ? null : _d, _e = _a.customer_id, customer_id = _e === void 0 ? null : _e, _f = _a.draft_order_id, draft_order_id = _f === void 0 ? null : _f, _g = _a.order_id, order_id = _g === void 0 ? null : _g, _h = _a.page_id, page_id = _h === void 0 ? null : _h, _j = _a.product_image_id, product_image_id = _j === void 0 ? null : _j, _k = _a.product_id, product_id = _k === void 0 ? null : _k, _l = _a.variant_id, variant_id = _l === void 0 ? null : _l, _m = _a.limit, limit = _m === void 0 ? null : _m, _o = _a.since_id, since_id = _o === void 0 ? null : _o, _p = _a.created_at_min, created_at_min = _p === void 0 ? null : _p, _q = _a.created_at_max, created_at_max = _q === void 0 ? null : _q, _r = _a.updated_at_min, updated_at_min = _r === void 0 ? null : _r, _s = _a.updated_at_max, updated_at_max = _s === void 0 ? null : _s, _t = _a.namespace, namespace = _t === void 0 ? null : _t, _u = _a.key, key = _u === void 0 ? null : _u, _v = _a.value_type, value_type = _v === void 0 ? null : _v, _w = _a.type, type = _w === void 0 ? null : _w, _x = _a.fields, fields = _x === void 0 ? null : _x, _y = _a.metafield, metafield = _y === void 0 ? null : _y, otherArgs = tslib_1.__rest(_a, ["session", "article_id", "blog_id", "collection_id", "customer_id", "draft_order_id", "order_id", "page_id", "product_image_id", "product_id", "variant_id", "limit", "since_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "namespace", "key", "value_type", "type", "fields", "metafield"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_z) {
                switch (_z.label) {
                    case 0: return [4 /*yield*/, Metafield.baseFind({
                            session: session,
                            urlIds: { "article_id": article_id, "blog_id": blog_id, "collection_id": collection_id, "customer_id": customer_id, "draft_order_id": draft_order_id, "order_id": order_id, "page_id": page_id, "product_image_id": product_image_id, "product_id": product_id, "variant_id": variant_id },
                            params: tslib_1.__assign({ "limit": limit, "since_id": since_id, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "namespace": namespace, "key": key, "value_type": value_type, "type": type, "fields": fields, "metafield": metafield }, otherArgs),
                        })];
                    case 1:
                        response = _z.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Metafield.count = function (_a) {
        var session = _a.session, _b = _a.article_id, article_id = _b === void 0 ? null : _b, _c = _a.blog_id, blog_id = _c === void 0 ? null : _c, _d = _a.collection_id, collection_id = _d === void 0 ? null : _d, _e = _a.customer_id, customer_id = _e === void 0 ? null : _e, _f = _a.draft_order_id, draft_order_id = _f === void 0 ? null : _f, _g = _a.order_id, order_id = _g === void 0 ? null : _g, _h = _a.page_id, page_id = _h === void 0 ? null : _h, _j = _a.product_image_id, product_image_id = _j === void 0 ? null : _j, _k = _a.product_id, product_id = _k === void 0 ? null : _k, _l = _a.variant_id, variant_id = _l === void 0 ? null : _l, otherArgs = tslib_1.__rest(_a, ["session", "article_id", "blog_id", "collection_id", "customer_id", "draft_order_id", "order_id", "page_id", "product_image_id", "product_id", "variant_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_m) {
                switch (_m.label) {
                    case 0: return [4 /*yield*/, Metafield.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: { "article_id": article_id, "blog_id": blog_id, "collection_id": collection_id, "customer_id": customer_id, "draft_order_id": draft_order_id, "order_id": order_id, "page_id": page_id, "product_image_id": product_image_id, "product_id": product_id, "variant_id": variant_id },
                            params: tslib_1.__assign({}, otherArgs),
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
    Metafield.API_VERSION = base_types_1.ApiVersion.January22;
    Metafield.NAME = 'metafield';
    Metafield.PLURAL_NAME = 'metafields';
    Metafield.HAS_ONE = {};
    Metafield.HAS_MANY = {};
    Metafield.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["article_id", "id"], "path": "articles/<article_id>/metafields/<id>.json" },
        { "http_method": "delete", "operation": "delete", "ids": ["blog_id", "id"], "path": "blogs/<blog_id>/metafields/<id>.json" },
        { "http_method": "delete", "operation": "delete", "ids": ["collection_id", "id"], "path": "collections/<collection_id>/metafields/<id>.json" },
        { "http_method": "delete", "operation": "delete", "ids": ["customer_id", "id"], "path": "customers/<customer_id>/metafields/<id>.json" },
        { "http_method": "delete", "operation": "delete", "ids": ["draft_order_id", "id"], "path": "draft_orders/<draft_order_id>/metafields/<id>.json" },
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "metafields/<id>.json" },
        { "http_method": "delete", "operation": "delete", "ids": ["order_id", "id"], "path": "orders/<order_id>/metafields/<id>.json" },
        { "http_method": "delete", "operation": "delete", "ids": ["page_id", "id"], "path": "pages/<page_id>/metafields/<id>.json" },
        { "http_method": "delete", "operation": "delete", "ids": ["product_image_id", "id"], "path": "product_images/<product_image_id>/metafields/<id>.json" },
        { "http_method": "delete", "operation": "delete", "ids": ["product_image_id", "id"], "path": "product_images/<product_image_id>/metafields/<id>.json" },
        { "http_method": "delete", "operation": "delete", "ids": ["product_id", "id"], "path": "products/<product_id>/metafields/<id>.json" },
        { "http_method": "delete", "operation": "delete", "ids": ["variant_id", "id"], "path": "variants/<variant_id>/metafields/<id>.json" },
        { "http_method": "get", "operation": "count", "ids": ["article_id"], "path": "articles/<article_id>/metafields/count.json" },
        { "http_method": "get", "operation": "count", "ids": ["blog_id"], "path": "blogs/<blog_id>/metafields/count.json" },
        { "http_method": "get", "operation": "count", "ids": ["collection_id"], "path": "collections/<collection_id>/metafields/count.json" },
        { "http_method": "get", "operation": "count", "ids": ["customer_id"], "path": "customers/<customer_id>/metafields/count.json" },
        { "http_method": "get", "operation": "count", "ids": ["draft_order_id"], "path": "draft_orders/<draft_order_id>/metafields/count.json" },
        { "http_method": "get", "operation": "count", "ids": [], "path": "metafields/count.json" },
        { "http_method": "get", "operation": "count", "ids": ["order_id"], "path": "orders/<order_id>/metafields/count.json" },
        { "http_method": "get", "operation": "count", "ids": ["page_id"], "path": "pages/<page_id>/metafields/count.json" },
        { "http_method": "get", "operation": "count", "ids": ["page_id"], "path": "pages/<page_id>/metafields/count.json" },
        { "http_method": "get", "operation": "count", "ids": ["product_image_id"], "path": "product_images/<product_image_id>/metafields/count.json" },
        { "http_method": "get", "operation": "count", "ids": ["product_id"], "path": "products/<product_id>/metafields/count.json" },
        { "http_method": "get", "operation": "count", "ids": ["variant_id"], "path": "variants/<variant_id>/metafields/count.json" },
        { "http_method": "get", "operation": "get", "ids": ["article_id"], "path": "articles/<article_id>/metafields.json" },
        { "http_method": "get", "operation": "get", "ids": ["article_id", "id"], "path": "articles/<article_id>/metafields/<id>.json" },
        { "http_method": "get", "operation": "get", "ids": ["blog_id"], "path": "blogs/<blog_id>/metafields.json" },
        { "http_method": "get", "operation": "get", "ids": ["blog_id", "id"], "path": "blogs/<blog_id>/metafields/<id>.json" },
        { "http_method": "get", "operation": "get", "ids": ["collection_id"], "path": "collections/<collection_id>/metafields.json" },
        { "http_method": "get", "operation": "get", "ids": ["collection_id", "id"], "path": "collections/<collection_id>/metafields/<id>.json" },
        { "http_method": "get", "operation": "get", "ids": ["customer_id"], "path": "customers/<customer_id>/metafields.json" },
        { "http_method": "get", "operation": "get", "ids": ["customer_id", "id"], "path": "customers/<customer_id>/metafields/<id>.json" },
        { "http_method": "get", "operation": "get", "ids": ["draft_order_id"], "path": "draft_orders/<draft_order_id>/metafields.json" },
        { "http_method": "get", "operation": "get", "ids": ["draft_order_id"], "path": "draft_orders/<draft_order_id>/metafields.json" },
        { "http_method": "get", "operation": "get", "ids": ["draft_order_id", "id"], "path": "draft_orders/<draft_order_id>/metafields/<id>.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "metafields.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "metafields/<id>.json" },
        { "http_method": "get", "operation": "get", "ids": ["order_id"], "path": "orders/<order_id>/metafields.json" },
        { "http_method": "get", "operation": "get", "ids": ["order_id", "id"], "path": "orders/<order_id>/metafields/<id>.json" },
        { "http_method": "get", "operation": "get", "ids": ["page_id"], "path": "pages/<page_id>/metafields.json" },
        { "http_method": "get", "operation": "get", "ids": ["page_id", "id"], "path": "pages/<page_id>/metafields/<id>.json" },
        { "http_method": "get", "operation": "get", "ids": ["product_image_id"], "path": "product_images/<product_image_id>/metafields.json" },
        { "http_method": "get", "operation": "get", "ids": ["product_image_id", "id"], "path": "product_images/<product_image_id>/metafields/<id>.json" },
        { "http_method": "get", "operation": "get", "ids": ["product_image_id", "id"], "path": "product_images/<product_image_id>/metafields/<id>.json" },
        { "http_method": "get", "operation": "get", "ids": ["product_id"], "path": "products/<product_id>/metafields.json" },
        { "http_method": "get", "operation": "get", "ids": ["product_id", "id"], "path": "products/<product_id>/metafields/<id>.json" },
        { "http_method": "get", "operation": "get", "ids": ["variant_id"], "path": "variants/<variant_id>/metafields.json" },
        { "http_method": "get", "operation": "get", "ids": ["variant_id", "id"], "path": "variants/<variant_id>/metafields/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": ["article_id"], "path": "articles/<article_id>/metafields.json" },
        { "http_method": "post", "operation": "post", "ids": ["blog_id"], "path": "blogs/<blog_id>/metafields.json" },
        { "http_method": "post", "operation": "post", "ids": ["collection_id"], "path": "collections/<collection_id>/metafields.json" },
        { "http_method": "post", "operation": "post", "ids": ["customer_id"], "path": "customers/<customer_id>/metafields.json" },
        { "http_method": "post", "operation": "post", "ids": ["draft_order_id"], "path": "draft_orders/<draft_order_id>/metafields.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "metafields.json" },
        { "http_method": "post", "operation": "post", "ids": ["order_id"], "path": "orders/<order_id>/metafields.json" },
        { "http_method": "post", "operation": "post", "ids": ["order_id"], "path": "orders/<order_id>/metafields.json" },
        { "http_method": "post", "operation": "post", "ids": ["page_id"], "path": "pages/<page_id>/metafields.json" },
        { "http_method": "post", "operation": "post", "ids": ["product_image_id"], "path": "product_images/<product_image_id>/metafields.json" },
        { "http_method": "post", "operation": "post", "ids": ["product_id"], "path": "products/<product_id>/metafields.json" },
        { "http_method": "post", "operation": "post", "ids": ["variant_id"], "path": "variants/<variant_id>/metafields.json" },
        { "http_method": "put", "operation": "put", "ids": ["article_id", "id"], "path": "articles/<article_id>/metafields/<id>.json" },
        { "http_method": "put", "operation": "put", "ids": ["blog_id", "id"], "path": "blogs/<blog_id>/metafields/<id>.json" },
        { "http_method": "put", "operation": "put", "ids": ["blog_id", "id"], "path": "blogs/<blog_id>/metafields/<id>.json" },
        { "http_method": "put", "operation": "put", "ids": ["collection_id", "id"], "path": "collections/<collection_id>/metafields/<id>.json" },
        { "http_method": "put", "operation": "put", "ids": ["customer_id", "id"], "path": "customers/<customer_id>/metafields/<id>.json" },
        { "http_method": "put", "operation": "put", "ids": ["draft_order_id", "id"], "path": "draft_orders/<draft_order_id>/metafields/<id>.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "metafields/<id>.json" },
        { "http_method": "put", "operation": "put", "ids": ["order_id", "id"], "path": "orders/<order_id>/metafields/<id>.json" },
        { "http_method": "put", "operation": "put", "ids": ["page_id", "id"], "path": "pages/<page_id>/metafields/<id>.json" },
        { "http_method": "put", "operation": "put", "ids": ["product_image_id", "id"], "path": "product_images/<product_image_id>/metafields/<id>.json" },
        { "http_method": "put", "operation": "put", "ids": ["product_id", "id"], "path": "products/<product_id>/metafields/<id>.json" },
        { "http_method": "put", "operation": "put", "ids": ["variant_id", "id"], "path": "variants/<variant_id>/metafields/<id>.json" }
    ];
    return Metafield;
}(base_rest_resource_1.default));
exports.Metafield = Metafield;

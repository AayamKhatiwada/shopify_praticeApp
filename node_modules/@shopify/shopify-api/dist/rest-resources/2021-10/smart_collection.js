"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartCollection = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var SmartCollection = /** @class */ (function (_super) {
    tslib_1.__extends(SmartCollection, _super);
    function SmartCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmartCollection.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.fields, fields = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, SmartCollection.baseFind({
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
    SmartCollection.delete = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, SmartCollection.request({
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
    SmartCollection.all = function (_a) {
        var session = _a.session, _b = _a.limit, limit = _b === void 0 ? null : _b, _c = _a.ids, ids = _c === void 0 ? null : _c, _d = _a.since_id, since_id = _d === void 0 ? null : _d, _e = _a.title, title = _e === void 0 ? null : _e, _f = _a.product_id, product_id = _f === void 0 ? null : _f, _g = _a.handle, handle = _g === void 0 ? null : _g, _h = _a.updated_at_min, updated_at_min = _h === void 0 ? null : _h, _j = _a.updated_at_max, updated_at_max = _j === void 0 ? null : _j, _k = _a.published_at_min, published_at_min = _k === void 0 ? null : _k, _l = _a.published_at_max, published_at_max = _l === void 0 ? null : _l, _m = _a.published_status, published_status = _m === void 0 ? null : _m, _o = _a.fields, fields = _o === void 0 ? null : _o, otherArgs = tslib_1.__rest(_a, ["session", "limit", "ids", "since_id", "title", "product_id", "handle", "updated_at_min", "updated_at_max", "published_at_min", "published_at_max", "published_status", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_p) {
                switch (_p.label) {
                    case 0: return [4 /*yield*/, SmartCollection.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "limit": limit, "ids": ids, "since_id": since_id, "title": title, "product_id": product_id, "handle": handle, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "published_at_min": published_at_min, "published_at_max": published_at_max, "published_status": published_status, "fields": fields }, otherArgs),
                        })];
                    case 1:
                        response = _p.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    SmartCollection.count = function (_a) {
        var session = _a.session, _b = _a.title, title = _b === void 0 ? null : _b, _c = _a.product_id, product_id = _c === void 0 ? null : _c, _d = _a.updated_at_min, updated_at_min = _d === void 0 ? null : _d, _e = _a.updated_at_max, updated_at_max = _e === void 0 ? null : _e, _f = _a.published_at_min, published_at_min = _f === void 0 ? null : _f, _g = _a.published_at_max, published_at_max = _g === void 0 ? null : _g, _h = _a.published_status, published_status = _h === void 0 ? null : _h, otherArgs = tslib_1.__rest(_a, ["session", "title", "product_id", "updated_at_min", "updated_at_max", "published_at_min", "published_at_max", "published_status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_j) {
                switch (_j.label) {
                    case 0: return [4 /*yield*/, SmartCollection.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "title": title, "product_id": product_id, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "published_at_min": published_at_min, "published_at_max": published_at_max, "published_status": published_status }, otherArgs),
                            body: {},
                            entity: null,
                        })];
                    case 1:
                        response = _j.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    SmartCollection.prototype.order = function (_a) {
        var _b = _a.products, products = _b === void 0 ? null : _b, _c = _a.sort_order, sort_order = _c === void 0 ? null : _c, _d = _a.body, body = _d === void 0 ? null : _d, otherArgs = tslib_1.__rest(_a, ["products", "sort_order", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, SmartCollection.request({
                            http_method: "put",
                            operation: "order",
                            session: this.session,
                            urlIds: { "id": this.id },
                            params: tslib_1.__assign({ "products": products, "sort_order": sort_order }, otherArgs),
                            body: body,
                            entity: this,
                        })];
                    case 1:
                        response = _e.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    SmartCollection.API_VERSION = base_types_1.ApiVersion.October21;
    SmartCollection.NAME = 'smart_collection';
    SmartCollection.PLURAL_NAME = 'smart_collections';
    SmartCollection.HAS_ONE = {};
    SmartCollection.HAS_MANY = {};
    SmartCollection.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "smart_collections/<id>.json" },
        { "http_method": "get", "operation": "count", "ids": [], "path": "smart_collections/count.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "smart_collections.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "smart_collections/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "smart_collections.json" },
        { "http_method": "put", "operation": "order", "ids": ["id"], "path": "smart_collections/<id>/order.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "smart_collections/<id>.json" }
    ];
    return SmartCollection;
}(base_rest_resource_1.default));
exports.SmartCollection = SmartCollection;

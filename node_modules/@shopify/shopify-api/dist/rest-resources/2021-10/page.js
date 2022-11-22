"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var metafield_1 = require("./metafield");
var Page = /** @class */ (function (_super) {
    tslib_1.__extends(Page, _super);
    function Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Page.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.fields, fields = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Page.baseFind({
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
    Page.delete = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Page.request({
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
    Page.all = function (_a) {
        var session = _a.session, _b = _a.limit, limit = _b === void 0 ? null : _b, _c = _a.since_id, since_id = _c === void 0 ? null : _c, _d = _a.title, title = _d === void 0 ? null : _d, _e = _a.handle, handle = _e === void 0 ? null : _e, _f = _a.created_at_min, created_at_min = _f === void 0 ? null : _f, _g = _a.created_at_max, created_at_max = _g === void 0 ? null : _g, _h = _a.updated_at_min, updated_at_min = _h === void 0 ? null : _h, _j = _a.updated_at_max, updated_at_max = _j === void 0 ? null : _j, _k = _a.published_at_min, published_at_min = _k === void 0 ? null : _k, _l = _a.published_at_max, published_at_max = _l === void 0 ? null : _l, _m = _a.fields, fields = _m === void 0 ? null : _m, _o = _a.published_status, published_status = _o === void 0 ? null : _o, otherArgs = tslib_1.__rest(_a, ["session", "limit", "since_id", "title", "handle", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "published_at_min", "published_at_max", "fields", "published_status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_p) {
                switch (_p.label) {
                    case 0: return [4 /*yield*/, Page.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "limit": limit, "since_id": since_id, "title": title, "handle": handle, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "published_at_min": published_at_min, "published_at_max": published_at_max, "fields": fields, "published_status": published_status }, otherArgs),
                        })];
                    case 1:
                        response = _p.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Page.count = function (_a) {
        var session = _a.session, _b = _a.title, title = _b === void 0 ? null : _b, _c = _a.created_at_min, created_at_min = _c === void 0 ? null : _c, _d = _a.created_at_max, created_at_max = _d === void 0 ? null : _d, _e = _a.updated_at_min, updated_at_min = _e === void 0 ? null : _e, _f = _a.updated_at_max, updated_at_max = _f === void 0 ? null : _f, _g = _a.published_at_min, published_at_min = _g === void 0 ? null : _g, _h = _a.published_at_max, published_at_max = _h === void 0 ? null : _h, _j = _a.published_status, published_status = _j === void 0 ? null : _j, otherArgs = tslib_1.__rest(_a, ["session", "title", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "published_at_min", "published_at_max", "published_status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_k) {
                switch (_k.label) {
                    case 0: return [4 /*yield*/, Page.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "title": title, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "published_at_min": published_at_min, "published_at_max": published_at_max, "published_status": published_status }, otherArgs),
                            body: {},
                            entity: null,
                        })];
                    case 1:
                        response = _k.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Page.API_VERSION = base_types_1.ApiVersion.October21;
    Page.NAME = 'page';
    Page.PLURAL_NAME = 'pages';
    Page.HAS_ONE = {
        "metafield": metafield_1.Metafield
    };
    Page.HAS_MANY = {};
    Page.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "pages/<id>.json" },
        { "http_method": "get", "operation": "count", "ids": [], "path": "pages/count.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "pages.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "pages/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "pages.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "pages/<id>.json" }
    ];
    return Page;
}(base_rest_resource_1.default));
exports.Page = Page;

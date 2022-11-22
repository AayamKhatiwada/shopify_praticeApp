"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var metafield_1 = require("./metafield");
var Blog = /** @class */ (function (_super) {
    tslib_1.__extends(Blog, _super);
    function Blog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Blog.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.fields, fields = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Blog.baseFind({
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
    Blog.delete = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Blog.request({
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
    Blog.all = function (_a) {
        var session = _a.session, _b = _a.limit, limit = _b === void 0 ? null : _b, _c = _a.since_id, since_id = _c === void 0 ? null : _c, _d = _a.handle, handle = _d === void 0 ? null : _d, _e = _a.fields, fields = _e === void 0 ? null : _e, otherArgs = tslib_1.__rest(_a, ["session", "limit", "since_id", "handle", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, Blog.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "limit": limit, "since_id": since_id, "handle": handle, "fields": fields }, otherArgs),
                        })];
                    case 1:
                        response = _f.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Blog.count = function (_a) {
        var session = _a.session, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Blog.request({
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
    Blog.API_VERSION = base_types_1.ApiVersion.October21;
    Blog.NAME = 'blog';
    Blog.PLURAL_NAME = 'blogs';
    Blog.HAS_ONE = {};
    Blog.HAS_MANY = {
        "metafields": metafield_1.Metafield
    };
    Blog.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "blogs/<id>.json" },
        { "http_method": "get", "operation": "count", "ids": [], "path": "blogs/count.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "blogs.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "blogs/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "blogs.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "blogs/<id>.json" }
    ];
    return Blog;
}(base_rest_resource_1.default));
exports.Blog = Blog;

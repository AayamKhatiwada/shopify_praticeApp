"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var metafield_1 = require("./metafield");
var Article = /** @class */ (function (_super) {
    tslib_1.__extends(Article, _super);
    function Article() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Article.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.blog_id, blog_id = _b === void 0 ? null : _b, _c = _a.fields, fields = _c === void 0 ? null : _c;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, Article.baseFind({
                            session: session,
                            urlIds: { "id": id, "blog_id": blog_id },
                            params: { "fields": fields },
                        })];
                    case 1:
                        result = _d.sent();
                        return [2 /*return*/, result ? result[0] : null];
                }
            });
        });
    };
    Article.delete = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.blog_id, blog_id = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Article.request({
                            http_method: "delete",
                            operation: "delete",
                            session: session,
                            urlIds: { "id": id, "blog_id": blog_id },
                            params: {},
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Article.all = function (_a) {
        var session = _a.session, _b = _a.blog_id, blog_id = _b === void 0 ? null : _b, _c = _a.limit, limit = _c === void 0 ? null : _c, _d = _a.since_id, since_id = _d === void 0 ? null : _d, _e = _a.created_at_min, created_at_min = _e === void 0 ? null : _e, _f = _a.created_at_max, created_at_max = _f === void 0 ? null : _f, _g = _a.updated_at_min, updated_at_min = _g === void 0 ? null : _g, _h = _a.updated_at_max, updated_at_max = _h === void 0 ? null : _h, _j = _a.published_at_min, published_at_min = _j === void 0 ? null : _j, _k = _a.published_at_max, published_at_max = _k === void 0 ? null : _k, _l = _a.published_status, published_status = _l === void 0 ? null : _l, _m = _a.handle, handle = _m === void 0 ? null : _m, _o = _a.tag, tag = _o === void 0 ? null : _o, _p = _a.author, author = _p === void 0 ? null : _p, _q = _a.fields, fields = _q === void 0 ? null : _q, otherArgs = tslib_1.__rest(_a, ["session", "blog_id", "limit", "since_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "published_at_min", "published_at_max", "published_status", "handle", "tag", "author", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_r) {
                switch (_r.label) {
                    case 0: return [4 /*yield*/, Article.baseFind({
                            session: session,
                            urlIds: { "blog_id": blog_id },
                            params: tslib_1.__assign({ "limit": limit, "since_id": since_id, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "published_at_min": published_at_min, "published_at_max": published_at_max, "published_status": published_status, "handle": handle, "tag": tag, "author": author, "fields": fields }, otherArgs),
                        })];
                    case 1:
                        response = _r.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Article.authors = function (_a) {
        var session = _a.session, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Article.request({
                            http_method: "get",
                            operation: "authors",
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
    Article.count = function (_a) {
        var session = _a.session, _b = _a.blog_id, blog_id = _b === void 0 ? null : _b, _c = _a.created_at_min, created_at_min = _c === void 0 ? null : _c, _d = _a.created_at_max, created_at_max = _d === void 0 ? null : _d, _e = _a.updated_at_min, updated_at_min = _e === void 0 ? null : _e, _f = _a.updated_at_max, updated_at_max = _f === void 0 ? null : _f, _g = _a.published_at_min, published_at_min = _g === void 0 ? null : _g, _h = _a.published_at_max, published_at_max = _h === void 0 ? null : _h, _j = _a.published_status, published_status = _j === void 0 ? null : _j, otherArgs = tslib_1.__rest(_a, ["session", "blog_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "published_at_min", "published_at_max", "published_status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_k) {
                switch (_k.label) {
                    case 0: return [4 /*yield*/, Article.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: { "blog_id": blog_id },
                            params: tslib_1.__assign({ "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "published_at_min": published_at_min, "published_at_max": published_at_max, "published_status": published_status }, otherArgs),
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
    Article.tags = function (_a) {
        var session = _a.session, _b = _a.blog_id, blog_id = _b === void 0 ? null : _b, _c = _a.limit, limit = _c === void 0 ? null : _c, _d = _a.popular, popular = _d === void 0 ? null : _d, otherArgs = tslib_1.__rest(_a, ["session", "blog_id", "limit", "popular"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, Article.request({
                            http_method: "get",
                            operation: "tags",
                            session: session,
                            urlIds: { "blog_id": blog_id },
                            params: tslib_1.__assign({ "limit": limit, "popular": popular }, otherArgs),
                            body: {},
                            entity: null,
                        })];
                    case 1:
                        response = _e.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Article.API_VERSION = base_types_1.ApiVersion.October22;
    Article.NAME = 'article';
    Article.PLURAL_NAME = 'articles';
    Article.HAS_ONE = {};
    Article.HAS_MANY = {
        "metafields": metafield_1.Metafield
    };
    Article.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["blog_id", "id"], "path": "blogs/<blog_id>/articles/<id>.json" },
        { "http_method": "get", "operation": "authors", "ids": [], "path": "articles/authors.json" },
        { "http_method": "get", "operation": "count", "ids": ["blog_id"], "path": "blogs/<blog_id>/articles/count.json" },
        { "http_method": "get", "operation": "get", "ids": ["blog_id"], "path": "blogs/<blog_id>/articles.json" },
        { "http_method": "get", "operation": "get", "ids": ["blog_id", "id"], "path": "blogs/<blog_id>/articles/<id>.json" },
        { "http_method": "get", "operation": "tags", "ids": [], "path": "articles/tags.json" },
        { "http_method": "get", "operation": "tags", "ids": ["blog_id"], "path": "blogs/<blog_id>/articles/tags.json" },
        { "http_method": "post", "operation": "post", "ids": ["blog_id"], "path": "blogs/<blog_id>/articles.json" },
        { "http_method": "put", "operation": "put", "ids": ["blog_id", "id"], "path": "blogs/<blog_id>/articles/<id>.json" }
    ];
    return Article;
}(base_rest_resource_1.default));
exports.Article = Article;

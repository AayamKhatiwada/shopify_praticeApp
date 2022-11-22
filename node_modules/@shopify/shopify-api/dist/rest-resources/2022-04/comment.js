"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var Comment = /** @class */ (function (_super) {
    tslib_1.__extends(Comment, _super);
    function Comment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Comment.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.fields, fields = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Comment.baseFind({
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
    Comment.all = function (_a) {
        var session = _a.session, _b = _a.limit, limit = _b === void 0 ? null : _b, _c = _a.since_id, since_id = _c === void 0 ? null : _c, _d = _a.created_at_min, created_at_min = _d === void 0 ? null : _d, _e = _a.created_at_max, created_at_max = _e === void 0 ? null : _e, _f = _a.updated_at_min, updated_at_min = _f === void 0 ? null : _f, _g = _a.updated_at_max, updated_at_max = _g === void 0 ? null : _g, _h = _a.published_at_min, published_at_min = _h === void 0 ? null : _h, _j = _a.published_at_max, published_at_max = _j === void 0 ? null : _j, _k = _a.fields, fields = _k === void 0 ? null : _k, _l = _a.published_status, published_status = _l === void 0 ? null : _l, _m = _a.status, status = _m === void 0 ? null : _m, otherArgs = tslib_1.__rest(_a, ["session", "limit", "since_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "published_at_min", "published_at_max", "fields", "published_status", "status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_o) {
                switch (_o.label) {
                    case 0: return [4 /*yield*/, Comment.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "limit": limit, "since_id": since_id, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "published_at_min": published_at_min, "published_at_max": published_at_max, "fields": fields, "published_status": published_status, "status": status }, otherArgs),
                        })];
                    case 1:
                        response = _o.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Comment.count = function (_a) {
        var session = _a.session, _b = _a.created_at_min, created_at_min = _b === void 0 ? null : _b, _c = _a.created_at_max, created_at_max = _c === void 0 ? null : _c, _d = _a.updated_at_min, updated_at_min = _d === void 0 ? null : _d, _e = _a.updated_at_max, updated_at_max = _e === void 0 ? null : _e, _f = _a.published_at_min, published_at_min = _f === void 0 ? null : _f, _g = _a.published_at_max, published_at_max = _g === void 0 ? null : _g, _h = _a.published_status, published_status = _h === void 0 ? null : _h, _j = _a.status, status = _j === void 0 ? null : _j, otherArgs = tslib_1.__rest(_a, ["session", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "published_at_min", "published_at_max", "published_status", "status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_k) {
                switch (_k.label) {
                    case 0: return [4 /*yield*/, Comment.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "published_at_min": published_at_min, "published_at_max": published_at_max, "published_status": published_status, "status": status }, otherArgs),
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
    Comment.prototype.approve = function (_a) {
        var _b = _a.body, body = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Comment.request({
                            http_method: "post",
                            operation: "approve",
                            session: this.session,
                            urlIds: { "id": this.id },
                            params: tslib_1.__assign({}, otherArgs),
                            body: body,
                            entity: this,
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Comment.prototype.not_spam = function (_a) {
        var _b = _a.body, body = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Comment.request({
                            http_method: "post",
                            operation: "not_spam",
                            session: this.session,
                            urlIds: { "id": this.id },
                            params: tslib_1.__assign({}, otherArgs),
                            body: body,
                            entity: this,
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Comment.prototype.remove = function (_a) {
        var _b = _a.body, body = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Comment.request({
                            http_method: "post",
                            operation: "remove",
                            session: this.session,
                            urlIds: { "id": this.id },
                            params: tslib_1.__assign({}, otherArgs),
                            body: body,
                            entity: this,
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Comment.prototype.restore = function (_a) {
        var _b = _a.body, body = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Comment.request({
                            http_method: "post",
                            operation: "restore",
                            session: this.session,
                            urlIds: { "id": this.id },
                            params: tslib_1.__assign({}, otherArgs),
                            body: body,
                            entity: this,
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Comment.prototype.spam = function (_a) {
        var _b = _a.body, body = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Comment.request({
                            http_method: "post",
                            operation: "spam",
                            session: this.session,
                            urlIds: { "id": this.id },
                            params: tslib_1.__assign({}, otherArgs),
                            body: body,
                            entity: this,
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Comment.API_VERSION = base_types_1.ApiVersion.April22;
    Comment.NAME = 'comment';
    Comment.PLURAL_NAME = 'comments';
    Comment.HAS_ONE = {};
    Comment.HAS_MANY = {};
    Comment.PATHS = [
        { "http_method": "get", "operation": "count", "ids": [], "path": "comments/count.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "comments.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "comments/<id>.json" },
        { "http_method": "post", "operation": "approve", "ids": ["id"], "path": "comments/<id>/approve.json" },
        { "http_method": "post", "operation": "not_spam", "ids": ["id"], "path": "comments/<id>/not_spam.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "comments.json" },
        { "http_method": "post", "operation": "remove", "ids": ["id"], "path": "comments/<id>/remove.json" },
        { "http_method": "post", "operation": "restore", "ids": ["id"], "path": "comments/<id>/restore.json" },
        { "http_method": "post", "operation": "spam", "ids": ["id"], "path": "comments/<id>/spam.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "comments/<id>.json" }
    ];
    return Comment;
}(base_rest_resource_1.default));
exports.Comment = Comment;

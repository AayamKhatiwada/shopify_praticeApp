"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Redirect = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var Redirect = /** @class */ (function (_super) {
    tslib_1.__extends(Redirect, _super);
    function Redirect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Redirect.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.fields, fields = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Redirect.baseFind({
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
    Redirect.delete = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Redirect.request({
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
    Redirect.all = function (_a) {
        var session = _a.session, _b = _a.limit, limit = _b === void 0 ? null : _b, _c = _a.since_id, since_id = _c === void 0 ? null : _c, _d = _a.path, path = _d === void 0 ? null : _d, _e = _a.target, target = _e === void 0 ? null : _e, _f = _a.fields, fields = _f === void 0 ? null : _f, otherArgs = tslib_1.__rest(_a, ["session", "limit", "since_id", "path", "target", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_g) {
                switch (_g.label) {
                    case 0: return [4 /*yield*/, Redirect.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "limit": limit, "since_id": since_id, "path": path, "target": target, "fields": fields }, otherArgs),
                        })];
                    case 1:
                        response = _g.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Redirect.count = function (_a) {
        var session = _a.session, _b = _a.path, path = _b === void 0 ? null : _b, _c = _a.target, target = _c === void 0 ? null : _c, otherArgs = tslib_1.__rest(_a, ["session", "path", "target"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, Redirect.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "path": path, "target": target }, otherArgs),
                            body: {},
                            entity: null,
                        })];
                    case 1:
                        response = _d.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Redirect.API_VERSION = base_types_1.ApiVersion.April22;
    Redirect.NAME = 'redirect';
    Redirect.PLURAL_NAME = 'redirects';
    Redirect.HAS_ONE = {};
    Redirect.HAS_MANY = {};
    Redirect.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "redirects/<id>.json" },
        { "http_method": "get", "operation": "count", "ids": [], "path": "redirects/count.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "redirects.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "redirects/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "redirects.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "redirects/<id>.json" }
    ];
    return Redirect;
}(base_rest_resource_1.default));
exports.Redirect = Redirect;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptTag = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var ScriptTag = /** @class */ (function (_super) {
    tslib_1.__extends(ScriptTag, _super);
    function ScriptTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScriptTag.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.fields, fields = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, ScriptTag.baseFind({
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
    ScriptTag.delete = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ScriptTag.request({
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
    ScriptTag.all = function (_a) {
        var session = _a.session, _b = _a.limit, limit = _b === void 0 ? null : _b, _c = _a.since_id, since_id = _c === void 0 ? null : _c, _d = _a.created_at_min, created_at_min = _d === void 0 ? null : _d, _e = _a.created_at_max, created_at_max = _e === void 0 ? null : _e, _f = _a.updated_at_min, updated_at_min = _f === void 0 ? null : _f, _g = _a.updated_at_max, updated_at_max = _g === void 0 ? null : _g, _h = _a.src, src = _h === void 0 ? null : _h, _j = _a.fields, fields = _j === void 0 ? null : _j, otherArgs = tslib_1.__rest(_a, ["session", "limit", "since_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "src", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_k) {
                switch (_k.label) {
                    case 0: return [4 /*yield*/, ScriptTag.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "limit": limit, "since_id": since_id, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "src": src, "fields": fields }, otherArgs),
                        })];
                    case 1:
                        response = _k.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    ScriptTag.count = function (_a) {
        var session = _a.session, _b = _a.src, src = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "src"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, ScriptTag.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "src": src }, otherArgs),
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
    ScriptTag.API_VERSION = base_types_1.ApiVersion.October21;
    ScriptTag.NAME = 'script_tag';
    ScriptTag.PLURAL_NAME = 'script_tags';
    ScriptTag.HAS_ONE = {};
    ScriptTag.HAS_MANY = {};
    ScriptTag.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "script_tags/<id>.json" },
        { "http_method": "get", "operation": "count", "ids": [], "path": "script_tags/count.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "script_tags.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "script_tags/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "script_tags.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "script_tags/<id>.json" }
    ];
    return ScriptTag;
}(base_rest_resource_1.default));
exports.ScriptTag = ScriptTag;

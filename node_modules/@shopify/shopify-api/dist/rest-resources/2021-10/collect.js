"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collect = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var Collect = /** @class */ (function (_super) {
    tslib_1.__extends(Collect, _super);
    function Collect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Collect.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.fields, fields = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Collect.baseFind({
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
    Collect.delete = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Collect.request({
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
    Collect.all = function (_a) {
        var session = _a.session, _b = _a.limit, limit = _b === void 0 ? null : _b, _c = _a.since_id, since_id = _c === void 0 ? null : _c, _d = _a.fields, fields = _d === void 0 ? null : _d, otherArgs = tslib_1.__rest(_a, ["session", "limit", "since_id", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, Collect.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "limit": limit, "since_id": since_id, "fields": fields }, otherArgs),
                        })];
                    case 1:
                        response = _e.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Collect.count = function (_a) {
        var session = _a.session, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Collect.request({
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
    Collect.API_VERSION = base_types_1.ApiVersion.October21;
    Collect.NAME = 'collect';
    Collect.PLURAL_NAME = 'collects';
    Collect.HAS_ONE = {};
    Collect.HAS_MANY = {};
    Collect.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "collects/<id>.json" },
        { "http_method": "get", "operation": "count", "ids": [], "path": "collects/count.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "collects.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "collects/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "collects.json" }
    ];
    return Collect;
}(base_rest_resource_1.default));
exports.Collect = Collect;

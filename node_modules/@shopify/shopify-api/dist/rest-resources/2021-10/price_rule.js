"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceRule = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var PriceRule = /** @class */ (function (_super) {
    tslib_1.__extends(PriceRule, _super);
    function PriceRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PriceRule.find = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, PriceRule.baseFind({
                            session: session,
                            urlIds: { "id": id },
                            params: {},
                        })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, result ? result[0] : null];
                }
            });
        });
    };
    PriceRule.delete = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, PriceRule.request({
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
    PriceRule.all = function (_a) {
        var session = _a.session, _b = _a.limit, limit = _b === void 0 ? null : _b, _c = _a.since_id, since_id = _c === void 0 ? null : _c, _d = _a.created_at_min, created_at_min = _d === void 0 ? null : _d, _e = _a.created_at_max, created_at_max = _e === void 0 ? null : _e, _f = _a.updated_at_min, updated_at_min = _f === void 0 ? null : _f, _g = _a.updated_at_max, updated_at_max = _g === void 0 ? null : _g, _h = _a.starts_at_min, starts_at_min = _h === void 0 ? null : _h, _j = _a.starts_at_max, starts_at_max = _j === void 0 ? null : _j, _k = _a.ends_at_min, ends_at_min = _k === void 0 ? null : _k, _l = _a.ends_at_max, ends_at_max = _l === void 0 ? null : _l, _m = _a.times_used, times_used = _m === void 0 ? null : _m, otherArgs = tslib_1.__rest(_a, ["session", "limit", "since_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "starts_at_min", "starts_at_max", "ends_at_min", "ends_at_max", "times_used"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_o) {
                switch (_o.label) {
                    case 0: return [4 /*yield*/, PriceRule.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "limit": limit, "since_id": since_id, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "starts_at_min": starts_at_min, "starts_at_max": starts_at_max, "ends_at_min": ends_at_min, "ends_at_max": ends_at_max, "times_used": times_used }, otherArgs),
                        })];
                    case 1:
                        response = _o.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    PriceRule.count = function (_a) {
        var session = _a.session, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, PriceRule.request({
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
    PriceRule.API_VERSION = base_types_1.ApiVersion.October21;
    PriceRule.NAME = 'price_rule';
    PriceRule.PLURAL_NAME = 'price_rules';
    PriceRule.HAS_ONE = {};
    PriceRule.HAS_MANY = {};
    PriceRule.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "price_rules/<id>.json" },
        { "http_method": "get", "operation": "count", "ids": [], "path": "price_rules/count.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "price_rules.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "price_rules/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "price_rules.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "price_rules/<id>.json" }
    ];
    return PriceRule;
}(base_rest_resource_1.default));
exports.PriceRule = PriceRule;

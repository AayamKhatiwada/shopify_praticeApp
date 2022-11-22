"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountCode = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var DiscountCode = /** @class */ (function (_super) {
    tslib_1.__extends(DiscountCode, _super);
    function DiscountCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiscountCode.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.price_rule_id, price_rule_id = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, DiscountCode.baseFind({
                            session: session,
                            urlIds: { "id": id, "price_rule_id": price_rule_id },
                            params: {},
                        })];
                    case 1:
                        result = _c.sent();
                        return [2 /*return*/, result ? result[0] : null];
                }
            });
        });
    };
    DiscountCode.delete = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.price_rule_id, price_rule_id = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, DiscountCode.request({
                            http_method: "delete",
                            operation: "delete",
                            session: session,
                            urlIds: { "id": id, "price_rule_id": price_rule_id },
                            params: {},
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    DiscountCode.all = function (_a) {
        var session = _a.session, _b = _a.price_rule_id, price_rule_id = _b === void 0 ? null : _b, _c = _a.batch_id, batch_id = _c === void 0 ? null : _c, otherArgs = tslib_1.__rest(_a, ["session", "price_rule_id", "batch_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, DiscountCode.baseFind({
                            session: session,
                            urlIds: { "price_rule_id": price_rule_id, "batch_id": batch_id },
                            params: tslib_1.__assign({}, otherArgs),
                        })];
                    case 1:
                        response = _d.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    DiscountCode.count = function (_a) {
        var session = _a.session, _b = _a.times_used, times_used = _b === void 0 ? null : _b, _c = _a.times_used_min, times_used_min = _c === void 0 ? null : _c, _d = _a.times_used_max, times_used_max = _d === void 0 ? null : _d, otherArgs = tslib_1.__rest(_a, ["session", "times_used", "times_used_min", "times_used_max"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, DiscountCode.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "times_used": times_used, "times_used_min": times_used_min, "times_used_max": times_used_max }, otherArgs),
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
    DiscountCode.get_all = function (_a) {
        var session = _a.session, _b = _a.price_rule_id, price_rule_id = _b === void 0 ? null : _b, _c = _a.batch_id, batch_id = _c === void 0 ? null : _c, otherArgs = tslib_1.__rest(_a, ["session", "price_rule_id", "batch_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, DiscountCode.request({
                            http_method: "get",
                            operation: "get_all",
                            session: session,
                            urlIds: { "price_rule_id": price_rule_id, "batch_id": batch_id },
                            params: tslib_1.__assign({}, otherArgs),
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
    DiscountCode.lookup = function (_a) {
        var session = _a.session, _b = _a.code, code = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "code"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, DiscountCode.request({
                            http_method: "get",
                            operation: "lookup",
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "code": code }, otherArgs),
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
    DiscountCode.prototype.batch = function (_a) {
        var _b = _a.body, body = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, DiscountCode.request({
                            http_method: "post",
                            operation: "batch",
                            session: this.session,
                            urlIds: { "price_rule_id": this.price_rule_id },
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
    DiscountCode.API_VERSION = base_types_1.ApiVersion.April22;
    DiscountCode.NAME = 'discount_code';
    DiscountCode.PLURAL_NAME = 'discount_codes';
    DiscountCode.HAS_ONE = {};
    DiscountCode.HAS_MANY = {};
    DiscountCode.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["price_rule_id", "id"], "path": "price_rules/<price_rule_id>/discount_codes/<id>.json" },
        { "http_method": "get", "operation": "count", "ids": [], "path": "discount_codes/count.json" },
        { "http_method": "get", "operation": "get", "ids": ["price_rule_id", "batch_id"], "path": "price_rules/<price_rule_id>/batch/<batch_id>/discount_codes.json" },
        { "http_method": "get", "operation": "get", "ids": ["price_rule_id"], "path": "price_rules/<price_rule_id>/discount_codes.json" },
        { "http_method": "get", "operation": "get", "ids": ["price_rule_id", "id"], "path": "price_rules/<price_rule_id>/discount_codes/<id>.json" },
        { "http_method": "get", "operation": "get_all", "ids": ["price_rule_id", "batch_id"], "path": "price_rules/<price_rule_id>/batch/<batch_id>.json" },
        { "http_method": "get", "operation": "lookup", "ids": [], "path": "discount_codes/lookup.json" },
        { "http_method": "post", "operation": "batch", "ids": ["price_rule_id"], "path": "price_rules/<price_rule_id>/batch.json" },
        { "http_method": "post", "operation": "post", "ids": ["price_rule_id"], "path": "price_rules/<price_rule_id>/discount_codes.json" },
        { "http_method": "put", "operation": "put", "ids": ["price_rule_id", "id"], "path": "price_rules/<price_rule_id>/discount_codes/<id>.json" }
    ];
    return DiscountCode;
}(base_rest_resource_1.default));
exports.DiscountCode = DiscountCode;

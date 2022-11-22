"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refund = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var transaction_1 = require("./transaction");
var Refund = /** @class */ (function (_super) {
    tslib_1.__extends(Refund, _super);
    function Refund() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Refund.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.order_id, order_id = _b === void 0 ? null : _b, _c = _a.fields, fields = _c === void 0 ? null : _c, _d = _a.in_shop_currency, in_shop_currency = _d === void 0 ? null : _d;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, Refund.baseFind({
                            session: session,
                            urlIds: { "id": id, "order_id": order_id },
                            params: { "fields": fields, "in_shop_currency": in_shop_currency },
                        })];
                    case 1:
                        result = _e.sent();
                        return [2 /*return*/, result ? result[0] : null];
                }
            });
        });
    };
    Refund.all = function (_a) {
        var session = _a.session, _b = _a.order_id, order_id = _b === void 0 ? null : _b, _c = _a.limit, limit = _c === void 0 ? null : _c, _d = _a.fields, fields = _d === void 0 ? null : _d, _e = _a.in_shop_currency, in_shop_currency = _e === void 0 ? null : _e, otherArgs = tslib_1.__rest(_a, ["session", "order_id", "limit", "fields", "in_shop_currency"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, Refund.baseFind({
                            session: session,
                            urlIds: { "order_id": order_id },
                            params: tslib_1.__assign({ "limit": limit, "fields": fields, "in_shop_currency": in_shop_currency }, otherArgs),
                        })];
                    case 1:
                        response = _f.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Refund.prototype.calculate = function (_a) {
        var _b = _a.shipping, shipping = _b === void 0 ? null : _b, _c = _a.refund_line_items, refund_line_items = _c === void 0 ? null : _c, _d = _a.currency, currency = _d === void 0 ? null : _d, _e = _a.body, body = _e === void 0 ? null : _e, otherArgs = tslib_1.__rest(_a, ["shipping", "refund_line_items", "currency", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, Refund.request({
                            http_method: "post",
                            operation: "calculate",
                            session: this.session,
                            urlIds: { "order_id": this.order_id },
                            params: tslib_1.__assign({ "shipping": shipping, "refund_line_items": refund_line_items, "currency": currency }, otherArgs),
                            body: body,
                            entity: this,
                        })];
                    case 1:
                        response = _f.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Refund.API_VERSION = base_types_1.ApiVersion.July22;
    Refund.NAME = 'refund';
    Refund.PLURAL_NAME = 'refunds';
    Refund.HAS_ONE = {};
    Refund.HAS_MANY = {
        "transactions": transaction_1.Transaction
    };
    Refund.PATHS = [
        { "http_method": "get", "operation": "get", "ids": ["order_id"], "path": "orders/<order_id>/refunds.json" },
        { "http_method": "get", "operation": "get", "ids": ["order_id", "id"], "path": "orders/<order_id>/refunds/<id>.json" },
        { "http_method": "post", "operation": "calculate", "ids": ["order_id"], "path": "orders/<order_id>/refunds/calculate.json" },
        { "http_method": "post", "operation": "post", "ids": ["order_id"], "path": "orders/<order_id>/refunds.json" }
    ];
    return Refund;
}(base_rest_resource_1.default));
exports.Refund = Refund;

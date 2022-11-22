"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var customer_1 = require("./customer");
var discount_code_1 = require("./discount_code");
var fulfillment_1 = require("./fulfillment");
var refund_1 = require("./refund");
var Order = /** @class */ (function (_super) {
    tslib_1.__extends(Order, _super);
    function Order() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Order.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.fields, fields = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Order.baseFind({
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
    Order.delete = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Order.request({
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
    Order.all = function (_a) {
        var session = _a.session, _b = _a.ids, ids = _b === void 0 ? null : _b, _c = _a.limit, limit = _c === void 0 ? null : _c, _d = _a.since_id, since_id = _d === void 0 ? null : _d, _e = _a.created_at_min, created_at_min = _e === void 0 ? null : _e, _f = _a.created_at_max, created_at_max = _f === void 0 ? null : _f, _g = _a.updated_at_min, updated_at_min = _g === void 0 ? null : _g, _h = _a.updated_at_max, updated_at_max = _h === void 0 ? null : _h, _j = _a.processed_at_min, processed_at_min = _j === void 0 ? null : _j, _k = _a.processed_at_max, processed_at_max = _k === void 0 ? null : _k, _l = _a.attribution_app_id, attribution_app_id = _l === void 0 ? null : _l, _m = _a.status, status = _m === void 0 ? null : _m, _o = _a.financial_status, financial_status = _o === void 0 ? null : _o, _p = _a.fulfillment_status, fulfillment_status = _p === void 0 ? null : _p, _q = _a.fields, fields = _q === void 0 ? null : _q, otherArgs = tslib_1.__rest(_a, ["session", "ids", "limit", "since_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "processed_at_min", "processed_at_max", "attribution_app_id", "status", "financial_status", "fulfillment_status", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_r) {
                switch (_r.label) {
                    case 0: return [4 /*yield*/, Order.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "ids": ids, "limit": limit, "since_id": since_id, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "processed_at_min": processed_at_min, "processed_at_max": processed_at_max, "attribution_app_id": attribution_app_id, "status": status, "financial_status": financial_status, "fulfillment_status": fulfillment_status, "fields": fields }, otherArgs),
                        })];
                    case 1:
                        response = _r.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Order.count = function (_a) {
        var session = _a.session, _b = _a.created_at_min, created_at_min = _b === void 0 ? null : _b, _c = _a.created_at_max, created_at_max = _c === void 0 ? null : _c, _d = _a.updated_at_min, updated_at_min = _d === void 0 ? null : _d, _e = _a.updated_at_max, updated_at_max = _e === void 0 ? null : _e, _f = _a.status, status = _f === void 0 ? null : _f, _g = _a.financial_status, financial_status = _g === void 0 ? null : _g, _h = _a.fulfillment_status, fulfillment_status = _h === void 0 ? null : _h, otherArgs = tslib_1.__rest(_a, ["session", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "status", "financial_status", "fulfillment_status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_j) {
                switch (_j.label) {
                    case 0: return [4 /*yield*/, Order.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "status": status, "financial_status": financial_status, "fulfillment_status": fulfillment_status }, otherArgs),
                            body: {},
                            entity: null,
                        })];
                    case 1:
                        response = _j.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Order.prototype.cancel = function (_a) {
        var _b = _a.amount, amount = _b === void 0 ? null : _b, _c = _a.currency, currency = _c === void 0 ? null : _c, _d = _a.restock, restock = _d === void 0 ? null : _d, _e = _a.reason, reason = _e === void 0 ? null : _e, _f = _a.email, email = _f === void 0 ? null : _f, _g = _a.refund, refund = _g === void 0 ? null : _g, _h = _a.body, body = _h === void 0 ? null : _h, otherArgs = tslib_1.__rest(_a, ["amount", "currency", "restock", "reason", "email", "refund", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_j) {
                switch (_j.label) {
                    case 0: return [4 /*yield*/, Order.request({
                            http_method: "post",
                            operation: "cancel",
                            session: this.session,
                            urlIds: { "id": this.id },
                            params: tslib_1.__assign({ "amount": amount, "currency": currency, "restock": restock, "reason": reason, "email": email, "refund": refund }, otherArgs),
                            body: body,
                            entity: this,
                        })];
                    case 1:
                        response = _j.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Order.prototype.close = function (_a) {
        var _b = _a.body, body = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Order.request({
                            http_method: "post",
                            operation: "close",
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
    Order.prototype.open = function (_a) {
        var _b = _a.body, body = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Order.request({
                            http_method: "post",
                            operation: "open",
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
    Order.API_VERSION = base_types_1.ApiVersion.October22;
    Order.NAME = 'order';
    Order.PLURAL_NAME = 'orders';
    Order.HAS_ONE = {
        "customer": customer_1.Customer
    };
    Order.HAS_MANY = {
        "discount_codes": discount_code_1.DiscountCode,
        "fulfillments": fulfillment_1.Fulfillment,
        "refunds": refund_1.Refund
    };
    Order.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "orders/<id>.json" },
        { "http_method": "get", "operation": "count", "ids": [], "path": "orders/count.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "orders.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "orders/<id>.json" },
        { "http_method": "post", "operation": "cancel", "ids": ["id"], "path": "orders/<id>/cancel.json" },
        { "http_method": "post", "operation": "close", "ids": ["id"], "path": "orders/<id>/close.json" },
        { "http_method": "post", "operation": "open", "ids": ["id"], "path": "orders/<id>/open.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "orders.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "orders/<id>.json" }
    ];
    return Order;
}(base_rest_resource_1.default));
exports.Order = Order;

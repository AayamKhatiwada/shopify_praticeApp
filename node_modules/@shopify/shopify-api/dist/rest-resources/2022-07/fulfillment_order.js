"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.FulfillmentOrder = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var FulfillmentOrder = /** @class */ (function (_super) {
    tslib_1.__extends(FulfillmentOrder, _super);
    function FulfillmentOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FulfillmentOrder.find = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, FulfillmentOrder.baseFind({
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
    FulfillmentOrder.all = function (_a) {
        var session = _a.session, _b = _a.order_id, order_id = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "order_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, FulfillmentOrder.baseFind({
                            session: session,
                            urlIds: { "order_id": order_id },
                            params: tslib_1.__assign({}, otherArgs),
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    FulfillmentOrder.prototype.cancel = function (_a) {
        var _b = _a.body, body = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, FulfillmentOrder.request({
                            http_method: "post",
                            operation: "cancel",
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
    FulfillmentOrder.prototype.close = function (_a) {
        var _b = _a.message, message = _b === void 0 ? null : _b, _c = _a.body, body = _c === void 0 ? null : _c, otherArgs = tslib_1.__rest(_a, ["message", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, FulfillmentOrder.request({
                            http_method: "post",
                            operation: "close",
                            session: this.session,
                            urlIds: { "id": this.id },
                            params: tslib_1.__assign({ "message": message }, otherArgs),
                            body: body,
                            entity: this,
                        })];
                    case 1:
                        response = _d.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    FulfillmentOrder.prototype.hold = function (_a) {
        var _b = _a.reason, reason = _b === void 0 ? null : _b, _c = _a.reason_notes, reason_notes = _c === void 0 ? null : _c, _d = _a.notify_merchant, notify_merchant = _d === void 0 ? null : _d, _e = _a.body, body = _e === void 0 ? null : _e, otherArgs = tslib_1.__rest(_a, ["reason", "reason_notes", "notify_merchant", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, FulfillmentOrder.request({
                            http_method: "post",
                            operation: "hold",
                            session: this.session,
                            urlIds: { "id": this.id },
                            params: tslib_1.__assign({ "reason": reason, "reason_notes": reason_notes, "notify_merchant": notify_merchant }, otherArgs),
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
    FulfillmentOrder.prototype.move = function (_a) {
        var _b = _a.new_location_id, new_location_id = _b === void 0 ? null : _b, _c = _a.body, body = _c === void 0 ? null : _c, otherArgs = tslib_1.__rest(_a, ["new_location_id", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, FulfillmentOrder.request({
                            http_method: "post",
                            operation: "move",
                            session: this.session,
                            urlIds: { "id": this.id },
                            params: tslib_1.__assign({ "new_location_id": new_location_id }, otherArgs),
                            body: body,
                            entity: this,
                        })];
                    case 1:
                        response = _d.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    FulfillmentOrder.prototype.open = function (_a) {
        var _b = _a.body, body = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, FulfillmentOrder.request({
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
    FulfillmentOrder.prototype.release_hold = function (_a) {
        var _b = _a.body, body = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, FulfillmentOrder.request({
                            http_method: "post",
                            operation: "release_hold",
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
    FulfillmentOrder.prototype.reschedule = function (_a) {
        var _b = _a.body, body = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, FulfillmentOrder.request({
                            http_method: "post",
                            operation: "reschedule",
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
    FulfillmentOrder.prototype.set_fulfillment_orders_deadline = function (_a) {
        var _b = _a.fulfillment_order_ids, fulfillment_order_ids = _b === void 0 ? null : _b, _c = _a.fulfillment_deadline, fulfillment_deadline = _c === void 0 ? null : _c, _d = _a.body, body = _d === void 0 ? null : _d, otherArgs = tslib_1.__rest(_a, ["fulfillment_order_ids", "fulfillment_deadline", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, FulfillmentOrder.request({
                            http_method: "post",
                            operation: "set_fulfillment_orders_deadline",
                            session: this.session,
                            urlIds: {},
                            params: tslib_1.__assign({ "fulfillment_order_ids": fulfillment_order_ids, "fulfillment_deadline": fulfillment_deadline }, otherArgs),
                            body: body,
                            entity: this,
                        })];
                    case 1:
                        response = _e.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    FulfillmentOrder.API_VERSION = base_types_1.ApiVersion.July22;
    FulfillmentOrder.NAME = 'fulfillment_order';
    FulfillmentOrder.PLURAL_NAME = 'fulfillment_orders';
    FulfillmentOrder.HAS_ONE = {};
    FulfillmentOrder.HAS_MANY = {};
    FulfillmentOrder.PATHS = [
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "fulfillment_orders/<id>.json" },
        { "http_method": "get", "operation": "get", "ids": ["order_id"], "path": "orders/<order_id>/fulfillment_orders.json" },
        { "http_method": "post", "operation": "cancel", "ids": ["id"], "path": "fulfillment_orders/<id>/cancel.json" },
        { "http_method": "post", "operation": "close", "ids": ["id"], "path": "fulfillment_orders/<id>/close.json" },
        { "http_method": "post", "operation": "hold", "ids": ["id"], "path": "fulfillment_orders/<id>/hold.json" },
        { "http_method": "post", "operation": "move", "ids": ["id"], "path": "fulfillment_orders/<id>/move.json" },
        { "http_method": "post", "operation": "open", "ids": ["id"], "path": "fulfillment_orders/<id>/open.json" },
        { "http_method": "post", "operation": "release_hold", "ids": ["id"], "path": "fulfillment_orders/<id>/release_hold.json" },
        { "http_method": "post", "operation": "reschedule", "ids": ["id"], "path": "fulfillment_orders/<id>/reschedule.json" },
        { "http_method": "post", "operation": "set_fulfillment_orders_deadline", "ids": [], "path": "fulfillment_orders/set_fulfillment_orders_deadline.json" }
    ];
    return FulfillmentOrder;
}(base_rest_resource_1.default));
exports.FulfillmentOrder = FulfillmentOrder;

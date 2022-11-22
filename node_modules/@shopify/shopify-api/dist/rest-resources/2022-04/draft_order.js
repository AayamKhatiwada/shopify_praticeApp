"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftOrder = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var customer_1 = require("./customer");
var DraftOrder = /** @class */ (function (_super) {
    tslib_1.__extends(DraftOrder, _super);
    function DraftOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DraftOrder.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.fields, fields = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, DraftOrder.baseFind({
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
    DraftOrder.delete = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, DraftOrder.request({
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
    DraftOrder.all = function (_a) {
        var session = _a.session, _b = _a.fields, fields = _b === void 0 ? null : _b, _c = _a.limit, limit = _c === void 0 ? null : _c, _d = _a.since_id, since_id = _d === void 0 ? null : _d, _e = _a.updated_at_min, updated_at_min = _e === void 0 ? null : _e, _f = _a.updated_at_max, updated_at_max = _f === void 0 ? null : _f, _g = _a.ids, ids = _g === void 0 ? null : _g, _h = _a.status, status = _h === void 0 ? null : _h, otherArgs = tslib_1.__rest(_a, ["session", "fields", "limit", "since_id", "updated_at_min", "updated_at_max", "ids", "status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_j) {
                switch (_j.label) {
                    case 0: return [4 /*yield*/, DraftOrder.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "fields": fields, "limit": limit, "since_id": since_id, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "ids": ids, "status": status }, otherArgs),
                        })];
                    case 1:
                        response = _j.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    DraftOrder.count = function (_a) {
        var session = _a.session, _b = _a.since_id, since_id = _b === void 0 ? null : _b, _c = _a.status, status = _c === void 0 ? null : _c, _d = _a.updated_at_max, updated_at_max = _d === void 0 ? null : _d, _e = _a.updated_at_min, updated_at_min = _e === void 0 ? null : _e, otherArgs = tslib_1.__rest(_a, ["session", "since_id", "status", "updated_at_max", "updated_at_min"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, DraftOrder.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "since_id": since_id, "status": status, "updated_at_max": updated_at_max, "updated_at_min": updated_at_min }, otherArgs),
                            body: {},
                            entity: null,
                        })];
                    case 1:
                        response = _f.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    DraftOrder.prototype.send_invoice = function (_a) {
        var _b = _a.body, body = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, DraftOrder.request({
                            http_method: "post",
                            operation: "send_invoice",
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
    DraftOrder.prototype.complete = function (_a) {
        var _b = _a.payment_gateway_id, payment_gateway_id = _b === void 0 ? null : _b, _c = _a.payment_pending, payment_pending = _c === void 0 ? null : _c, _d = _a.body, body = _d === void 0 ? null : _d, otherArgs = tslib_1.__rest(_a, ["payment_gateway_id", "payment_pending", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, DraftOrder.request({
                            http_method: "put",
                            operation: "complete",
                            session: this.session,
                            urlIds: { "id": this.id },
                            params: tslib_1.__assign({ "payment_gateway_id": payment_gateway_id, "payment_pending": payment_pending }, otherArgs),
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
    DraftOrder.API_VERSION = base_types_1.ApiVersion.April22;
    DraftOrder.NAME = 'draft_order';
    DraftOrder.PLURAL_NAME = 'draft_orders';
    DraftOrder.HAS_ONE = {
        "customer": customer_1.Customer
    };
    DraftOrder.HAS_MANY = {};
    DraftOrder.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "draft_orders/<id>.json" },
        { "http_method": "get", "operation": "count", "ids": [], "path": "draft_orders/count.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "draft_orders.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "draft_orders/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "draft_orders.json" },
        { "http_method": "post", "operation": "send_invoice", "ids": ["id"], "path": "draft_orders/<id>/send_invoice.json" },
        { "http_method": "put", "operation": "complete", "ids": ["id"], "path": "draft_orders/<id>/complete.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "draft_orders/<id>.json" }
    ];
    return DraftOrder;
}(base_rest_resource_1.default));
exports.DraftOrder = DraftOrder;

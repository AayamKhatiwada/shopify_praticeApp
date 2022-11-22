"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var Fulfillment = /** @class */ (function (_super) {
    tslib_1.__extends(Fulfillment, _super);
    function Fulfillment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fulfillment.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.order_id, order_id = _b === void 0 ? null : _b, _c = _a.fields, fields = _c === void 0 ? null : _c;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, Fulfillment.baseFind({
                            session: session,
                            urlIds: { "id": id, "order_id": order_id },
                            params: { "fields": fields },
                        })];
                    case 1:
                        result = _d.sent();
                        return [2 /*return*/, result ? result[0] : null];
                }
            });
        });
    };
    Fulfillment.all = function (_a) {
        var session = _a.session, _b = _a.fulfillment_order_id, fulfillment_order_id = _b === void 0 ? null : _b, _c = _a.order_id, order_id = _c === void 0 ? null : _c, _d = _a.created_at_max, created_at_max = _d === void 0 ? null : _d, _e = _a.created_at_min, created_at_min = _e === void 0 ? null : _e, _f = _a.fields, fields = _f === void 0 ? null : _f, _g = _a.limit, limit = _g === void 0 ? null : _g, _h = _a.since_id, since_id = _h === void 0 ? null : _h, _j = _a.updated_at_max, updated_at_max = _j === void 0 ? null : _j, _k = _a.updated_at_min, updated_at_min = _k === void 0 ? null : _k, otherArgs = tslib_1.__rest(_a, ["session", "fulfillment_order_id", "order_id", "created_at_max", "created_at_min", "fields", "limit", "since_id", "updated_at_max", "updated_at_min"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_l) {
                switch (_l.label) {
                    case 0: return [4 /*yield*/, Fulfillment.baseFind({
                            session: session,
                            urlIds: { "fulfillment_order_id": fulfillment_order_id, "order_id": order_id },
                            params: tslib_1.__assign({ "created_at_max": created_at_max, "created_at_min": created_at_min, "fields": fields, "limit": limit, "since_id": since_id, "updated_at_max": updated_at_max, "updated_at_min": updated_at_min }, otherArgs),
                        })];
                    case 1:
                        response = _l.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Fulfillment.count = function (_a) {
        var session = _a.session, _b = _a.order_id, order_id = _b === void 0 ? null : _b, _c = _a.created_at_min, created_at_min = _c === void 0 ? null : _c, _d = _a.created_at_max, created_at_max = _d === void 0 ? null : _d, _e = _a.updated_at_min, updated_at_min = _e === void 0 ? null : _e, _f = _a.updated_at_max, updated_at_max = _f === void 0 ? null : _f, otherArgs = tslib_1.__rest(_a, ["session", "order_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_g) {
                switch (_g.label) {
                    case 0: return [4 /*yield*/, Fulfillment.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: { "order_id": order_id },
                            params: tslib_1.__assign({ "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max }, otherArgs),
                            body: {},
                            entity: null,
                        })];
                    case 1:
                        response = _g.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Fulfillment.prototype.update_tracking = function (_a) {
        var _b = _a.body, body = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Fulfillment.request({
                            http_method: "post",
                            operation: "update_tracking",
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
    Fulfillment.API_VERSION = base_types_1.ApiVersion.October21;
    Fulfillment.NAME = 'fulfillment';
    Fulfillment.PLURAL_NAME = 'fulfillments';
    Fulfillment.HAS_ONE = {};
    Fulfillment.HAS_MANY = {};
    Fulfillment.PATHS = [
        { "http_method": "get", "operation": "count", "ids": ["order_id"], "path": "orders/<order_id>/fulfillments/count.json" },
        { "http_method": "get", "operation": "get", "ids": ["fulfillment_order_id"], "path": "fulfillment_orders/<fulfillment_order_id>/fulfillments.json" },
        { "http_method": "get", "operation": "get", "ids": ["order_id"], "path": "orders/<order_id>/fulfillments.json" },
        { "http_method": "get", "operation": "get", "ids": ["order_id", "id"], "path": "orders/<order_id>/fulfillments/<id>.json" },
        { "http_method": "post", "operation": "update_tracking", "ids": ["id"], "path": "fulfillments/<id>/update_tracking.json" }
    ];
    return Fulfillment;
}(base_rest_resource_1.default));
exports.Fulfillment = Fulfillment;

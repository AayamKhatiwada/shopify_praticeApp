"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FulfillmentEvent = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var country_1 = require("./country");
var province_1 = require("./province");
var FulfillmentEvent = /** @class */ (function (_super) {
    tslib_1.__extends(FulfillmentEvent, _super);
    function FulfillmentEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FulfillmentEvent.getJsonBodyName = function () {
        return "event";
    };
    FulfillmentEvent.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.order_id, order_id = _b === void 0 ? null : _b, _c = _a.fulfillment_id, fulfillment_id = _c === void 0 ? null : _c, _d = _a.event_id, event_id = _d === void 0 ? null : _d;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, FulfillmentEvent.baseFind({
                            session: session,
                            urlIds: { "id": id, "order_id": order_id, "fulfillment_id": fulfillment_id },
                            params: { "event_id": event_id },
                        })];
                    case 1:
                        result = _e.sent();
                        return [2 /*return*/, result ? result[0] : null];
                }
            });
        });
    };
    FulfillmentEvent.delete = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.order_id, order_id = _b === void 0 ? null : _b, _c = _a.fulfillment_id, fulfillment_id = _c === void 0 ? null : _c;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, FulfillmentEvent.request({
                            http_method: "delete",
                            operation: "delete",
                            session: session,
                            urlIds: { "id": id, "order_id": order_id, "fulfillment_id": fulfillment_id },
                            params: {},
                        })];
                    case 1:
                        response = _d.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    FulfillmentEvent.all = function (_a) {
        var session = _a.session, _b = _a.order_id, order_id = _b === void 0 ? null : _b, _c = _a.fulfillment_id, fulfillment_id = _c === void 0 ? null : _c, otherArgs = tslib_1.__rest(_a, ["session", "order_id", "fulfillment_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, FulfillmentEvent.baseFind({
                            session: session,
                            urlIds: { "order_id": order_id, "fulfillment_id": fulfillment_id },
                            params: tslib_1.__assign({}, otherArgs),
                        })];
                    case 1:
                        response = _d.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    FulfillmentEvent.API_VERSION = base_types_1.ApiVersion.October21;
    FulfillmentEvent.NAME = 'fulfillment_event';
    FulfillmentEvent.PLURAL_NAME = 'fulfillment_events';
    FulfillmentEvent.HAS_ONE = {
        "country": country_1.Country,
        "province": province_1.Province
    };
    FulfillmentEvent.HAS_MANY = {};
    FulfillmentEvent.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["order_id", "fulfillment_id", "id"], "path": "orders/<order_id>/fulfillments/<fulfillment_id>/events/<id>.json" },
        { "http_method": "get", "operation": "get", "ids": ["order_id", "fulfillment_id"], "path": "orders/<order_id>/fulfillments/<fulfillment_id>/events.json" },
        { "http_method": "get", "operation": "get", "ids": ["order_id", "fulfillment_id", "id"], "path": "orders/<order_id>/fulfillments/<fulfillment_id>/events/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": ["order_id", "fulfillment_id"], "path": "orders/<order_id>/fulfillments/<fulfillment_id>/events.json" }
    ];
    return FulfillmentEvent;
}(base_rest_resource_1.default));
exports.FulfillmentEvent = FulfillmentEvent;

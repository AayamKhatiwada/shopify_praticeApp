"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var Event = /** @class */ (function (_super) {
    tslib_1.__extends(Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Event.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.fields, fields = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Event.baseFind({
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
    Event.all = function (_a) {
        var session = _a.session, _b = _a.order_id, order_id = _b === void 0 ? null : _b, _c = _a.product_id, product_id = _c === void 0 ? null : _c, _d = _a.limit, limit = _d === void 0 ? null : _d, _e = _a.since_id, since_id = _e === void 0 ? null : _e, _f = _a.created_at_min, created_at_min = _f === void 0 ? null : _f, _g = _a.created_at_max, created_at_max = _g === void 0 ? null : _g, _h = _a.filter, filter = _h === void 0 ? null : _h, _j = _a.verb, verb = _j === void 0 ? null : _j, _k = _a.fields, fields = _k === void 0 ? null : _k, otherArgs = tslib_1.__rest(_a, ["session", "order_id", "product_id", "limit", "since_id", "created_at_min", "created_at_max", "filter", "verb", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_l) {
                switch (_l.label) {
                    case 0: return [4 /*yield*/, Event.baseFind({
                            session: session,
                            urlIds: { "order_id": order_id, "product_id": product_id },
                            params: tslib_1.__assign({ "limit": limit, "since_id": since_id, "created_at_min": created_at_min, "created_at_max": created_at_max, "filter": filter, "verb": verb, "fields": fields }, otherArgs),
                        })];
                    case 1:
                        response = _l.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Event.count = function (_a) {
        var session = _a.session, _b = _a.created_at_min, created_at_min = _b === void 0 ? null : _b, _c = _a.created_at_max, created_at_max = _c === void 0 ? null : _c, otherArgs = tslib_1.__rest(_a, ["session", "created_at_min", "created_at_max"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, Event.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "created_at_min": created_at_min, "created_at_max": created_at_max }, otherArgs),
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
    Event.API_VERSION = base_types_1.ApiVersion.April22;
    Event.NAME = 'event';
    Event.PLURAL_NAME = 'events';
    Event.HAS_ONE = {};
    Event.HAS_MANY = {};
    Event.PATHS = [
        { "http_method": "get", "operation": "count", "ids": [], "path": "events/count.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "events.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "events/<id>.json" },
        { "http_method": "get", "operation": "get", "ids": ["order_id"], "path": "orders/<order_id>/events.json" },
        { "http_method": "get", "operation": "get", "ids": ["product_id"], "path": "products/<product_id>/events.json" }
    ];
    return Event;
}(base_rest_resource_1.default));
exports.Event = Event;

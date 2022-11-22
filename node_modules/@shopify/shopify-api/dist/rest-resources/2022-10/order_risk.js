"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRisk = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var OrderRisk = /** @class */ (function (_super) {
    tslib_1.__extends(OrderRisk, _super);
    function OrderRisk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrderRisk.getJsonBodyName = function () {
        return "risk";
    };
    OrderRisk.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.order_id, order_id = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, OrderRisk.baseFind({
                            session: session,
                            urlIds: { "id": id, "order_id": order_id },
                            params: {},
                        })];
                    case 1:
                        result = _c.sent();
                        return [2 /*return*/, result ? result[0] : null];
                }
            });
        });
    };
    OrderRisk.delete = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.order_id, order_id = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, OrderRisk.request({
                            http_method: "delete",
                            operation: "delete",
                            session: session,
                            urlIds: { "id": id, "order_id": order_id },
                            params: {},
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    OrderRisk.all = function (_a) {
        var session = _a.session, _b = _a.order_id, order_id = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "order_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, OrderRisk.baseFind({
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
    OrderRisk.API_VERSION = base_types_1.ApiVersion.October22;
    OrderRisk.NAME = 'order_risk';
    OrderRisk.PLURAL_NAME = 'order_risks';
    OrderRisk.HAS_ONE = {};
    OrderRisk.HAS_MANY = {};
    OrderRisk.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["order_id", "id"], "path": "orders/<order_id>/risks/<id>.json" },
        { "http_method": "get", "operation": "get", "ids": ["order_id"], "path": "orders/<order_id>/risks.json" },
        { "http_method": "get", "operation": "get", "ids": ["order_id", "id"], "path": "orders/<order_id>/risks/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": ["order_id"], "path": "orders/<order_id>/risks.json" },
        { "http_method": "put", "operation": "put", "ids": ["order_id", "id"], "path": "orders/<order_id>/risks/<id>.json" }
    ];
    return OrderRisk;
}(base_rest_resource_1.default));
exports.OrderRisk = OrderRisk;

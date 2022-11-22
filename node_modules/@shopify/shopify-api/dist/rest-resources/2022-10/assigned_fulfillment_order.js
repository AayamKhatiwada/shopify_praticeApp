"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignedFulfillmentOrder = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var AssignedFulfillmentOrder = /** @class */ (function (_super) {
    tslib_1.__extends(AssignedFulfillmentOrder, _super);
    function AssignedFulfillmentOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssignedFulfillmentOrder.all = function (_a) {
        var session = _a.session, _b = _a.assignment_status, assignment_status = _b === void 0 ? null : _b, _c = _a.location_ids, location_ids = _c === void 0 ? null : _c, otherArgs = tslib_1.__rest(_a, ["session", "assignment_status", "location_ids"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, AssignedFulfillmentOrder.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "assignment_status": assignment_status, "location_ids": location_ids }, otherArgs),
                        })];
                    case 1:
                        response = _d.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    AssignedFulfillmentOrder.API_VERSION = base_types_1.ApiVersion.October22;
    AssignedFulfillmentOrder.NAME = 'assigned_fulfillment_order';
    AssignedFulfillmentOrder.PLURAL_NAME = 'assigned_fulfillment_orders';
    AssignedFulfillmentOrder.HAS_ONE = {};
    AssignedFulfillmentOrder.HAS_MANY = {};
    AssignedFulfillmentOrder.PATHS = [
        { "http_method": "get", "operation": "get", "ids": [], "path": "assigned_fulfillment_orders.json" }
    ];
    return AssignedFulfillmentOrder;
}(base_rest_resource_1.default));
exports.AssignedFulfillmentOrder = AssignedFulfillmentOrder;

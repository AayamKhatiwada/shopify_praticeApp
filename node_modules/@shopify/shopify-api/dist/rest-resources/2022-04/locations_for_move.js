"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationsForMove = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var LocationsForMove = /** @class */ (function (_super) {
    tslib_1.__extends(LocationsForMove, _super);
    function LocationsForMove() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocationsForMove.all = function (_a) {
        var session = _a.session, _b = _a.fulfillment_order_id, fulfillment_order_id = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "fulfillment_order_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, LocationsForMove.baseFind({
                            session: session,
                            urlIds: { "fulfillment_order_id": fulfillment_order_id },
                            params: tslib_1.__assign({}, otherArgs),
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    LocationsForMove.API_VERSION = base_types_1.ApiVersion.April22;
    LocationsForMove.NAME = 'locations_for_move';
    LocationsForMove.PLURAL_NAME = 'locations_for_moves';
    LocationsForMove.HAS_ONE = {};
    LocationsForMove.HAS_MANY = {};
    LocationsForMove.PATHS = [
        { "http_method": "get", "operation": "get", "ids": ["fulfillment_order_id"], "path": "fulfillment_orders/<fulfillment_order_id>/locations_for_move.json" }
    ];
    return LocationsForMove;
}(base_rest_resource_1.default));
exports.LocationsForMove = LocationsForMove;

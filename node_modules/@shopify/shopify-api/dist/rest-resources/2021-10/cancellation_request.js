"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancellationRequest = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var CancellationRequest = /** @class */ (function (_super) {
    tslib_1.__extends(CancellationRequest, _super);
    function CancellationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CancellationRequest.prototype.accept = function (_a) {
        var _b = _a.message, message = _b === void 0 ? null : _b, _c = _a.body, body = _c === void 0 ? null : _c, otherArgs = tslib_1.__rest(_a, ["message", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, CancellationRequest.request({
                            http_method: "post",
                            operation: "accept",
                            session: this.session,
                            urlIds: { "fulfillment_order_id": this.fulfillment_order_id },
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
    CancellationRequest.prototype.reject = function (_a) {
        var _b = _a.message, message = _b === void 0 ? null : _b, _c = _a.body, body = _c === void 0 ? null : _c, otherArgs = tslib_1.__rest(_a, ["message", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, CancellationRequest.request({
                            http_method: "post",
                            operation: "reject",
                            session: this.session,
                            urlIds: { "fulfillment_order_id": this.fulfillment_order_id },
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
    CancellationRequest.API_VERSION = base_types_1.ApiVersion.October21;
    CancellationRequest.NAME = 'cancellation_request';
    CancellationRequest.PLURAL_NAME = 'cancellation_requests';
    CancellationRequest.HAS_ONE = {};
    CancellationRequest.HAS_MANY = {};
    CancellationRequest.PATHS = [
        { "http_method": "post", "operation": "accept", "ids": ["fulfillment_order_id"], "path": "fulfillment_orders/<fulfillment_order_id>/cancellation_request/accept.json" },
        { "http_method": "post", "operation": "post", "ids": ["fulfillment_order_id"], "path": "fulfillment_orders/<fulfillment_order_id>/cancellation_request.json" },
        { "http_method": "post", "operation": "reject", "ids": ["fulfillment_order_id"], "path": "fulfillment_orders/<fulfillment_order_id>/cancellation_request/reject.json" }
    ];
    return CancellationRequest;
}(base_rest_resource_1.default));
exports.CancellationRequest = CancellationRequest;

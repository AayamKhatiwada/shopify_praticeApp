"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbandonedCheckout = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var currency_1 = require("./currency");
var customer_1 = require("./customer");
var discount_code_1 = require("./discount_code");
var AbandonedCheckout = /** @class */ (function (_super) {
    tslib_1.__extends(AbandonedCheckout, _super);
    function AbandonedCheckout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbandonedCheckout.checkouts = function (_a) {
        var session = _a.session, _b = _a.limit, limit = _b === void 0 ? null : _b, _c = _a.since_id, since_id = _c === void 0 ? null : _c, _d = _a.created_at_min, created_at_min = _d === void 0 ? null : _d, _e = _a.created_at_max, created_at_max = _e === void 0 ? null : _e, _f = _a.updated_at_min, updated_at_min = _f === void 0 ? null : _f, _g = _a.updated_at_max, updated_at_max = _g === void 0 ? null : _g, _h = _a.status, status = _h === void 0 ? null : _h, otherArgs = tslib_1.__rest(_a, ["session", "limit", "since_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_j) {
                switch (_j.label) {
                    case 0: return [4 /*yield*/, AbandonedCheckout.request({
                            http_method: "get",
                            operation: "checkouts",
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "limit": limit, "since_id": since_id, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "status": status }, otherArgs),
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
    AbandonedCheckout.API_VERSION = base_types_1.ApiVersion.October21;
    AbandonedCheckout.NAME = 'abandoned_checkout';
    AbandonedCheckout.PLURAL_NAME = 'abandoned_checkouts';
    AbandonedCheckout.HAS_ONE = {
        "currency": currency_1.Currency,
        "customer": customer_1.Customer
    };
    AbandonedCheckout.HAS_MANY = {
        "discount_codes": discount_code_1.DiscountCode
    };
    AbandonedCheckout.PATHS = [
        { "http_method": "get", "operation": "checkouts", "ids": [], "path": "checkouts.json" }
    ];
    return AbandonedCheckout;
}(base_rest_resource_1.default));
exports.AbandonedCheckout = AbandonedCheckout;

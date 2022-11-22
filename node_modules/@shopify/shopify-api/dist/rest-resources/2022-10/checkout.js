"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkout = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var discount_code_1 = require("./discount_code");
var order_1 = require("./order");
var gift_card_1 = require("./gift_card");
var Checkout = /** @class */ (function (_super) {
    tslib_1.__extends(Checkout, _super);
    function Checkout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Checkout.find = function (_a) {
        var session = _a.session, token = _a.token;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Checkout.baseFind({
                            session: session,
                            urlIds: { "token": token },
                            params: {},
                        })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, result ? result[0] : null];
                }
            });
        });
    };
    Checkout.shipping_rates = function (_a) {
        var session = _a.session, token = _a.token, otherArgs = tslib_1.__rest(_a, ["session", "token"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Checkout.request({
                            http_method: "get",
                            operation: "shipping_rates",
                            session: session,
                            urlIds: { "token": token },
                            params: tslib_1.__assign({}, otherArgs),
                            body: {},
                            entity: null,
                        })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Checkout.prototype.complete = function (_a) {
        var _b = _a.body, body = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Checkout.request({
                            http_method: "post",
                            operation: "complete",
                            session: this.session,
                            urlIds: { "token": this.token },
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
    Checkout.API_VERSION = base_types_1.ApiVersion.October22;
    Checkout.NAME = 'checkout';
    Checkout.PLURAL_NAME = 'checkouts';
    Checkout.HAS_ONE = {
        "discount_code": discount_code_1.DiscountCode,
        "order": order_1.Order
    };
    Checkout.HAS_MANY = {
        "gift_cards": gift_card_1.GiftCard
    };
    Checkout.PATHS = [
        { "http_method": "get", "operation": "get", "ids": ["token"], "path": "checkouts/<token>.json" },
        { "http_method": "get", "operation": "shipping_rates", "ids": ["token"], "path": "checkouts/<token>/shipping_rates.json" },
        { "http_method": "post", "operation": "complete", "ids": ["token"], "path": "checkouts/<token>/complete.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "checkouts.json" },
        { "http_method": "put", "operation": "put", "ids": ["token"], "path": "checkouts/<token>.json" }
    ];
    Checkout.PRIMARY_KEY = "token";
    return Checkout;
}(base_rest_resource_1.default));
exports.Checkout = Checkout;

"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var transaction_1 = require("./transaction");
var checkout_1 = require("./checkout");
var Payment = /** @class */ (function (_super) {
    tslib_1.__extends(Payment, _super);
    function Payment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Payment.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.checkout_id, checkout_id = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Payment.baseFind({
                            session: session,
                            urlIds: { "id": id, "checkout_id": checkout_id },
                            params: {},
                        })];
                    case 1:
                        result = _c.sent();
                        return [2 /*return*/, result ? result[0] : null];
                }
            });
        });
    };
    Payment.all = function (_a) {
        var session = _a.session, _b = _a.checkout_id, checkout_id = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "checkout_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Payment.baseFind({
                            session: session,
                            urlIds: { "checkout_id": checkout_id },
                            params: tslib_1.__assign({}, otherArgs),
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Payment.count = function (_a) {
        var session = _a.session, _b = _a.checkout_id, checkout_id = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "checkout_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Payment.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: { "checkout_id": checkout_id },
                            params: tslib_1.__assign({}, otherArgs),
                            body: {},
                            entity: null,
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Payment.API_VERSION = base_types_1.ApiVersion.January22;
    Payment.NAME = 'payment';
    Payment.PLURAL_NAME = 'payments';
    Payment.HAS_ONE = {
        "transaction": transaction_1.Transaction,
        "checkout": checkout_1.Checkout
    };
    Payment.HAS_MANY = {};
    Payment.PATHS = [
        { "http_method": "get", "operation": "count", "ids": ["checkout_id"], "path": "checkouts/<checkout_id>/payments/count.json" },
        { "http_method": "get", "operation": "get", "ids": ["checkout_id"], "path": "checkouts/<checkout_id>/payments.json" },
        { "http_method": "get", "operation": "get", "ids": ["checkout_id", "id"], "path": "checkouts/<checkout_id>/payments/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": ["checkout_id"], "path": "checkouts/<checkout_id>/payments.json" }
    ];
    return Payment;
}(base_rest_resource_1.default));
exports.Payment = Payment;

"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTransaction = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var currency_1 = require("./currency");
var PaymentTransaction = /** @class */ (function (_super) {
    tslib_1.__extends(PaymentTransaction, _super);
    function PaymentTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaymentTransaction.transactions = function (_a) {
        var session = _a.session, _b = _a.since_id, since_id = _b === void 0 ? null : _b, _c = _a.last_id, last_id = _c === void 0 ? null : _c, _d = _a.test, test = _d === void 0 ? null : _d, _e = _a.payout_id, payout_id = _e === void 0 ? null : _e, _f = _a.payout_status, payout_status = _f === void 0 ? null : _f, otherArgs = tslib_1.__rest(_a, ["session", "since_id", "last_id", "test", "payout_id", "payout_status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_g) {
                switch (_g.label) {
                    case 0: return [4 /*yield*/, PaymentTransaction.request({
                            http_method: "get",
                            operation: "transactions",
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "since_id": since_id, "last_id": last_id, "test": test, "payout_id": payout_id, "payout_status": payout_status }, otherArgs),
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
    PaymentTransaction.API_VERSION = base_types_1.ApiVersion.October22;
    PaymentTransaction.NAME = 'payment_transaction';
    PaymentTransaction.PLURAL_NAME = 'payment_transactions';
    PaymentTransaction.HAS_ONE = {
        "currency": currency_1.Currency
    };
    PaymentTransaction.HAS_MANY = {};
    PaymentTransaction.PATHS = [
        { "http_method": "get", "operation": "transactions", "ids": [], "path": "shopify_payments/balance/transactions.json" }
    ];
    return PaymentTransaction;
}(base_rest_resource_1.default));
exports.PaymentTransaction = PaymentTransaction;

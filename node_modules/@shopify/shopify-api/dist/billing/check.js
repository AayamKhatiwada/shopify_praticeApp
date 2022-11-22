"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = void 0;
var tslib_1 = require("tslib");
var context_1 = require("../context");
var has_active_payment_1 = require("./has_active_payment");
var request_payment_1 = require("./request_payment");
function check(_a) {
    var session = _a.session, _b = _a.isTest, isTest = _b === void 0 ? true : _b;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var hasPayment, confirmBillingUrl;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!context_1.Context.BILLING) {
                        return [2 /*return*/, { hasPayment: true, confirmBillingUrl: undefined }];
                    }
                    return [4 /*yield*/, (0, has_active_payment_1.hasActivePayment)(session, isTest)];
                case 1:
                    if (!_c.sent()) return [3 /*break*/, 2];
                    hasPayment = true;
                    return [3 /*break*/, 4];
                case 2:
                    hasPayment = false;
                    return [4 /*yield*/, (0, request_payment_1.requestPayment)(session, isTest)];
                case 3:
                    confirmBillingUrl = _c.sent();
                    _c.label = 4;
                case 4: return [2 /*return*/, { hasPayment: hasPayment, confirmBillingUrl: confirmBillingUrl }];
            }
        });
    });
}
exports.check = check;

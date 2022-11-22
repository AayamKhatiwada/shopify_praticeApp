"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestPayment = void 0;
var tslib_1 = require("tslib");
var graphql_1 = require("../clients/graphql");
var context_1 = require("../context");
var error_1 = require("../error");
var get_embedded_app_url_1 = require("../utils/get-embedded-app-url");
var is_recurring_1 = require("./is_recurring");
function requestPayment(session, isTest) {
    var _a;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var returnUrl, data, mutationResponse, mutationResponse;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    returnUrl = (0, get_embedded_app_url_1.buildEmbeddedAppUrl)(Buffer.from("".concat(session.shop, "/admin")).toString('base64'));
                    if (!(0, is_recurring_1.isRecurring)()) return [3 /*break*/, 2];
                    return [4 /*yield*/, requestRecurringPayment(session, returnUrl, isTest)];
                case 1:
                    mutationResponse = _b.sent();
                    data = mutationResponse.data.appSubscriptionCreate;
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, requestSinglePayment(session, returnUrl, isTest)];
                case 3:
                    mutationResponse = _b.sent();
                    data = mutationResponse.data.appPurchaseOneTimeCreate;
                    _b.label = 4;
                case 4:
                    if ((_a = data.userErrors) === null || _a === void 0 ? void 0 : _a.length) {
                        throw new error_1.BillingError({
                            message: 'Error while billing the store',
                            errorData: data.userErrors,
                        });
                    }
                    return [2 /*return*/, data.confirmationUrl];
            }
        });
    });
}
exports.requestPayment = requestPayment;
function requestRecurringPayment(session, returnUrl, isTest) {
    var _a;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var client, mutationResponse;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!context_1.Context.BILLING) {
                        throw new error_1.BillingError({
                            message: 'Attempted to request recurring payment without billing configs',
                            errorData: [],
                        });
                    }
                    client = new graphql_1.GraphqlClient(session.shop, session.accessToken);
                    return [4 /*yield*/, client.query({
                            data: {
                                query: RECURRING_PURCHASE_MUTATION,
                                variables: {
                                    name: context_1.Context.BILLING.chargeName,
                                    lineItems: [
                                        {
                                            plan: {
                                                appRecurringPricingDetails: {
                                                    interval: context_1.Context.BILLING.interval,
                                                    price: {
                                                        amount: context_1.Context.BILLING.amount,
                                                        currencyCode: context_1.Context.BILLING.currencyCode,
                                                    },
                                                },
                                            },
                                        },
                                    ],
                                    returnUrl: returnUrl,
                                    test: isTest,
                                },
                            },
                        })];
                case 1:
                    mutationResponse = _b.sent();
                    if ((_a = mutationResponse.body.errors) === null || _a === void 0 ? void 0 : _a.length) {
                        throw new error_1.BillingError({
                            message: 'Error while billing the store',
                            errorData: mutationResponse.body.errors,
                        });
                    }
                    return [2 /*return*/, mutationResponse.body];
            }
        });
    });
}
function requestSinglePayment(session, returnUrl, isTest) {
    var _a;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var client, mutationResponse;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!context_1.Context.BILLING) {
                        throw new error_1.BillingError({
                            message: 'Attempted to request single payment without billing configs',
                            errorData: [],
                        });
                    }
                    client = new graphql_1.GraphqlClient(session.shop, session.accessToken);
                    return [4 /*yield*/, client.query({
                            data: {
                                query: ONE_TIME_PURCHASE_MUTATION,
                                variables: {
                                    name: context_1.Context.BILLING.chargeName,
                                    price: {
                                        amount: context_1.Context.BILLING.amount,
                                        currencyCode: context_1.Context.BILLING.currencyCode,
                                    },
                                    returnUrl: returnUrl,
                                    test: isTest,
                                },
                            },
                        })];
                case 1:
                    mutationResponse = _b.sent();
                    if ((_a = mutationResponse.body.errors) === null || _a === void 0 ? void 0 : _a.length) {
                        throw new error_1.BillingError({
                            message: 'Error while billing the store',
                            errorData: mutationResponse.body.errors,
                        });
                    }
                    return [2 /*return*/, mutationResponse.body];
            }
        });
    });
}
var RECURRING_PURCHASE_MUTATION = "\n  mutation test(\n    $name: String!\n    $lineItems: [AppSubscriptionLineItemInput!]!\n    $returnUrl: URL!\n    $test: Boolean\n  ) {\n    appSubscriptionCreate(\n      name: $name\n      lineItems: $lineItems\n      returnUrl: $returnUrl\n      test: $test\n    ) {\n      confirmationUrl\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n";
var ONE_TIME_PURCHASE_MUTATION = "\n  mutation test(\n    $name: String!\n    $price: MoneyInput!\n    $returnUrl: URL!\n    $test: Boolean\n  ) {\n    appPurchaseOneTimeCreate(\n      name: $name\n      price: $price\n      returnUrl: $returnUrl\n      test: $test\n    ) {\n      confirmationUrl\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n";

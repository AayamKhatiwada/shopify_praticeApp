"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasActivePayment = void 0;
var tslib_1 = require("tslib");
var context_1 = require("../context");
var error_1 = require("../error");
var graphql_1 = require("../clients/graphql");
var is_recurring_1 = require("./is_recurring");
function hasActivePayment(session, isTest) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            if ((0, is_recurring_1.isRecurring)()) {
                return [2 /*return*/, hasActiveSubscription(session, isTest)];
            }
            else {
                return [2 /*return*/, hasActiveOneTimePurchase(session, isTest)];
            }
            return [2 /*return*/];
        });
    });
}
exports.hasActivePayment = hasActivePayment;
function hasActiveSubscription(session, isTest) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var client, currentInstallations;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!context_1.Context.BILLING) {
                        throw new error_1.BillingError({
                            message: 'Attempted to look for subscriptions without billing configs',
                            errorData: [],
                        });
                    }
                    client = new graphql_1.GraphqlClient(session.shop, session.accessToken);
                    return [4 /*yield*/, client.query({
                            data: RECURRING_PURCHASES_QUERY,
                        })];
                case 1:
                    currentInstallations = _a.sent();
                    return [2 /*return*/, currentInstallations.body.data.currentAppInstallation.activeSubscriptions.some(function (subscription) {
                            return subscription.name === context_1.Context.BILLING.chargeName &&
                                (isTest || !subscription.test);
                        })];
            }
        });
    });
}
function hasActiveOneTimePurchase(session, isTest) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var client, installation, endCursor, currentInstallations;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!context_1.Context.BILLING) {
                        throw new error_1.BillingError({
                            message: 'Attempted to look for one time purchases without billing configs',
                            errorData: [],
                        });
                    }
                    client = new graphql_1.GraphqlClient(session.shop, session.accessToken);
                    endCursor = null;
                    _a.label = 1;
                case 1: return [4 /*yield*/, client.query({
                        data: {
                            query: ONE_TIME_PURCHASES_QUERY,
                            variables: { endCursor: endCursor },
                        },
                    })];
                case 2:
                    currentInstallations = _a.sent();
                    installation = currentInstallations.body.data.currentAppInstallation;
                    if (installation.oneTimePurchases.edges.some(function (purchase) {
                        return purchase.node.name === context_1.Context.BILLING.chargeName &&
                            (isTest || !purchase.node.test) &&
                            purchase.node.status === 'ACTIVE';
                    })) {
                        return [2 /*return*/, true];
                    }
                    endCursor = installation.oneTimePurchases.pageInfo.endCursor;
                    _a.label = 3;
                case 3:
                    if (installation === null || installation === void 0 ? void 0 : installation.oneTimePurchases.pageInfo.hasNextPage) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/, false];
            }
        });
    });
}
var RECURRING_PURCHASES_QUERY = "\n  query appSubscription {\n    currentAppInstallation {\n      activeSubscriptions {\n        name\n        test\n      }\n    }\n  }\n";
var ONE_TIME_PURCHASES_QUERY = "\n  query appPurchases($endCursor: String) {\n    currentAppInstallation {\n      oneTimePurchases(first: 250, sortKey: CREATED_AT, after: $endCursor) {\n        edges {\n          node {\n            name\n            test\n            status\n          }\n        }\n        pageInfo {\n          hasNextPage\n          endCursor\n        }\n      }\n    }\n  }\n";

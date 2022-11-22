"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRecurring = void 0;
var context_1 = require("../context");
var error_1 = require("../error");
var types_1 = require("./types");
var RECURRING_INTERVALS = [
    types_1.BillingInterval.Every30Days,
    types_1.BillingInterval.Annual,
];
function isRecurring() {
    if (!context_1.Context.BILLING) {
        throw new error_1.BillingError({
            message: 'Attempted to request billing without billing configs',
            errorData: [],
        });
    }
    return RECURRING_INTERVALS.includes(context_1.Context.BILLING.interval);
}
exports.isRecurring = isRecurring;

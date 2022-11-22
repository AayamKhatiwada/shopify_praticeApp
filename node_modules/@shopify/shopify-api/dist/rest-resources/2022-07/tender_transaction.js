"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenderTransaction = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var TenderTransaction = /** @class */ (function (_super) {
    tslib_1.__extends(TenderTransaction, _super);
    function TenderTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TenderTransaction.all = function (_a) {
        var session = _a.session, _b = _a.limit, limit = _b === void 0 ? null : _b, _c = _a.since_id, since_id = _c === void 0 ? null : _c, _d = _a.processed_at_min, processed_at_min = _d === void 0 ? null : _d, _e = _a.processed_at_max, processed_at_max = _e === void 0 ? null : _e, _f = _a.processed_at, processed_at = _f === void 0 ? null : _f, _g = _a.order, order = _g === void 0 ? null : _g, otherArgs = tslib_1.__rest(_a, ["session", "limit", "since_id", "processed_at_min", "processed_at_max", "processed_at", "order"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_h) {
                switch (_h.label) {
                    case 0: return [4 /*yield*/, TenderTransaction.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "limit": limit, "since_id": since_id, "processed_at_min": processed_at_min, "processed_at_max": processed_at_max, "processed_at": processed_at, "order": order }, otherArgs),
                        })];
                    case 1:
                        response = _h.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    TenderTransaction.API_VERSION = base_types_1.ApiVersion.July22;
    TenderTransaction.NAME = 'tender_transaction';
    TenderTransaction.PLURAL_NAME = 'tender_transactions';
    TenderTransaction.HAS_ONE = {};
    TenderTransaction.HAS_MANY = {};
    TenderTransaction.PATHS = [
        { "http_method": "get", "operation": "get", "ids": [], "path": "tender_transactions.json" }
    ];
    return TenderTransaction;
}(base_rest_resource_1.default));
exports.TenderTransaction = TenderTransaction;

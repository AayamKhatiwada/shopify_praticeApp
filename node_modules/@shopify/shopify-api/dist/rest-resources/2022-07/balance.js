"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Balance = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var Balance = /** @class */ (function (_super) {
    tslib_1.__extends(Balance, _super);
    function Balance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Balance.all = function (_a) {
        var session = _a.session, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Balance.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({}, otherArgs),
                        })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Balance.API_VERSION = base_types_1.ApiVersion.July22;
    Balance.NAME = 'balance';
    Balance.PLURAL_NAME = 'balances';
    Balance.HAS_ONE = {};
    Balance.HAS_MANY = {};
    Balance.PATHS = [
        { "http_method": "get", "operation": "get", "ids": [], "path": "shopify_payments/balance.json" }
    ];
    return Balance;
}(base_rest_resource_1.default));
exports.Balance = Balance;

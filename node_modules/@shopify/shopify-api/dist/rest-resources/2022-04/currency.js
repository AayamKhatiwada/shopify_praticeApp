"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var Currency = /** @class */ (function (_super) {
    tslib_1.__extends(Currency, _super);
    function Currency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Currency.all = function (_a) {
        var session = _a.session, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Currency.baseFind({
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
    Currency.API_VERSION = base_types_1.ApiVersion.April22;
    Currency.NAME = 'currency';
    Currency.PLURAL_NAME = 'currencies';
    Currency.HAS_ONE = {};
    Currency.HAS_MANY = {};
    Currency.PATHS = [
        { "http_method": "get", "operation": "get", "ids": [], "path": "currencies.json" }
    ];
    return Currency;
}(base_rest_resource_1.default));
exports.Currency = Currency;

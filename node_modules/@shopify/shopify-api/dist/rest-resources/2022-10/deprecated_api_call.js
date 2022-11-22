"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeprecatedApiCall = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var DeprecatedApiCall = /** @class */ (function (_super) {
    tslib_1.__extends(DeprecatedApiCall, _super);
    function DeprecatedApiCall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeprecatedApiCall.all = function (_a) {
        var session = _a.session, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, DeprecatedApiCall.baseFind({
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
    DeprecatedApiCall.API_VERSION = base_types_1.ApiVersion.October22;
    DeprecatedApiCall.NAME = 'deprecated_api_call';
    DeprecatedApiCall.PLURAL_NAME = 'deprecated_api_calls';
    DeprecatedApiCall.HAS_ONE = {};
    DeprecatedApiCall.HAS_MANY = {};
    DeprecatedApiCall.PATHS = [
        { "http_method": "get", "operation": "get", "ids": [], "path": "deprecated_api_calls.json" }
    ];
    return DeprecatedApiCall;
}(base_rest_resource_1.default));
exports.DeprecatedApiCall = DeprecatedApiCall;

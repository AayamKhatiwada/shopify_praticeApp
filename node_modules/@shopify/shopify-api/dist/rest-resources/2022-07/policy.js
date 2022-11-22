"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Policy = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var Policy = /** @class */ (function (_super) {
    tslib_1.__extends(Policy, _super);
    function Policy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Policy.all = function (_a) {
        var session = _a.session, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Policy.baseFind({
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
    Policy.API_VERSION = base_types_1.ApiVersion.July22;
    Policy.NAME = 'policy';
    Policy.PLURAL_NAME = 'policies';
    Policy.HAS_ONE = {};
    Policy.HAS_MANY = {};
    Policy.PATHS = [
        { "http_method": "get", "operation": "get", "ids": [], "path": "policies.json" }
    ];
    return Policy;
}(base_rest_resource_1.default));
exports.Policy = Policy;

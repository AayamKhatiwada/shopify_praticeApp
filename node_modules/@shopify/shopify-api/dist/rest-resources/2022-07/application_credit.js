"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationCredit = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var ApplicationCredit = /** @class */ (function (_super) {
    tslib_1.__extends(ApplicationCredit, _super);
    function ApplicationCredit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplicationCredit.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.fields, fields = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, ApplicationCredit.baseFind({
                            session: session,
                            urlIds: { "id": id },
                            params: { "fields": fields },
                        })];
                    case 1:
                        result = _c.sent();
                        return [2 /*return*/, result ? result[0] : null];
                }
            });
        });
    };
    ApplicationCredit.all = function (_a) {
        var session = _a.session, _b = _a.fields, fields = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, ApplicationCredit.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "fields": fields }, otherArgs),
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    ApplicationCredit.API_VERSION = base_types_1.ApiVersion.July22;
    ApplicationCredit.NAME = 'application_credit';
    ApplicationCredit.PLURAL_NAME = 'application_credits';
    ApplicationCredit.HAS_ONE = {};
    ApplicationCredit.HAS_MANY = {};
    ApplicationCredit.PATHS = [
        { "http_method": "get", "operation": "get", "ids": [], "path": "application_credits.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "application_credits/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "application_credits.json" }
    ];
    return ApplicationCredit;
}(base_rest_resource_1.default));
exports.ApplicationCredit = ApplicationCredit;

"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationCharge = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var ApplicationCharge = /** @class */ (function (_super) {
    tslib_1.__extends(ApplicationCharge, _super);
    function ApplicationCharge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplicationCharge.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.fields, fields = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, ApplicationCharge.baseFind({
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
    ApplicationCharge.all = function (_a) {
        var session = _a.session, _b = _a.since_id, since_id = _b === void 0 ? null : _b, _c = _a.fields, fields = _c === void 0 ? null : _c, otherArgs = tslib_1.__rest(_a, ["session", "since_id", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, ApplicationCharge.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "since_id": since_id, "fields": fields }, otherArgs),
                        })];
                    case 1:
                        response = _d.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    ApplicationCharge.API_VERSION = base_types_1.ApiVersion.January22;
    ApplicationCharge.NAME = 'application_charge';
    ApplicationCharge.PLURAL_NAME = 'application_charges';
    ApplicationCharge.HAS_ONE = {};
    ApplicationCharge.HAS_MANY = {};
    ApplicationCharge.PATHS = [
        { "http_method": "get", "operation": "get", "ids": [], "path": "application_charges.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "application_charges/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "application_charges.json" }
    ];
    return ApplicationCharge;
}(base_rest_resource_1.default));
exports.ApplicationCharge = ApplicationCharge;

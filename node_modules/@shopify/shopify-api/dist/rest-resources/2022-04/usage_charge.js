"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageCharge = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var UsageCharge = /** @class */ (function (_super) {
    tslib_1.__extends(UsageCharge, _super);
    function UsageCharge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UsageCharge.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.recurring_application_charge_id, recurring_application_charge_id = _b === void 0 ? null : _b, _c = _a.fields, fields = _c === void 0 ? null : _c;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, UsageCharge.baseFind({
                            session: session,
                            urlIds: { "id": id, "recurring_application_charge_id": recurring_application_charge_id },
                            params: { "fields": fields },
                        })];
                    case 1:
                        result = _d.sent();
                        return [2 /*return*/, result ? result[0] : null];
                }
            });
        });
    };
    UsageCharge.all = function (_a) {
        var session = _a.session, _b = _a.recurring_application_charge_id, recurring_application_charge_id = _b === void 0 ? null : _b, _c = _a.fields, fields = _c === void 0 ? null : _c, otherArgs = tslib_1.__rest(_a, ["session", "recurring_application_charge_id", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, UsageCharge.baseFind({
                            session: session,
                            urlIds: { "recurring_application_charge_id": recurring_application_charge_id },
                            params: tslib_1.__assign({ "fields": fields }, otherArgs),
                        })];
                    case 1:
                        response = _d.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    UsageCharge.API_VERSION = base_types_1.ApiVersion.April22;
    UsageCharge.NAME = 'usage_charge';
    UsageCharge.PLURAL_NAME = 'usage_charges';
    UsageCharge.HAS_ONE = {};
    UsageCharge.HAS_MANY = {};
    UsageCharge.PATHS = [
        { "http_method": "get", "operation": "get", "ids": ["recurring_application_charge_id"], "path": "recurring_application_charges/<recurring_application_charge_id>/usage_charges.json" },
        { "http_method": "get", "operation": "get", "ids": ["recurring_application_charge_id", "id"], "path": "recurring_application_charges/<recurring_application_charge_id>/usage_charges/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": ["recurring_application_charge_id"], "path": "recurring_application_charges/<recurring_application_charge_id>/usage_charges.json" }
    ];
    return UsageCharge;
}(base_rest_resource_1.default));
exports.UsageCharge = UsageCharge;

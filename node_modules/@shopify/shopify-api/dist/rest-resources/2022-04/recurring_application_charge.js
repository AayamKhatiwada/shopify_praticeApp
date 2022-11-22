"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecurringApplicationCharge = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var RecurringApplicationCharge = /** @class */ (function (_super) {
    tslib_1.__extends(RecurringApplicationCharge, _super);
    function RecurringApplicationCharge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecurringApplicationCharge.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.fields, fields = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, RecurringApplicationCharge.baseFind({
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
    RecurringApplicationCharge.delete = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, RecurringApplicationCharge.request({
                            http_method: "delete",
                            operation: "delete",
                            session: session,
                            urlIds: { "id": id },
                            params: {},
                        })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    RecurringApplicationCharge.all = function (_a) {
        var session = _a.session, _b = _a.since_id, since_id = _b === void 0 ? null : _b, _c = _a.fields, fields = _c === void 0 ? null : _c, otherArgs = tslib_1.__rest(_a, ["session", "since_id", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, RecurringApplicationCharge.baseFind({
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
    RecurringApplicationCharge.prototype.customize = function (_a) {
        var _b = _a.body, body = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, RecurringApplicationCharge.request({
                            http_method: "put",
                            operation: "customize",
                            session: this.session,
                            urlIds: { "id": this.id },
                            params: tslib_1.__assign({}, otherArgs),
                            body: body,
                            entity: this,
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    RecurringApplicationCharge.API_VERSION = base_types_1.ApiVersion.April22;
    RecurringApplicationCharge.NAME = 'recurring_application_charge';
    RecurringApplicationCharge.PLURAL_NAME = 'recurring_application_charges';
    RecurringApplicationCharge.HAS_ONE = {};
    RecurringApplicationCharge.HAS_MANY = {};
    RecurringApplicationCharge.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "recurring_application_charges/<id>.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "recurring_application_charges.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "recurring_application_charges/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "recurring_application_charges.json" },
        { "http_method": "put", "operation": "customize", "ids": ["id"], "path": "recurring_application_charges/<id>/customize.json" }
    ];
    return RecurringApplicationCharge;
}(base_rest_resource_1.default));
exports.RecurringApplicationCharge = RecurringApplicationCharge;

"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var Report = /** @class */ (function (_super) {
    tslib_1.__extends(Report, _super);
    function Report() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Report.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.fields, fields = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Report.baseFind({
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
    Report.delete = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Report.request({
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
    Report.all = function (_a) {
        var session = _a.session, _b = _a.ids, ids = _b === void 0 ? null : _b, _c = _a.limit, limit = _c === void 0 ? null : _c, _d = _a.since_id, since_id = _d === void 0 ? null : _d, _e = _a.updated_at_min, updated_at_min = _e === void 0 ? null : _e, _f = _a.updated_at_max, updated_at_max = _f === void 0 ? null : _f, _g = _a.fields, fields = _g === void 0 ? null : _g, otherArgs = tslib_1.__rest(_a, ["session", "ids", "limit", "since_id", "updated_at_min", "updated_at_max", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_h) {
                switch (_h.label) {
                    case 0: return [4 /*yield*/, Report.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "ids": ids, "limit": limit, "since_id": since_id, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "fields": fields }, otherArgs),
                        })];
                    case 1:
                        response = _h.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Report.API_VERSION = base_types_1.ApiVersion.July22;
    Report.NAME = 'report';
    Report.PLURAL_NAME = 'reports';
    Report.HAS_ONE = {};
    Report.HAS_MANY = {};
    Report.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "reports/<id>.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "reports.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "reports/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "reports.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "reports/<id>.json" }
    ];
    return Report;
}(base_rest_resource_1.default));
exports.Report = Report;

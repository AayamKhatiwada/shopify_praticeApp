"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var province_1 = require("./province");
var Country = /** @class */ (function (_super) {
    tslib_1.__extends(Country, _super);
    function Country() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Country.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.fields, fields = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Country.baseFind({
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
    Country.delete = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Country.request({
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
    Country.all = function (_a) {
        var session = _a.session, _b = _a.since_id, since_id = _b === void 0 ? null : _b, _c = _a.fields, fields = _c === void 0 ? null : _c, otherArgs = tslib_1.__rest(_a, ["session", "since_id", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, Country.baseFind({
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
    Country.count = function (_a) {
        var session = _a.session, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Country.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({}, otherArgs),
                            body: {},
                            entity: null,
                        })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Country.API_VERSION = base_types_1.ApiVersion.October22;
    Country.NAME = 'country';
    Country.PLURAL_NAME = 'countries';
    Country.HAS_ONE = {};
    Country.HAS_MANY = {
        "provinces": province_1.Province
    };
    Country.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "countries/<id>.json" },
        { "http_method": "get", "operation": "count", "ids": [], "path": "countries/count.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "countries.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "countries/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "countries.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "countries/<id>.json" }
    ];
    return Country;
}(base_rest_resource_1.default));
exports.Country = Country;

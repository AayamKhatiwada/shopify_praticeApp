"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSavedSearch = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var CustomerSavedSearch = /** @class */ (function (_super) {
    tslib_1.__extends(CustomerSavedSearch, _super);
    function CustomerSavedSearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomerSavedSearch.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.fields, fields = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, CustomerSavedSearch.baseFind({
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
    CustomerSavedSearch.delete = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, CustomerSavedSearch.request({
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
    CustomerSavedSearch.all = function (_a) {
        var session = _a.session, _b = _a.limit, limit = _b === void 0 ? null : _b, _c = _a.since_id, since_id = _c === void 0 ? null : _c, _d = _a.fields, fields = _d === void 0 ? null : _d, otherArgs = tslib_1.__rest(_a, ["session", "limit", "since_id", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, CustomerSavedSearch.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "limit": limit, "since_id": since_id, "fields": fields }, otherArgs),
                        })];
                    case 1:
                        response = _e.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    CustomerSavedSearch.count = function (_a) {
        var session = _a.session, _b = _a.since_id, since_id = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "since_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, CustomerSavedSearch.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "since_id": since_id }, otherArgs),
                            body: {},
                            entity: null,
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    CustomerSavedSearch.customers = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.order, order = _b === void 0 ? null : _b, _c = _a.limit, limit = _c === void 0 ? null : _c, _d = _a.fields, fields = _d === void 0 ? null : _d, otherArgs = tslib_1.__rest(_a, ["session", "id", "order", "limit", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, CustomerSavedSearch.request({
                            http_method: "get",
                            operation: "customers",
                            session: session,
                            urlIds: { "id": id },
                            params: tslib_1.__assign({ "order": order, "limit": limit, "fields": fields }, otherArgs),
                            body: {},
                            entity: null,
                        })];
                    case 1:
                        response = _e.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    CustomerSavedSearch.API_VERSION = base_types_1.ApiVersion.April22;
    CustomerSavedSearch.NAME = 'customer_saved_search';
    CustomerSavedSearch.PLURAL_NAME = 'customer_saved_searches';
    CustomerSavedSearch.HAS_ONE = {};
    CustomerSavedSearch.HAS_MANY = {};
    CustomerSavedSearch.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "customer_saved_searches/<id>.json" },
        { "http_method": "get", "operation": "count", "ids": [], "path": "customer_saved_searches/count.json" },
        { "http_method": "get", "operation": "customers", "ids": ["id"], "path": "customer_saved_searches/<id>/customers.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "customer_saved_searches.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "customer_saved_searches/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "customer_saved_searches.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "customer_saved_searches/<id>.json" }
    ];
    return CustomerSavedSearch;
}(base_rest_resource_1.default));
exports.CustomerSavedSearch = CustomerSavedSearch;

"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var metafield_1 = require("./metafield");
var Customer = /** @class */ (function (_super) {
    tslib_1.__extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.fields, fields = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Customer.baseFind({
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
    Customer.delete = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Customer.request({
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
    Customer.all = function (_a) {
        var session = _a.session, _b = _a.ids, ids = _b === void 0 ? null : _b, _c = _a.since_id, since_id = _c === void 0 ? null : _c, _d = _a.created_at_min, created_at_min = _d === void 0 ? null : _d, _e = _a.created_at_max, created_at_max = _e === void 0 ? null : _e, _f = _a.updated_at_min, updated_at_min = _f === void 0 ? null : _f, _g = _a.updated_at_max, updated_at_max = _g === void 0 ? null : _g, _h = _a.limit, limit = _h === void 0 ? null : _h, _j = _a.fields, fields = _j === void 0 ? null : _j, otherArgs = tslib_1.__rest(_a, ["session", "ids", "since_id", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max", "limit", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_k) {
                switch (_k.label) {
                    case 0: return [4 /*yield*/, Customer.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "ids": ids, "since_id": since_id, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max, "limit": limit, "fields": fields }, otherArgs),
                        })];
                    case 1:
                        response = _k.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Customer.count = function (_a) {
        var session = _a.session, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Customer.request({
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
    Customer.orders = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.status, status = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "id", "status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Customer.request({
                            http_method: "get",
                            operation: "orders",
                            session: session,
                            urlIds: { "id": id },
                            params: tslib_1.__assign({ "status": status }, otherArgs),
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
    Customer.search = function (_a) {
        var session = _a.session, _b = _a.order, order = _b === void 0 ? null : _b, _c = _a.query, query = _c === void 0 ? null : _c, _d = _a.limit, limit = _d === void 0 ? null : _d, _e = _a.fields, fields = _e === void 0 ? null : _e, otherArgs = tslib_1.__rest(_a, ["session", "order", "query", "limit", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, Customer.request({
                            http_method: "get",
                            operation: "search",
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "order": order, "query": query, "limit": limit, "fields": fields }, otherArgs),
                            body: {},
                            entity: null,
                        })];
                    case 1:
                        response = _f.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Customer.prototype.account_activation_url = function (_a) {
        var _b = _a.body, body = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Customer.request({
                            http_method: "post",
                            operation: "account_activation_url",
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
    Customer.prototype.send_invite = function (_a) {
        var _b = _a.body, body = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Customer.request({
                            http_method: "post",
                            operation: "send_invite",
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
    Customer.API_VERSION = base_types_1.ApiVersion.April22;
    Customer.NAME = 'customer';
    Customer.PLURAL_NAME = 'customers';
    Customer.HAS_ONE = {
        "metafield": metafield_1.Metafield
    };
    Customer.HAS_MANY = {};
    Customer.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "customers/<id>.json" },
        { "http_method": "get", "operation": "count", "ids": [], "path": "customers/count.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "customers.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "customers/<id>.json" },
        { "http_method": "get", "operation": "orders", "ids": ["id"], "path": "customers/<id>/orders.json" },
        { "http_method": "get", "operation": "search", "ids": [], "path": "customers/search.json" },
        { "http_method": "post", "operation": "account_activation_url", "ids": ["id"], "path": "customers/<id>/account_activation_url.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "customers.json" },
        { "http_method": "post", "operation": "send_invite", "ids": ["id"], "path": "customers/<id>/send_invite.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "customers/<id>.json" }
    ];
    return Customer;
}(base_rest_resource_1.default));
exports.Customer = Customer;

"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAddress = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var CustomerAddress = /** @class */ (function (_super) {
    tslib_1.__extends(CustomerAddress, _super);
    function CustomerAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomerAddress.getJsonBodyName = function () {
        return "address";
    };
    CustomerAddress.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.customer_id, customer_id = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, CustomerAddress.baseFind({
                            session: session,
                            urlIds: { "id": id, "customer_id": customer_id },
                            params: {},
                        })];
                    case 1:
                        result = _c.sent();
                        return [2 /*return*/, result ? result[0] : null];
                }
            });
        });
    };
    CustomerAddress.delete = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.customer_id, customer_id = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, CustomerAddress.request({
                            http_method: "delete",
                            operation: "delete",
                            session: session,
                            urlIds: { "id": id, "customer_id": customer_id },
                            params: {},
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    CustomerAddress.all = function (_a) {
        var session = _a.session, _b = _a.customer_id, customer_id = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "customer_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, CustomerAddress.baseFind({
                            session: session,
                            urlIds: { "customer_id": customer_id },
                            params: tslib_1.__assign({}, otherArgs),
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    CustomerAddress.prototype.default = function (_a) {
        var _b = _a.body, body = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, CustomerAddress.request({
                            http_method: "put",
                            operation: "default",
                            session: this.session,
                            urlIds: { "id": this.id, "customer_id": this.customer_id },
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
    CustomerAddress.prototype.set = function (_a) {
        var _b = _a.address_ids, address_ids = _b === void 0 ? null : _b, _c = _a.operation, operation = _c === void 0 ? null : _c, _d = _a.body, body = _d === void 0 ? null : _d, otherArgs = tslib_1.__rest(_a, ["address_ids", "operation", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, CustomerAddress.request({
                            http_method: "put",
                            operation: "set",
                            session: this.session,
                            urlIds: { "customer_id": this.customer_id },
                            params: tslib_1.__assign({ "address_ids": address_ids, "operation": operation }, otherArgs),
                            body: body,
                            entity: this,
                        })];
                    case 1:
                        response = _e.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    CustomerAddress.API_VERSION = base_types_1.ApiVersion.July22;
    CustomerAddress.NAME = 'customer_address';
    CustomerAddress.PLURAL_NAME = 'customer_addresses';
    CustomerAddress.HAS_ONE = {};
    CustomerAddress.HAS_MANY = {};
    CustomerAddress.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["customer_id", "id"], "path": "customers/<customer_id>/addresses/<id>.json" },
        { "http_method": "get", "operation": "get", "ids": ["customer_id"], "path": "customers/<customer_id>/addresses.json" },
        { "http_method": "get", "operation": "get", "ids": ["customer_id", "id"], "path": "customers/<customer_id>/addresses/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": ["customer_id"], "path": "customers/<customer_id>/addresses.json" },
        { "http_method": "put", "operation": "default", "ids": ["customer_id", "id"], "path": "customers/<customer_id>/addresses/<id>/default.json" },
        { "http_method": "put", "operation": "put", "ids": ["customer_id", "id"], "path": "customers/<customer_id>/addresses/<id>.json" },
        { "http_method": "put", "operation": "set", "ids": ["customer_id"], "path": "customers/<customer_id>/addresses/set.json" }
    ];
    return CustomerAddress;
}(base_rest_resource_1.default));
exports.CustomerAddress = CustomerAddress;

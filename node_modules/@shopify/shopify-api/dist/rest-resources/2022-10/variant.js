"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variant = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var Variant = /** @class */ (function (_super) {
    tslib_1.__extends(Variant, _super);
    function Variant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Variant.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.fields, fields = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Variant.baseFind({
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
    Variant.delete = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.product_id, product_id = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Variant.request({
                            http_method: "delete",
                            operation: "delete",
                            session: session,
                            urlIds: { "id": id, "product_id": product_id },
                            params: {},
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Variant.all = function (_a) {
        var session = _a.session, _b = _a.product_id, product_id = _b === void 0 ? null : _b, _c = _a.limit, limit = _c === void 0 ? null : _c, _d = _a.presentment_currencies, presentment_currencies = _d === void 0 ? null : _d, _e = _a.since_id, since_id = _e === void 0 ? null : _e, _f = _a.fields, fields = _f === void 0 ? null : _f, otherArgs = tslib_1.__rest(_a, ["session", "product_id", "limit", "presentment_currencies", "since_id", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_g) {
                switch (_g.label) {
                    case 0: return [4 /*yield*/, Variant.baseFind({
                            session: session,
                            urlIds: { "product_id": product_id },
                            params: tslib_1.__assign({ "limit": limit, "presentment_currencies": presentment_currencies, "since_id": since_id, "fields": fields }, otherArgs),
                        })];
                    case 1:
                        response = _g.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Variant.count = function (_a) {
        var session = _a.session, _b = _a.product_id, product_id = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "product_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Variant.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: { "product_id": product_id },
                            params: tslib_1.__assign({}, otherArgs),
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
    Variant.API_VERSION = base_types_1.ApiVersion.October22;
    Variant.NAME = 'variant';
    Variant.PLURAL_NAME = 'variants';
    Variant.HAS_ONE = {};
    Variant.HAS_MANY = {};
    Variant.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["product_id", "id"], "path": "products/<product_id>/variants/<id>.json" },
        { "http_method": "get", "operation": "count", "ids": ["product_id"], "path": "products/<product_id>/variants/count.json" },
        { "http_method": "get", "operation": "get", "ids": ["product_id"], "path": "products/<product_id>/variants.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "variants/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": ["product_id"], "path": "products/<product_id>/variants.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "variants/<id>.json" }
    ];
    Variant.READ_ONLY_ATTRIBUTES = [
        "inventory_quantity",
        "inventory_quantity_adjustment"
    ];
    return Variant;
}(base_rest_resource_1.default));
exports.Variant = Variant;

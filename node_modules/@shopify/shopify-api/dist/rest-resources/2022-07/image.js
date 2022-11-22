"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var Image = /** @class */ (function (_super) {
    tslib_1.__extends(Image, _super);
    function Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Image.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.product_id, product_id = _b === void 0 ? null : _b, _c = _a.fields, fields = _c === void 0 ? null : _c;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, Image.baseFind({
                            session: session,
                            urlIds: { "id": id, "product_id": product_id },
                            params: { "fields": fields },
                        })];
                    case 1:
                        result = _d.sent();
                        return [2 /*return*/, result ? result[0] : null];
                }
            });
        });
    };
    Image.delete = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.product_id, product_id = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Image.request({
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
    Image.all = function (_a) {
        var session = _a.session, _b = _a.product_id, product_id = _b === void 0 ? null : _b, _c = _a.since_id, since_id = _c === void 0 ? null : _c, _d = _a.fields, fields = _d === void 0 ? null : _d, otherArgs = tslib_1.__rest(_a, ["session", "product_id", "since_id", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, Image.baseFind({
                            session: session,
                            urlIds: { "product_id": product_id },
                            params: tslib_1.__assign({ "since_id": since_id, "fields": fields }, otherArgs),
                        })];
                    case 1:
                        response = _e.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Image.count = function (_a) {
        var session = _a.session, _b = _a.product_id, product_id = _b === void 0 ? null : _b, _c = _a.since_id, since_id = _c === void 0 ? null : _c, otherArgs = tslib_1.__rest(_a, ["session", "product_id", "since_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, Image.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: { "product_id": product_id },
                            params: tslib_1.__assign({ "since_id": since_id }, otherArgs),
                            body: {},
                            entity: null,
                        })];
                    case 1:
                        response = _d.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Image.API_VERSION = base_types_1.ApiVersion.July22;
    Image.NAME = 'image';
    Image.PLURAL_NAME = 'images';
    Image.HAS_ONE = {};
    Image.HAS_MANY = {};
    Image.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["product_id", "id"], "path": "products/<product_id>/images/<id>.json" },
        { "http_method": "get", "operation": "count", "ids": ["product_id"], "path": "products/<product_id>/images/count.json" },
        { "http_method": "get", "operation": "get", "ids": ["product_id"], "path": "products/<product_id>/images.json" },
        { "http_method": "get", "operation": "get", "ids": ["product_id", "id"], "path": "products/<product_id>/images/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": ["product_id"], "path": "products/<product_id>/images.json" },
        { "http_method": "put", "operation": "put", "ids": ["product_id", "id"], "path": "products/<product_id>/images/<id>.json" }
    ];
    return Image;
}(base_rest_resource_1.default));
exports.Image = Image;

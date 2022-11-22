"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var image_1 = require("./image");
var Collection = /** @class */ (function (_super) {
    tslib_1.__extends(Collection, _super);
    function Collection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Collection.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.fields, fields = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Collection.baseFind({
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
    Collection.products = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.limit, limit = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "id", "limit"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Collection.request({
                            http_method: "get",
                            operation: "products",
                            session: session,
                            urlIds: { "id": id },
                            params: tslib_1.__assign({ "limit": limit }, otherArgs),
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
    Collection.API_VERSION = base_types_1.ApiVersion.January22;
    Collection.NAME = 'collection';
    Collection.PLURAL_NAME = 'collections';
    Collection.HAS_ONE = {
        "image": image_1.Image
    };
    Collection.HAS_MANY = {};
    Collection.PATHS = [
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "collections/<id>.json" },
        { "http_method": "get", "operation": "products", "ids": ["id"], "path": "collections/<id>/products.json" }
    ];
    return Collection;
}(base_rest_resource_1.default));
exports.Collection = Collection;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionListing = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var image_1 = require("./image");
var CollectionListing = /** @class */ (function (_super) {
    tslib_1.__extends(CollectionListing, _super);
    function CollectionListing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollectionListing.find = function (_a) {
        var session = _a.session, collection_id = _a.collection_id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, CollectionListing.baseFind({
                            session: session,
                            urlIds: { "collection_id": collection_id },
                            params: {},
                        })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, result ? result[0] : null];
                }
            });
        });
    };
    CollectionListing.delete = function (_a) {
        var session = _a.session, collection_id = _a.collection_id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, CollectionListing.request({
                            http_method: "delete",
                            operation: "delete",
                            session: session,
                            urlIds: { "collection_id": collection_id },
                            params: {},
                        })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    CollectionListing.all = function (_a) {
        var session = _a.session, _b = _a.limit, limit = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "limit"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, CollectionListing.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "limit": limit }, otherArgs),
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    CollectionListing.product_ids = function (_a) {
        var session = _a.session, collection_id = _a.collection_id, _b = _a.limit, limit = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "collection_id", "limit"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, CollectionListing.request({
                            http_method: "get",
                            operation: "product_ids",
                            session: session,
                            urlIds: { "collection_id": collection_id },
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
    CollectionListing.API_VERSION = base_types_1.ApiVersion.October21;
    CollectionListing.NAME = 'collection_listing';
    CollectionListing.PLURAL_NAME = 'collection_listings';
    CollectionListing.HAS_ONE = {
        "image": image_1.Image
    };
    CollectionListing.HAS_MANY = {};
    CollectionListing.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["collection_id"], "path": "collection_listings/<collection_id>.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "collection_listings.json" },
        { "http_method": "get", "operation": "get", "ids": ["collection_id"], "path": "collection_listings/<collection_id>.json" },
        { "http_method": "get", "operation": "product_ids", "ids": ["collection_id"], "path": "collection_listings/<collection_id>/product_ids.json" },
        { "http_method": "put", "operation": "put", "ids": ["collection_id"], "path": "collection_listings/<collection_id>.json" }
    ];
    CollectionListing.PRIMARY_KEY = "collection_id";
    return CollectionListing;
}(base_rest_resource_1.default));
exports.CollectionListing = CollectionListing;

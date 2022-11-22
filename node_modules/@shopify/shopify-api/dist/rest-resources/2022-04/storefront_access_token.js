"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorefrontAccessToken = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var StorefrontAccessToken = /** @class */ (function (_super) {
    tslib_1.__extends(StorefrontAccessToken, _super);
    function StorefrontAccessToken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StorefrontAccessToken.delete = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, StorefrontAccessToken.request({
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
    StorefrontAccessToken.all = function (_a) {
        var session = _a.session, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, StorefrontAccessToken.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({}, otherArgs),
                        })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    StorefrontAccessToken.API_VERSION = base_types_1.ApiVersion.April22;
    StorefrontAccessToken.NAME = 'storefront_access_token';
    StorefrontAccessToken.PLURAL_NAME = 'storefront_access_tokens';
    StorefrontAccessToken.HAS_ONE = {};
    StorefrontAccessToken.HAS_MANY = {};
    StorefrontAccessToken.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "storefront_access_tokens/<id>.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "storefront_access_tokens.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "storefront_access_tokens.json" }
    ];
    return StorefrontAccessToken;
}(base_rest_resource_1.default));
exports.StorefrontAccessToken = StorefrontAccessToken;

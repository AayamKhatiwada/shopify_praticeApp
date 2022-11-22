"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asset = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var Asset = /** @class */ (function (_super) {
    tslib_1.__extends(Asset, _super);
    function Asset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Asset.delete = function (_a) {
        var session = _a.session, _b = _a.theme_id, theme_id = _b === void 0 ? null : _b, _c = _a.asset, asset = _c === void 0 ? null : _c;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, Asset.request({
                            http_method: "delete",
                            operation: "delete",
                            session: session,
                            urlIds: { "theme_id": theme_id },
                            params: { "asset": asset },
                        })];
                    case 1:
                        response = _d.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Asset.all = function (_a) {
        var session = _a.session, _b = _a.theme_id, theme_id = _b === void 0 ? null : _b, _c = _a.fields, fields = _c === void 0 ? null : _c, _d = _a.asset, asset = _d === void 0 ? null : _d, otherArgs = tslib_1.__rest(_a, ["session", "theme_id", "fields", "asset"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, Asset.baseFind({
                            session: session,
                            urlIds: { "theme_id": theme_id },
                            params: tslib_1.__assign({ "fields": fields, "asset": asset }, otherArgs),
                        })];
                    case 1:
                        response = _e.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Asset.API_VERSION = base_types_1.ApiVersion.October22;
    Asset.NAME = 'asset';
    Asset.PLURAL_NAME = 'assets';
    Asset.HAS_ONE = {};
    Asset.HAS_MANY = {};
    Asset.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["theme_id"], "path": "themes/<theme_id>/assets.json" },
        { "http_method": "get", "operation": "get", "ids": ["theme_id"], "path": "themes/<theme_id>/assets.json" },
        { "http_method": "get", "operation": "get", "ids": ["theme_id"], "path": "themes/<theme_id>/assets.json" },
        { "http_method": "put", "operation": "put", "ids": ["theme_id"], "path": "themes/<theme_id>/assets.json" }
    ];
    Asset.PRIMARY_KEY = "key";
    return Asset;
}(base_rest_resource_1.default));
exports.Asset = Asset;

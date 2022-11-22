"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobilePlatformApplication = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var MobilePlatformApplication = /** @class */ (function (_super) {
    tslib_1.__extends(MobilePlatformApplication, _super);
    function MobilePlatformApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobilePlatformApplication.find = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, MobilePlatformApplication.baseFind({
                            session: session,
                            urlIds: { "id": id },
                            params: {},
                        })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, result ? result[0] : null];
                }
            });
        });
    };
    MobilePlatformApplication.delete = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, MobilePlatformApplication.request({
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
    MobilePlatformApplication.all = function (_a) {
        var session = _a.session, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, MobilePlatformApplication.baseFind({
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
    MobilePlatformApplication.API_VERSION = base_types_1.ApiVersion.October22;
    MobilePlatformApplication.NAME = 'mobile_platform_application';
    MobilePlatformApplication.PLURAL_NAME = 'mobile_platform_applications';
    MobilePlatformApplication.HAS_ONE = {};
    MobilePlatformApplication.HAS_MANY = {};
    MobilePlatformApplication.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "mobile_platform_applications/<id>.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "mobile_platform_applications.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "mobile_platform_applications/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "mobile_platform_applications.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "mobile_platform_applications/<id>.json" }
    ];
    return MobilePlatformApplication;
}(base_rest_resource_1.default));
exports.MobilePlatformApplication = MobilePlatformApplication;

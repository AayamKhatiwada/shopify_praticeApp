"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.AndroidPayKey = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var AndroidPayKey = /** @class */ (function (_super) {
    tslib_1.__extends(AndroidPayKey, _super);
    function AndroidPayKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidPayKey.find = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, AndroidPayKey.baseFind({
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
    AndroidPayKey.delete = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, AndroidPayKey.request({
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
    AndroidPayKey.API_VERSION = base_types_1.ApiVersion.April22;
    AndroidPayKey.NAME = 'android_pay_key';
    AndroidPayKey.PLURAL_NAME = 'android_pay_keys';
    AndroidPayKey.HAS_ONE = {};
    AndroidPayKey.HAS_MANY = {};
    AndroidPayKey.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "android_pay_keys/<id>.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "android_pay_keys/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "android_pay_keys.json" }
    ];
    return AndroidPayKey;
}(base_rest_resource_1.default));
exports.AndroidPayKey = AndroidPayKey;

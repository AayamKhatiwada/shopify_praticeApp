"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theme = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var Theme = /** @class */ (function (_super) {
    tslib_1.__extends(Theme, _super);
    function Theme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Theme.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.fields, fields = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Theme.baseFind({
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
    Theme.delete = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Theme.request({
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
    Theme.all = function (_a) {
        var session = _a.session, _b = _a.fields, fields = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Theme.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "fields": fields }, otherArgs),
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Theme.API_VERSION = base_types_1.ApiVersion.April22;
    Theme.NAME = 'theme';
    Theme.PLURAL_NAME = 'themes';
    Theme.HAS_ONE = {};
    Theme.HAS_MANY = {};
    Theme.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "themes/<id>.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "themes.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "themes/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "themes.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "themes/<id>.json" }
    ];
    return Theme;
}(base_rest_resource_1.default));
exports.Theme = Theme;

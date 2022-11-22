"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var Shop = /** @class */ (function (_super) {
    tslib_1.__extends(Shop, _super);
    function Shop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shop.all = function (_a) {
        var session = _a.session, _b = _a.fields, fields = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Shop.baseFind({
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
    Shop.API_VERSION = base_types_1.ApiVersion.October22;
    Shop.NAME = 'shop';
    Shop.PLURAL_NAME = 'shops';
    Shop.HAS_ONE = {};
    Shop.HAS_MANY = {};
    Shop.PATHS = [
        { "http_method": "get", "operation": "get", "ids": [], "path": "shop.json" }
    ];
    return Shop;
}(base_rest_resource_1.default));
exports.Shop = Shop;

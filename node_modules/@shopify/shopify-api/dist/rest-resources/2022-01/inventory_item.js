"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryItem = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var InventoryItem = /** @class */ (function (_super) {
    tslib_1.__extends(InventoryItem, _super);
    function InventoryItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InventoryItem.find = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, InventoryItem.baseFind({
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
    InventoryItem.all = function (_a) {
        var session = _a.session, _b = _a.ids, ids = _b === void 0 ? null : _b, _c = _a.limit, limit = _c === void 0 ? null : _c, otherArgs = tslib_1.__rest(_a, ["session", "ids", "limit"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, InventoryItem.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "ids": ids, "limit": limit }, otherArgs),
                        })];
                    case 1:
                        response = _d.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    InventoryItem.API_VERSION = base_types_1.ApiVersion.January22;
    InventoryItem.NAME = 'inventory_item';
    InventoryItem.PLURAL_NAME = 'inventory_items';
    InventoryItem.HAS_ONE = {};
    InventoryItem.HAS_MANY = {};
    InventoryItem.PATHS = [
        { "http_method": "get", "operation": "get", "ids": [], "path": "inventory_items.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "inventory_items/<id>.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "inventory_items/<id>.json" }
    ];
    return InventoryItem;
}(base_rest_resource_1.default));
exports.InventoryItem = InventoryItem;

"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryLevel = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var InventoryLevel = /** @class */ (function (_super) {
    tslib_1.__extends(InventoryLevel, _super);
    function InventoryLevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InventoryLevel.delete = function (_a) {
        var session = _a.session, _b = _a.inventory_item_id, inventory_item_id = _b === void 0 ? null : _b, _c = _a.location_id, location_id = _c === void 0 ? null : _c;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, InventoryLevel.request({
                            http_method: "delete",
                            operation: "delete",
                            session: session,
                            urlIds: {},
                            params: { "inventory_item_id": inventory_item_id, "location_id": location_id },
                        })];
                    case 1:
                        response = _d.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    InventoryLevel.all = function (_a) {
        var session = _a.session, _b = _a.inventory_item_ids, inventory_item_ids = _b === void 0 ? null : _b, _c = _a.location_ids, location_ids = _c === void 0 ? null : _c, _d = _a.limit, limit = _d === void 0 ? null : _d, _e = _a.updated_at_min, updated_at_min = _e === void 0 ? null : _e, otherArgs = tslib_1.__rest(_a, ["session", "inventory_item_ids", "location_ids", "limit", "updated_at_min"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, InventoryLevel.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "inventory_item_ids": inventory_item_ids, "location_ids": location_ids, "limit": limit, "updated_at_min": updated_at_min }, otherArgs),
                        })];
                    case 1:
                        response = _f.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    InventoryLevel.prototype.adjust = function (_a) {
        var _b = _a.inventory_item_id, inventory_item_id = _b === void 0 ? null : _b, _c = _a.location_id, location_id = _c === void 0 ? null : _c, _d = _a.available_adjustment, available_adjustment = _d === void 0 ? null : _d, _e = _a.body, body = _e === void 0 ? null : _e, otherArgs = tslib_1.__rest(_a, ["inventory_item_id", "location_id", "available_adjustment", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, InventoryLevel.request({
                            http_method: "post",
                            operation: "adjust",
                            session: this.session,
                            urlIds: {},
                            params: tslib_1.__assign({ "inventory_item_id": inventory_item_id, "location_id": location_id, "available_adjustment": available_adjustment }, otherArgs),
                            body: body,
                            entity: this,
                        })];
                    case 1:
                        response = _f.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    InventoryLevel.prototype.connect = function (_a) {
        var _b = _a.inventory_item_id, inventory_item_id = _b === void 0 ? null : _b, _c = _a.location_id, location_id = _c === void 0 ? null : _c, _d = _a.relocate_if_necessary, relocate_if_necessary = _d === void 0 ? null : _d, _e = _a.body, body = _e === void 0 ? null : _e, otherArgs = tslib_1.__rest(_a, ["inventory_item_id", "location_id", "relocate_if_necessary", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, InventoryLevel.request({
                            http_method: "post",
                            operation: "connect",
                            session: this.session,
                            urlIds: {},
                            params: tslib_1.__assign({ "inventory_item_id": inventory_item_id, "location_id": location_id, "relocate_if_necessary": relocate_if_necessary }, otherArgs),
                            body: body,
                            entity: this,
                        })];
                    case 1:
                        response = _f.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    InventoryLevel.prototype.set = function (_a) {
        var _b = _a.inventory_item_id, inventory_item_id = _b === void 0 ? null : _b, _c = _a.location_id, location_id = _c === void 0 ? null : _c, _d = _a.available, available = _d === void 0 ? null : _d, _e = _a.disconnect_if_necessary, disconnect_if_necessary = _e === void 0 ? null : _e, _f = _a.body, body = _f === void 0 ? null : _f, otherArgs = tslib_1.__rest(_a, ["inventory_item_id", "location_id", "available", "disconnect_if_necessary", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_g) {
                switch (_g.label) {
                    case 0: return [4 /*yield*/, InventoryLevel.request({
                            http_method: "post",
                            operation: "set",
                            session: this.session,
                            urlIds: {},
                            params: tslib_1.__assign({ "inventory_item_id": inventory_item_id, "location_id": location_id, "available": available, "disconnect_if_necessary": disconnect_if_necessary }, otherArgs),
                            body: body,
                            entity: this,
                        })];
                    case 1:
                        response = _g.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    InventoryLevel.API_VERSION = base_types_1.ApiVersion.July22;
    InventoryLevel.NAME = 'inventory_level';
    InventoryLevel.PLURAL_NAME = 'inventory_levels';
    InventoryLevel.HAS_ONE = {};
    InventoryLevel.HAS_MANY = {};
    InventoryLevel.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": [], "path": "inventory_levels.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "inventory_levels.json" },
        { "http_method": "post", "operation": "adjust", "ids": [], "path": "inventory_levels/adjust.json" },
        { "http_method": "post", "operation": "connect", "ids": [], "path": "inventory_levels/connect.json" },
        { "http_method": "post", "operation": "set", "ids": [], "path": "inventory_levels/set.json" }
    ];
    return InventoryLevel;
}(base_rest_resource_1.default));
exports.InventoryLevel = InventoryLevel;

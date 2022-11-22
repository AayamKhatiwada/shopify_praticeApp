"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftCard = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var GiftCard = /** @class */ (function (_super) {
    tslib_1.__extends(GiftCard, _super);
    function GiftCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GiftCard.find = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, GiftCard.baseFind({
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
    GiftCard.all = function (_a) {
        var session = _a.session, _b = _a.status, status = _b === void 0 ? null : _b, _c = _a.limit, limit = _c === void 0 ? null : _c, _d = _a.since_id, since_id = _d === void 0 ? null : _d, _e = _a.fields, fields = _e === void 0 ? null : _e, otherArgs = tslib_1.__rest(_a, ["session", "status", "limit", "since_id", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, GiftCard.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "status": status, "limit": limit, "since_id": since_id, "fields": fields }, otherArgs),
                        })];
                    case 1:
                        response = _f.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    GiftCard.count = function (_a) {
        var session = _a.session, _b = _a.status, status = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, GiftCard.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "status": status }, otherArgs),
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
    GiftCard.search = function (_a) {
        var session = _a.session, _b = _a.order, order = _b === void 0 ? null : _b, _c = _a.query, query = _c === void 0 ? null : _c, _d = _a.limit, limit = _d === void 0 ? null : _d, _e = _a.fields, fields = _e === void 0 ? null : _e, _f = _a.created_at_min, created_at_min = _f === void 0 ? null : _f, _g = _a.created_at_max, created_at_max = _g === void 0 ? null : _g, _h = _a.updated_at_min, updated_at_min = _h === void 0 ? null : _h, _j = _a.updated_at_max, updated_at_max = _j === void 0 ? null : _j, otherArgs = tslib_1.__rest(_a, ["session", "order", "query", "limit", "fields", "created_at_min", "created_at_max", "updated_at_min", "updated_at_max"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_k) {
                switch (_k.label) {
                    case 0: return [4 /*yield*/, GiftCard.request({
                            http_method: "get",
                            operation: "search",
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "order": order, "query": query, "limit": limit, "fields": fields, "created_at_min": created_at_min, "created_at_max": created_at_max, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max }, otherArgs),
                            body: {},
                            entity: null,
                        })];
                    case 1:
                        response = _k.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    GiftCard.prototype.disable = function (_a) {
        var _b = _a.body, body = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, GiftCard.request({
                            http_method: "post",
                            operation: "disable",
                            session: this.session,
                            urlIds: { "id": this.id },
                            params: tslib_1.__assign({}, otherArgs),
                            body: body,
                            entity: this,
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    GiftCard.API_VERSION = base_types_1.ApiVersion.April22;
    GiftCard.NAME = 'gift_card';
    GiftCard.PLURAL_NAME = 'gift_cards';
    GiftCard.HAS_ONE = {};
    GiftCard.HAS_MANY = {};
    GiftCard.PATHS = [
        { "http_method": "get", "operation": "count", "ids": [], "path": "gift_cards/count.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "gift_cards.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "gift_cards/<id>.json" },
        { "http_method": "get", "operation": "search", "ids": [], "path": "gift_cards/search.json" },
        { "http_method": "post", "operation": "disable", "ids": ["id"], "path": "gift_cards/<id>/disable.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "gift_cards.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "gift_cards/<id>.json" }
    ];
    return GiftCard;
}(base_rest_resource_1.default));
exports.GiftCard = GiftCard;

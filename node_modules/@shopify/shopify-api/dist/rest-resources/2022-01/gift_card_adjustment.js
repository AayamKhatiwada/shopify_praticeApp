"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftCardAdjustment = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var GiftCardAdjustment = /** @class */ (function (_super) {
    tslib_1.__extends(GiftCardAdjustment, _super);
    function GiftCardAdjustment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GiftCardAdjustment.getJsonBodyName = function () {
        return "adjustment";
    };
    GiftCardAdjustment.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.gift_card_id, gift_card_id = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, GiftCardAdjustment.baseFind({
                            session: session,
                            urlIds: { "id": id, "gift_card_id": gift_card_id },
                            params: {},
                        })];
                    case 1:
                        result = _c.sent();
                        return [2 /*return*/, result ? result[0] : null];
                }
            });
        });
    };
    GiftCardAdjustment.all = function (_a) {
        var session = _a.session, _b = _a.gift_card_id, gift_card_id = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "gift_card_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, GiftCardAdjustment.baseFind({
                            session: session,
                            urlIds: { "gift_card_id": gift_card_id },
                            params: tslib_1.__assign({}, otherArgs),
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    GiftCardAdjustment.API_VERSION = base_types_1.ApiVersion.January22;
    GiftCardAdjustment.NAME = 'gift_card_adjustment';
    GiftCardAdjustment.PLURAL_NAME = 'gift_card_adjustments';
    GiftCardAdjustment.HAS_ONE = {};
    GiftCardAdjustment.HAS_MANY = {};
    GiftCardAdjustment.PATHS = [
        { "http_method": "get", "operation": "get", "ids": ["gift_card_id"], "path": "gift_cards/<gift_card_id>/adjustments.json" },
        { "http_method": "get", "operation": "get", "ids": ["gift_card_id", "id"], "path": "gift_cards/<gift_card_id>/adjustments/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": ["gift_card_id"], "path": "gift_cards/<gift_card_id>/adjustments.json" }
    ];
    return GiftCardAdjustment;
}(base_rest_resource_1.default));
exports.GiftCardAdjustment = GiftCardAdjustment;

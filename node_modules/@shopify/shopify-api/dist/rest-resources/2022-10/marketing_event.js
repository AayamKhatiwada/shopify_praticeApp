"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketingEvent = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var MarketingEvent = /** @class */ (function (_super) {
    tslib_1.__extends(MarketingEvent, _super);
    function MarketingEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarketingEvent.find = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, MarketingEvent.baseFind({
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
    MarketingEvent.delete = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, MarketingEvent.request({
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
    MarketingEvent.all = function (_a) {
        var session = _a.session, _b = _a.limit, limit = _b === void 0 ? null : _b, _c = _a.offset, offset = _c === void 0 ? null : _c, otherArgs = tslib_1.__rest(_a, ["session", "limit", "offset"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, MarketingEvent.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "limit": limit, "offset": offset }, otherArgs),
                        })];
                    case 1:
                        response = _d.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    MarketingEvent.count = function (_a) {
        var session = _a.session, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, MarketingEvent.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({}, otherArgs),
                            body: {},
                            entity: null,
                        })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    MarketingEvent.prototype.engagements = function (_a) {
        var _b = _a.occurred_on, occurred_on = _b === void 0 ? null : _b, _c = _a.impressions_count, impressions_count = _c === void 0 ? null : _c, _d = _a.views_count, views_count = _d === void 0 ? null : _d, _e = _a.clicks_count, clicks_count = _e === void 0 ? null : _e, _f = _a.shares_count, shares_count = _f === void 0 ? null : _f, _g = _a.favorites_count, favorites_count = _g === void 0 ? null : _g, _h = _a.comments_count, comments_count = _h === void 0 ? null : _h, _j = _a.ad_spend, ad_spend = _j === void 0 ? null : _j, _k = _a.is_cumulative, is_cumulative = _k === void 0 ? null : _k, _l = _a.body, body = _l === void 0 ? null : _l, otherArgs = tslib_1.__rest(_a, ["occurred_on", "impressions_count", "views_count", "clicks_count", "shares_count", "favorites_count", "comments_count", "ad_spend", "is_cumulative", "body"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_m) {
                switch (_m.label) {
                    case 0: return [4 /*yield*/, MarketingEvent.request({
                            http_method: "post",
                            operation: "engagements",
                            session: this.session,
                            urlIds: { "id": this.id },
                            params: tslib_1.__assign({ "occurred_on": occurred_on, "impressions_count": impressions_count, "views_count": views_count, "clicks_count": clicks_count, "shares_count": shares_count, "favorites_count": favorites_count, "comments_count": comments_count, "ad_spend": ad_spend, "is_cumulative": is_cumulative }, otherArgs),
                            body: body,
                            entity: this,
                        })];
                    case 1:
                        response = _m.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    MarketingEvent.API_VERSION = base_types_1.ApiVersion.October22;
    MarketingEvent.NAME = 'marketing_event';
    MarketingEvent.PLURAL_NAME = 'marketing_events';
    MarketingEvent.HAS_ONE = {};
    MarketingEvent.HAS_MANY = {};
    MarketingEvent.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "marketing_events/<id>.json" },
        { "http_method": "get", "operation": "count", "ids": [], "path": "marketing_events/count.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "marketing_events.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "marketing_events/<id>.json" },
        { "http_method": "post", "operation": "engagements", "ids": ["id"], "path": "marketing_events/<id>/engagements.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "marketing_events.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "marketing_events/<id>.json" }
    ];
    return MarketingEvent;
}(base_rest_resource_1.default));
exports.MarketingEvent = MarketingEvent;

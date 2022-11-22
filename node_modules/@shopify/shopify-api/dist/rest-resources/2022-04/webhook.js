"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Webhook = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var Webhook = /** @class */ (function (_super) {
    tslib_1.__extends(Webhook, _super);
    function Webhook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Webhook.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.fields, fields = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Webhook.baseFind({
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
    Webhook.delete = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Webhook.request({
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
    Webhook.all = function (_a) {
        var session = _a.session, _b = _a.address, address = _b === void 0 ? null : _b, _c = _a.created_at_max, created_at_max = _c === void 0 ? null : _c, _d = _a.created_at_min, created_at_min = _d === void 0 ? null : _d, _e = _a.fields, fields = _e === void 0 ? null : _e, _f = _a.limit, limit = _f === void 0 ? null : _f, _g = _a.since_id, since_id = _g === void 0 ? null : _g, _h = _a.topic, topic = _h === void 0 ? null : _h, _j = _a.updated_at_min, updated_at_min = _j === void 0 ? null : _j, _k = _a.updated_at_max, updated_at_max = _k === void 0 ? null : _k, otherArgs = tslib_1.__rest(_a, ["session", "address", "created_at_max", "created_at_min", "fields", "limit", "since_id", "topic", "updated_at_min", "updated_at_max"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_l) {
                switch (_l.label) {
                    case 0: return [4 /*yield*/, Webhook.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "address": address, "created_at_max": created_at_max, "created_at_min": created_at_min, "fields": fields, "limit": limit, "since_id": since_id, "topic": topic, "updated_at_min": updated_at_min, "updated_at_max": updated_at_max }, otherArgs),
                        })];
                    case 1:
                        response = _l.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Webhook.count = function (_a) {
        var session = _a.session, _b = _a.address, address = _b === void 0 ? null : _b, _c = _a.topic, topic = _c === void 0 ? null : _c, otherArgs = tslib_1.__rest(_a, ["session", "address", "topic"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, Webhook.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "address": address, "topic": topic }, otherArgs),
                            body: {},
                            entity: null,
                        })];
                    case 1:
                        response = _d.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    Webhook.API_VERSION = base_types_1.ApiVersion.April22;
    Webhook.NAME = 'webhook';
    Webhook.PLURAL_NAME = 'webhooks';
    Webhook.HAS_ONE = {};
    Webhook.HAS_MANY = {};
    Webhook.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "webhooks/<id>.json" },
        { "http_method": "get", "operation": "count", "ids": [], "path": "webhooks/count.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "webhooks.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "webhooks/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "webhooks.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "webhooks/<id>.json" }
    ];
    return Webhook;
}(base_rest_resource_1.default));
exports.Webhook = Webhook;

"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var Transaction = /** @class */ (function (_super) {
    tslib_1.__extends(Transaction, _super);
    function Transaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Transaction.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.order_id, order_id = _b === void 0 ? null : _b, _c = _a.fields, fields = _c === void 0 ? null : _c, _d = _a.in_shop_currency, in_shop_currency = _d === void 0 ? null : _d;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, Transaction.baseFind({
                            session: session,
                            urlIds: { "id": id, "order_id": order_id },
                            params: { "fields": fields, "in_shop_currency": in_shop_currency },
                        })];
                    case 1:
                        result = _e.sent();
                        return [2 /*return*/, result ? result[0] : null];
                }
            });
        });
    };
    Transaction.all = function (_a) {
        var session = _a.session, _b = _a.order_id, order_id = _b === void 0 ? null : _b, _c = _a.since_id, since_id = _c === void 0 ? null : _c, _d = _a.fields, fields = _d === void 0 ? null : _d, _e = _a.in_shop_currency, in_shop_currency = _e === void 0 ? null : _e, otherArgs = tslib_1.__rest(_a, ["session", "order_id", "since_id", "fields", "in_shop_currency"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, Transaction.baseFind({
                            session: session,
                            urlIds: { "order_id": order_id },
                            params: tslib_1.__assign({ "since_id": since_id, "fields": fields, "in_shop_currency": in_shop_currency }, otherArgs),
                        })];
                    case 1:
                        response = _f.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Transaction.count = function (_a) {
        var session = _a.session, _b = _a.order_id, order_id = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "order_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Transaction.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: { "order_id": order_id },
                            params: tslib_1.__assign({}, otherArgs),
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
    Transaction.API_VERSION = base_types_1.ApiVersion.April22;
    Transaction.NAME = 'transaction';
    Transaction.PLURAL_NAME = 'transactions';
    Transaction.HAS_ONE = {};
    Transaction.HAS_MANY = {};
    Transaction.PATHS = [
        { "http_method": "get", "operation": "count", "ids": ["order_id"], "path": "orders/<order_id>/transactions/count.json" },
        { "http_method": "get", "operation": "get", "ids": ["order_id"], "path": "orders/<order_id>/transactions.json" },
        { "http_method": "get", "operation": "get", "ids": ["order_id", "id"], "path": "orders/<order_id>/transactions/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": ["order_id"], "path": "orders/<order_id>/transactions.json" }
    ];
    return Transaction;
}(base_rest_resource_1.default));
exports.Transaction = Transaction;

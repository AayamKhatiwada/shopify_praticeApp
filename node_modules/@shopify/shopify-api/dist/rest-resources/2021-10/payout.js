"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payout = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var Payout = /** @class */ (function (_super) {
    tslib_1.__extends(Payout, _super);
    function Payout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Payout.find = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Payout.baseFind({
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
    Payout.all = function (_a) {
        var session = _a.session, _b = _a.since_id, since_id = _b === void 0 ? null : _b, _c = _a.last_id, last_id = _c === void 0 ? null : _c, _d = _a.date_min, date_min = _d === void 0 ? null : _d, _e = _a.date_max, date_max = _e === void 0 ? null : _e, _f = _a.date, date = _f === void 0 ? null : _f, _g = _a.status, status = _g === void 0 ? null : _g, otherArgs = tslib_1.__rest(_a, ["session", "since_id", "last_id", "date_min", "date_max", "date", "status"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_h) {
                switch (_h.label) {
                    case 0: return [4 /*yield*/, Payout.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "since_id": since_id, "last_id": last_id, "date_min": date_min, "date_max": date_max, "date": date, "status": status }, otherArgs),
                        })];
                    case 1:
                        response = _h.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Payout.API_VERSION = base_types_1.ApiVersion.October21;
    Payout.NAME = 'payout';
    Payout.PLURAL_NAME = 'payouts';
    Payout.HAS_ONE = {};
    Payout.HAS_MANY = {};
    Payout.PATHS = [
        { "http_method": "get", "operation": "get", "ids": [], "path": "shopify_payments/payouts.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "shopify_payments/payouts/<id>.json" }
    ];
    return Payout;
}(base_rest_resource_1.default));
exports.Payout = Payout;

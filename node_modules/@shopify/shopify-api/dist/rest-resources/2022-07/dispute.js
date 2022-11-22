"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dispute = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var Dispute = /** @class */ (function (_super) {
    tslib_1.__extends(Dispute, _super);
    function Dispute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dispute.find = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Dispute.baseFind({
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
    Dispute.all = function (_a) {
        var session = _a.session, _b = _a.since_id, since_id = _b === void 0 ? null : _b, _c = _a.last_id, last_id = _c === void 0 ? null : _c, _d = _a.status, status = _d === void 0 ? null : _d, _e = _a.initiated_at, initiated_at = _e === void 0 ? null : _e, otherArgs = tslib_1.__rest(_a, ["session", "since_id", "last_id", "status", "initiated_at"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, Dispute.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "since_id": since_id, "last_id": last_id, "status": status, "initiated_at": initiated_at }, otherArgs),
                        })];
                    case 1:
                        response = _f.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Dispute.API_VERSION = base_types_1.ApiVersion.July22;
    Dispute.NAME = 'dispute';
    Dispute.PLURAL_NAME = 'disputes';
    Dispute.HAS_ONE = {};
    Dispute.HAS_MANY = {};
    Dispute.PATHS = [
        { "http_method": "get", "operation": "get", "ids": [], "path": "shopify_payments/disputes.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "shopify_payments/disputes/<id>.json" }
    ];
    return Dispute;
}(base_rest_resource_1.default));
exports.Dispute = Dispute;

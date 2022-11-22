"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisputeEvidence = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var fulfillment_1 = require("./fulfillment");
var DisputeEvidence = /** @class */ (function (_super) {
    tslib_1.__extends(DisputeEvidence, _super);
    function DisputeEvidence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DisputeEvidence.find = function (_a) {
        var session = _a.session, dispute_id = _a.dispute_id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, DisputeEvidence.baseFind({
                            session: session,
                            urlIds: { "dispute_id": dispute_id },
                            params: {},
                        })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, result ? result[0] : null];
                }
            });
        });
    };
    DisputeEvidence.API_VERSION = base_types_1.ApiVersion.October22;
    DisputeEvidence.NAME = 'dispute_evidence';
    DisputeEvidence.PLURAL_NAME = 'dispute_evidences';
    DisputeEvidence.HAS_ONE = {};
    DisputeEvidence.HAS_MANY = {
        "fulfillments": fulfillment_1.Fulfillment
    };
    DisputeEvidence.PATHS = [
        { "http_method": "get", "operation": "get", "ids": ["dispute_id"], "path": "shopify_payments/disputes/<dispute_id>/dispute_evidences.json" },
        { "http_method": "put", "operation": "put", "ids": ["dispute_id"], "path": "shopify_payments/disputes/<dispute_id>/dispute_evidences.json" }
    ];
    DisputeEvidence.PRIMARY_KEY = "dispute_id";
    return DisputeEvidence;
}(base_rest_resource_1.default));
exports.DisputeEvidence = DisputeEvidence;

"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisputeFileUpload = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var DisputeFileUpload = /** @class */ (function (_super) {
    tslib_1.__extends(DisputeFileUpload, _super);
    function DisputeFileUpload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DisputeFileUpload.delete = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.dispute_id, dispute_id = _b === void 0 ? null : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, DisputeFileUpload.request({
                            http_method: "delete",
                            operation: "delete",
                            session: session,
                            urlIds: { "id": id, "dispute_id": dispute_id },
                            params: {},
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response ? response.body : null];
                }
            });
        });
    };
    DisputeFileUpload.API_VERSION = base_types_1.ApiVersion.July22;
    DisputeFileUpload.NAME = 'dispute_file_upload';
    DisputeFileUpload.PLURAL_NAME = 'dispute_file_uploads';
    DisputeFileUpload.HAS_ONE = {};
    DisputeFileUpload.HAS_MANY = {};
    DisputeFileUpload.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["dispute_id", "id"], "path": "shopify_payments/disputes/<dispute_id>/dispute_file_uploads/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": ["dispute_id"], "path": "shopify_payments/disputes/<dispute_id>/dispute_file_uploads.json" }
    ];
    return DisputeFileUpload;
}(base_rest_resource_1.default));
exports.DisputeFileUpload = DisputeFileUpload;

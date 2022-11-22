"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResourceFeedback = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var ProductResourceFeedback = /** @class */ (function (_super) {
    tslib_1.__extends(ProductResourceFeedback, _super);
    function ProductResourceFeedback() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductResourceFeedback.getJsonBodyName = function () {
        return "resource_feedback";
    };
    ProductResourceFeedback.all = function (_a) {
        var session = _a.session, _b = _a.product_id, product_id = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "product_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, ProductResourceFeedback.baseFind({
                            session: session,
                            urlIds: { "product_id": product_id },
                            params: tslib_1.__assign({}, otherArgs),
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    ProductResourceFeedback.API_VERSION = base_types_1.ApiVersion.April22;
    ProductResourceFeedback.NAME = 'product_resource_feedback';
    ProductResourceFeedback.PLURAL_NAME = 'product_resource_feedbacks';
    ProductResourceFeedback.HAS_ONE = {};
    ProductResourceFeedback.HAS_MANY = {};
    ProductResourceFeedback.PATHS = [
        { "http_method": "get", "operation": "get", "ids": ["product_id"], "path": "products/<product_id>/resource_feedback.json" },
        { "http_method": "post", "operation": "post", "ids": ["product_id"], "path": "products/<product_id>/resource_feedback.json" }
    ];
    return ProductResourceFeedback;
}(base_rest_resource_1.default));
exports.ProductResourceFeedback = ProductResourceFeedback;

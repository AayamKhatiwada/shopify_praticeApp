"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceFeedback = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var ResourceFeedback = /** @class */ (function (_super) {
    tslib_1.__extends(ResourceFeedback, _super);
    function ResourceFeedback() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResourceFeedback.all = function (_a) {
        var session = _a.session, otherArgs = tslib_1.__rest(_a, ["session"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ResourceFeedback.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({}, otherArgs),
                        })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    ResourceFeedback.API_VERSION = base_types_1.ApiVersion.October22;
    ResourceFeedback.NAME = 'resource_feedback';
    ResourceFeedback.PLURAL_NAME = 'resource_feedbacks';
    ResourceFeedback.HAS_ONE = {};
    ResourceFeedback.HAS_MANY = {};
    ResourceFeedback.PATHS = [
        { "http_method": "get", "operation": "get", "ids": [], "path": "resource_feedback.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "resource_feedback.json" }
    ];
    return ResourceFeedback;
}(base_rest_resource_1.default));
exports.ResourceFeedback = ResourceFeedback;

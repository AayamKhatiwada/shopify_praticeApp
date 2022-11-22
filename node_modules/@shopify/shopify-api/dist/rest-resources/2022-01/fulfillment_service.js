"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.FulfillmentService = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var FulfillmentService = /** @class */ (function (_super) {
    tslib_1.__extends(FulfillmentService, _super);
    function FulfillmentService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FulfillmentService.find = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, FulfillmentService.baseFind({
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
    FulfillmentService.delete = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, FulfillmentService.request({
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
    FulfillmentService.all = function (_a) {
        var session = _a.session, _b = _a.scope, scope = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "scope"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, FulfillmentService.baseFind({
                            session: session,
                            urlIds: {},
                            params: tslib_1.__assign({ "scope": scope }, otherArgs),
                        })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    FulfillmentService.API_VERSION = base_types_1.ApiVersion.January22;
    FulfillmentService.NAME = 'fulfillment_service';
    FulfillmentService.PLURAL_NAME = 'fulfillment_services';
    FulfillmentService.HAS_ONE = {};
    FulfillmentService.HAS_MANY = {};
    FulfillmentService.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "fulfillment_services/<id>.json" },
        { "http_method": "get", "operation": "get", "ids": [], "path": "fulfillment_services.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "fulfillment_services/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "fulfillment_services.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "fulfillment_services/<id>.json" }
    ];
    return FulfillmentService;
}(base_rest_resource_1.default));
exports.FulfillmentService = FulfillmentService;

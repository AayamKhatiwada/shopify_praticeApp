"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplePayCertificate = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var ApplePayCertificate = /** @class */ (function (_super) {
    tslib_1.__extends(ApplePayCertificate, _super);
    function ApplePayCertificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplePayCertificate.find = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ApplePayCertificate.baseFind({
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
    ApplePayCertificate.delete = function (_a) {
        var session = _a.session, id = _a.id;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ApplePayCertificate.request({
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
    ApplePayCertificate.csr = function (_a) {
        var session = _a.session, id = _a.id, otherArgs = tslib_1.__rest(_a, ["session", "id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ApplePayCertificate.request({
                            http_method: "get",
                            operation: "csr",
                            session: session,
                            urlIds: { "id": id },
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
    ApplePayCertificate.API_VERSION = base_types_1.ApiVersion.January22;
    ApplePayCertificate.NAME = 'apple_pay_certificate';
    ApplePayCertificate.PLURAL_NAME = 'apple_pay_certificates';
    ApplePayCertificate.HAS_ONE = {};
    ApplePayCertificate.HAS_MANY = {};
    ApplePayCertificate.PATHS = [
        { "http_method": "delete", "operation": "delete", "ids": ["id"], "path": "apple_pay_certificates/<id>.json" },
        { "http_method": "get", "operation": "csr", "ids": ["id"], "path": "apple_pay_certificates/<id>/csr.json" },
        { "http_method": "get", "operation": "get", "ids": ["id"], "path": "apple_pay_certificates/<id>.json" },
        { "http_method": "post", "operation": "post", "ids": [], "path": "apple_pay_certificates.json" },
        { "http_method": "put", "operation": "put", "ids": ["id"], "path": "apple_pay_certificates/<id>.json" }
    ];
    return ApplePayCertificate;
}(base_rest_resource_1.default));
exports.ApplePayCertificate = ApplePayCertificate;

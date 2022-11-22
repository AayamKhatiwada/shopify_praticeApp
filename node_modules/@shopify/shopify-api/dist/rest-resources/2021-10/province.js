"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Province = void 0;
var tslib_1 = require("tslib");
var base_rest_resource_1 = tslib_1.__importDefault(require("../../base-rest-resource"));
var base_types_1 = require("../../base-types");
var Province = /** @class */ (function (_super) {
    tslib_1.__extends(Province, _super);
    function Province() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Province.find = function (_a) {
        var session = _a.session, id = _a.id, _b = _a.country_id, country_id = _b === void 0 ? null : _b, _c = _a.fields, fields = _c === void 0 ? null : _c;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, Province.baseFind({
                            session: session,
                            urlIds: { "id": id, "country_id": country_id },
                            params: { "fields": fields },
                        })];
                    case 1:
                        result = _d.sent();
                        return [2 /*return*/, result ? result[0] : null];
                }
            });
        });
    };
    Province.all = function (_a) {
        var session = _a.session, _b = _a.country_id, country_id = _b === void 0 ? null : _b, _c = _a.since_id, since_id = _c === void 0 ? null : _c, _d = _a.fields, fields = _d === void 0 ? null : _d, otherArgs = tslib_1.__rest(_a, ["session", "country_id", "since_id", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, Province.baseFind({
                            session: session,
                            urlIds: { "country_id": country_id },
                            params: tslib_1.__assign({ "since_id": since_id, "fields": fields }, otherArgs),
                        })];
                    case 1:
                        response = _e.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Province.count = function (_a) {
        var session = _a.session, _b = _a.country_id, country_id = _b === void 0 ? null : _b, otherArgs = tslib_1.__rest(_a, ["session", "country_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, Province.request({
                            http_method: "get",
                            operation: "count",
                            session: session,
                            urlIds: { "country_id": country_id },
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
    Province.API_VERSION = base_types_1.ApiVersion.October21;
    Province.NAME = 'province';
    Province.PLURAL_NAME = 'provinces';
    Province.HAS_ONE = {};
    Province.HAS_MANY = {};
    Province.PATHS = [
        { "http_method": "get", "operation": "count", "ids": ["country_id"], "path": "countries/<country_id>/provinces/count.json" },
        { "http_method": "get", "operation": "get", "ids": ["country_id"], "path": "countries/<country_id>/provinces.json" },
        { "http_method": "get", "operation": "get", "ids": ["country_id", "id"], "path": "countries/<country_id>/provinces/<id>.json" },
        { "http_method": "put", "operation": "put", "ids": ["country_id", "id"], "path": "countries/<country_id>/provinces/<id>.json" }
    ];
    return Province;
}(base_rest_resource_1.default));
exports.Province = Province;

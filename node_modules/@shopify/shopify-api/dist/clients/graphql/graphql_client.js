"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphqlClient = void 0;
var tslib_1 = require("tslib");
var context_1 = require("../../context");
var base_types_1 = require("../../base-types");
var http_client_1 = require("../http_client/http_client");
var types_1 = require("../http_client/types");
var ShopifyErrors = tslib_1.__importStar(require("../../error"));
var GraphqlClient = /** @class */ (function () {
    function GraphqlClient(domain, accessToken) {
        this.domain = domain;
        this.accessToken = accessToken;
        this.baseApiPath = '/admin/api';
        if (!context_1.Context.IS_PRIVATE_APP && !accessToken) {
            throw new ShopifyErrors.MissingRequiredArgument('Missing access token when creating GraphQL client');
        }
        this.client = new http_client_1.HttpClient(this.domain);
    }
    GraphqlClient.prototype.query = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var accessTokenHeader, path, dataType, result;
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (params.data.length === 0) {
                            throw new ShopifyErrors.MissingRequiredArgument('Query missing.');
                        }
                        accessTokenHeader = this.getAccessTokenHeader();
                        params.extraHeaders = tslib_1.__assign((_a = {}, _a[accessTokenHeader.header] = accessTokenHeader.value, _a), params.extraHeaders);
                        path = "".concat(this.baseApiPath, "/").concat(context_1.Context.API_VERSION, "/graphql.json");
                        if (typeof params.data === 'object') {
                            dataType = types_1.DataType.JSON;
                        }
                        else {
                            dataType = types_1.DataType.GraphQL;
                        }
                        return [4 /*yield*/, this.client.post(tslib_1.__assign({ path: path, type: dataType }, params))];
                    case 1:
                        result = _b.sent();
                        if (result.body.errors) {
                            throw new ShopifyErrors.GraphqlQueryError({
                                message: 'GraphQL query returned errors',
                                response: result.body,
                            });
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    GraphqlClient.prototype.getAccessTokenHeader = function () {
        return {
            header: base_types_1.ShopifyHeader.AccessToken,
            value: context_1.Context.IS_PRIVATE_APP
                ? context_1.Context.API_SECRET_KEY
                : this.accessToken,
        };
    };
    return GraphqlClient;
}());
exports.GraphqlClient = GraphqlClient;

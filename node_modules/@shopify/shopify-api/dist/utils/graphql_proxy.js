"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var graphql_1 = require("../clients/graphql");
var ShopifyErrors = tslib_1.__importStar(require("../error"));
var load_current_session_1 = tslib_1.__importDefault(require("./load-current-session"));
function graphqlProxy(userReq, userRes) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var session, shopName, token, reqBodyString;
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, load_current_session_1.default)(userReq, userRes)];
                case 1:
                    session = _a.sent();
                    if (!session) {
                        throw new ShopifyErrors.SessionNotFound('Cannot proxy query. No session found.');
                    }
                    else if (!session.accessToken) {
                        throw new ShopifyErrors.InvalidSession('Cannot proxy query. Session not authenticated.');
                    }
                    shopName = session.shop;
                    token = session.accessToken;
                    reqBodyString = '';
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            userReq.on('data', function (chunk) {
                                reqBodyString += chunk;
                            });
                            userReq.on('end', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                var reqBodyObject, options, client, response, err_1;
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            try {
                                                reqBodyObject = JSON.parse(reqBodyString);
                                            }
                                            catch (err) {
                                                // we can just continue and attempt to pass the string
                                            }
                                            _a.label = 1;
                                        case 1:
                                            _a.trys.push([1, 3, , 4]);
                                            options = {
                                                data: reqBodyObject ? reqBodyObject : reqBodyString,
                                            };
                                            client = new graphql_1.GraphqlClient(shopName, token);
                                            return [4 /*yield*/, client.query(options)];
                                        case 2:
                                            response = _a.sent();
                                            return [2 /*return*/, resolve(response)];
                                        case 3:
                                            err_1 = _a.sent();
                                            return [2 /*return*/, reject(err_1)];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); });
                        })];
            }
        });
    });
}
exports.default = graphqlProxy;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gdprTopics = exports.buildQuery = exports.buildCheckQuery = exports.WebhooksRegistry = void 0;
var tslib_1 = require("tslib");
var crypto_1 = require("crypto");
var network_1 = require("@shopify/network");
var graphql_client_1 = require("../clients/graphql/graphql_client");
var base_types_1 = require("../base-types");
var utils_1 = tslib_1.__importDefault(require("../utils"));
var context_1 = require("../context");
var ShopifyErrors = tslib_1.__importStar(require("../error"));
var types_1 = require("./types");
function isSuccess(result, deliveryMethod, webhookId) {
    var endpoint;
    switch (deliveryMethod) {
        case types_1.DeliveryMethod.Http:
            endpoint = 'webhookSubscription';
            break;
        case types_1.DeliveryMethod.EventBridge:
            endpoint = 'eventBridgeWebhookSubscription';
            break;
        case types_1.DeliveryMethod.PubSub:
            endpoint = 'pubSubWebhookSubscription';
            break;
        default:
            return false;
    }
    endpoint += webhookId ? 'Update' : 'Create';
    return Boolean(result.data &&
        result.data[endpoint] &&
        result.data[endpoint].webhookSubscription);
}
function validateDeliveryMethod(_deliveryMethod) {
    return true;
}
function buildCheckQuery(topic) {
    return "{\n    webhookSubscriptions(first: 1, topics: ".concat(topic, ") {\n      edges {\n        node {\n          id\n          endpoint {\n            __typename\n            ... on WebhookHttpEndpoint {\n              callbackUrl\n            }\n            ... on WebhookEventBridgeEndpoint {\n              arn\n            }\n            ... on WebhookPubSubEndpoint {\n              pubSubProject\n              pubSubTopic\n            }\n          }\n        }\n      }\n    }\n  }");
}
exports.buildCheckQuery = buildCheckQuery;
function buildQuery(topic, address, deliveryMethod, webhookId) {
    var _a;
    if (deliveryMethod === void 0) { deliveryMethod = types_1.DeliveryMethod.Http; }
    validateDeliveryMethod(deliveryMethod);
    var identifier;
    if (webhookId) {
        identifier = "id: \"".concat(webhookId, "\"");
    }
    else {
        identifier = "topic: ".concat(topic);
    }
    var mutationName;
    var webhookSubscriptionArgs;
    var pubSubProject;
    var pubSubTopic;
    switch (deliveryMethod) {
        case types_1.DeliveryMethod.Http:
            mutationName = webhookId
                ? 'webhookSubscriptionUpdate'
                : 'webhookSubscriptionCreate';
            webhookSubscriptionArgs = "{callbackUrl: \"".concat(address, "\"}");
            break;
        case types_1.DeliveryMethod.EventBridge:
            mutationName = webhookId
                ? 'eventBridgeWebhookSubscriptionUpdate'
                : 'eventBridgeWebhookSubscriptionCreate';
            webhookSubscriptionArgs = "{arn: \"".concat(address, "\"}");
            break;
        case types_1.DeliveryMethod.PubSub:
            mutationName = webhookId
                ? 'pubSubWebhookSubscriptionUpdate'
                : 'pubSubWebhookSubscriptionCreate';
            _a = tslib_1.__read(address
                .replace(/^pubsub:\/\//, '')
                .split(':'), 2), pubSubProject = _a[0], pubSubTopic = _a[1];
            webhookSubscriptionArgs = "{pubSubProject: \"".concat(pubSubProject, "\",\n                                  pubSubTopic: \"").concat(pubSubTopic, "\"}");
            break;
    }
    return "\n    mutation webhookSubscription {\n      ".concat(mutationName, "(").concat(identifier, ", webhookSubscription: ").concat(webhookSubscriptionArgs, ") {\n        userErrors {\n          field\n          message\n        }\n        webhookSubscription {\n          id\n        }\n      }\n    }\n  ");
}
exports.buildQuery = buildQuery;
var gdprTopics = [
    'CUSTOMERS_DATA_REQUEST',
    'CUSTOMERS_REDACT',
    'SHOP_REDACT',
];
exports.gdprTopics = gdprTopics;
var WebhooksRegistry = {
    webhookRegistry: {},
    addHandler: function (topic, _a) {
        var path = _a.path, webhookHandler = _a.webhookHandler;
        WebhooksRegistry.webhookRegistry[topic] = { path: path, webhookHandler: webhookHandler };
    },
    addHandlers: function (handlers) {
        for (var topic in handlers) {
            if ({}.hasOwnProperty.call(handlers, topic)) {
                WebhooksRegistry.addHandler(topic, handlers[topic]);
            }
        }
    },
    getHandler: function (topic) {
        var _a;
        return (_a = WebhooksRegistry.webhookRegistry[topic]) !== null && _a !== void 0 ? _a : null;
    },
    getTopics: function () {
        return Object.keys(WebhooksRegistry.webhookRegistry);
    },
    register: function (_a) {
        var path = _a.path, topic = _a.topic, accessToken = _a.accessToken, shop = _a.shop, _b = _a.deliveryMethod, deliveryMethod = _b === void 0 ? types_1.DeliveryMethod.Http : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var registerReturn, client, address, checkResult, error_1, result, webhookId, mustRegister, node, endpointAddress, result;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        registerReturn = {};
                        if (gdprTopics.includes(topic)) {
                            registerReturn[topic] = {
                                success: false,
                                result: {
                                    errors: [
                                        {
                                            message: "GDPR topic '".concat(topic, "' cannot be registered here. Please set the appropriate webhook endpoint in the 'GDPR mandatory webhooks' section of 'App setup' in the Partners Dashboard"),
                                        },
                                    ],
                                },
                            };
                            return [2 /*return*/, registerReturn];
                        }
                        validateDeliveryMethod(deliveryMethod);
                        client = new graphql_client_1.GraphqlClient(shop, accessToken);
                        address = deliveryMethod === types_1.DeliveryMethod.Http
                            ? "".concat(context_1.Context.HOST_SCHEME, "://").concat(context_1.Context.HOST_NAME).concat(path)
                            : path;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, client.query({
                                data: buildCheckQuery(topic),
                            })];
                    case 2:
                        checkResult = _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _c.sent();
                        result = error_1 instanceof ShopifyErrors.GraphqlQueryError ? error_1.response : {};
                        registerReturn[topic] = { success: false, result: result };
                        return [2 /*return*/, registerReturn];
                    case 4:
                        mustRegister = true;
                        if (checkResult.body.data.webhookSubscriptions.edges.length) {
                            node = checkResult.body.data.webhookSubscriptions.edges[0].node;
                            endpointAddress = '';
                            if (node.endpoint.__typename === 'WebhookHttpEndpoint') {
                                endpointAddress = node.endpoint.callbackUrl;
                            }
                            else if (node.endpoint.__typename === 'WebhookEventBridgeEndpoint') {
                                endpointAddress = node.endpoint.arn;
                            }
                            webhookId = node.id;
                            if (endpointAddress === address) {
                                mustRegister = false;
                            }
                        }
                        if (!mustRegister) return [3 /*break*/, 6];
                        return [4 /*yield*/, client.query({
                                data: buildQuery(topic, address, deliveryMethod, webhookId),
                            })];
                    case 5:
                        result = _c.sent();
                        registerReturn[topic] = {
                            success: isSuccess(result.body, deliveryMethod, webhookId),
                            result: result.body,
                        };
                        return [3 /*break*/, 7];
                    case 6:
                        registerReturn[topic] = {
                            success: true,
                            result: {},
                        };
                        _c.label = 7;
                    case 7: return [2 /*return*/, registerReturn];
                }
            });
        });
    },
    registerAll: function (_a) {
        var accessToken = _a.accessToken, shop = _a.shop, _b = _a.deliveryMethod, deliveryMethod = _b === void 0 ? types_1.DeliveryMethod.Http : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var registerReturn, topics, topics_1, topics_1_1, topic, handler, path, webhook, returnedRegister, e_1_1;
            var e_1, _c;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        registerReturn = {};
                        topics = WebhooksRegistry.getTopics();
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        topics_1 = tslib_1.__values(topics), topics_1_1 = topics_1.next();
                        _d.label = 2;
                    case 2:
                        if (!!topics_1_1.done) return [3 /*break*/, 5];
                        topic = topics_1_1.value;
                        handler = WebhooksRegistry.getHandler(topic);
                        if (!handler) return [3 /*break*/, 4];
                        path = handler.path;
                        webhook = {
                            path: path,
                            topic: topic,
                            accessToken: accessToken,
                            shop: shop,
                            deliveryMethod: deliveryMethod,
                        };
                        return [4 /*yield*/, WebhooksRegistry.register(webhook)];
                    case 3:
                        returnedRegister = _d.sent();
                        registerReturn = tslib_1.__assign(tslib_1.__assign({}, registerReturn), returnedRegister);
                        _d.label = 4;
                    case 4:
                        topics_1_1 = topics_1.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (topics_1_1 && !topics_1_1.done && (_c = topics_1.return)) _c.call(topics_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, registerReturn];
                }
            });
        });
    },
    process: function (request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var reqBody, promise;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                reqBody = '';
                promise = new Promise(function (resolve, reject) {
                    request.on('data', function (chunk) {
                        reqBody += chunk;
                    });
                    request.on('end', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        var hmac, topic, domain, missingHeaders, statusCode, responseError, headers, generatedHash, graphqlTopic, webhookEntry, error_2;
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!reqBody.length) {
                                        response.writeHead(network_1.StatusCode.BadRequest);
                                        response.end();
                                        return [2 /*return*/, reject(new ShopifyErrors.InvalidWebhookError('No body was received when processing webhook'))];
                                    }
                                    Object.entries(request.headers).map(function (_a) {
                                        var _b = tslib_1.__read(_a, 2), header = _b[0], value = _b[1];
                                        switch (header.toLowerCase()) {
                                            case base_types_1.ShopifyHeader.Hmac.toLowerCase():
                                                hmac = value;
                                                break;
                                            case base_types_1.ShopifyHeader.Topic.toLowerCase():
                                                topic = value;
                                                break;
                                            case base_types_1.ShopifyHeader.Domain.toLowerCase():
                                                domain = value;
                                                break;
                                        }
                                    });
                                    missingHeaders = [];
                                    if (!hmac) {
                                        missingHeaders.push(base_types_1.ShopifyHeader.Hmac);
                                    }
                                    if (!topic) {
                                        missingHeaders.push(base_types_1.ShopifyHeader.Topic);
                                    }
                                    if (!domain) {
                                        missingHeaders.push(base_types_1.ShopifyHeader.Domain);
                                    }
                                    if (missingHeaders.length) {
                                        response.writeHead(network_1.StatusCode.BadRequest);
                                        response.end();
                                        return [2 /*return*/, reject(new ShopifyErrors.InvalidWebhookError("Missing one or more of the required HTTP headers to process webhooks: [".concat(missingHeaders.join(', '), "]")))];
                                    }
                                    headers = {};
                                    generatedHash = (0, crypto_1.createHmac)('sha256', context_1.Context.API_SECRET_KEY)
                                        .update(reqBody, 'utf8')
                                        .digest('base64');
                                    if (!utils_1.default.safeCompare(generatedHash, hmac)) return [3 /*break*/, 7];
                                    graphqlTopic = topic
                                        .toUpperCase()
                                        .replace(/\//g, '_');
                                    webhookEntry = WebhooksRegistry.getHandler(graphqlTopic);
                                    if (!webhookEntry) return [3 /*break*/, 5];
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, webhookEntry.webhookHandler(graphqlTopic, domain, reqBody)];
                                case 2:
                                    _a.sent();
                                    statusCode = network_1.StatusCode.Ok;
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_2 = _a.sent();
                                    statusCode = network_1.StatusCode.InternalServerError;
                                    responseError = error_2;
                                    return [3 /*break*/, 4];
                                case 4: return [3 /*break*/, 6];
                                case 5:
                                    statusCode = network_1.StatusCode.NotFound;
                                    responseError = new ShopifyErrors.InvalidWebhookError("No webhook is registered for topic ".concat(topic));
                                    _a.label = 6;
                                case 6: return [3 /*break*/, 8];
                                case 7:
                                    statusCode = network_1.StatusCode.Unauthorized;
                                    responseError = new ShopifyErrors.InvalidWebhookError("Could not validate request for topic ".concat(topic));
                                    _a.label = 8;
                                case 8:
                                    response.writeHead(statusCode, headers);
                                    response.end();
                                    if (responseError) {
                                        return [2 /*return*/, reject(responseError)];
                                    }
                                    else {
                                        return [2 /*return*/, resolve()];
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                });
                return [2 /*return*/, promise];
            });
        });
    },
    isWebhookPath: function (path) {
        for (var key in WebhooksRegistry.webhookRegistry) {
            if (WebhooksRegistry.webhookRegistry[key].path === path) {
                return true;
            }
        }
        return false;
    },
};
exports.WebhooksRegistry = WebhooksRegistry;

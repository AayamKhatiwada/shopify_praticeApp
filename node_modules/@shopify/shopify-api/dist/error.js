"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingError = exports.InvalidRequestError = exports.UnsupportedClientType = exports.MissingRequiredArgument = exports.SessionStorageError = exports.InvalidWebhookError = exports.InvalidSession = exports.CookieNotFound = exports.SessionNotFound = exports.InvalidOAuthError = exports.GraphqlQueryError = exports.RestResourceError = exports.HttpThrottlingError = exports.HttpInternalError = exports.HttpRetriableError = exports.HttpResponseError = exports.HttpMaxRetriesError = exports.HttpRequestError = exports.PrivateAppError = exports.UninitializedContextError = exports.SafeCompareError = exports.MissingJwtTokenError = exports.InvalidJwtError = exports.InvalidHostError = exports.InvalidShopError = exports.InvalidHmacError = exports.ShopifyError = void 0;
var tslib_1 = require("tslib");
var ShopifyError = /** @class */ (function (_super) {
    tslib_1.__extends(ShopifyError, _super);
    function ShopifyError() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _newTarget = this.constructor;
        var _this = _super.apply(this, tslib_1.__spreadArray([], tslib_1.__read(args), false)) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return ShopifyError;
}(Error));
exports.ShopifyError = ShopifyError;
var InvalidHmacError = /** @class */ (function (_super) {
    tslib_1.__extends(InvalidHmacError, _super);
    function InvalidHmacError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InvalidHmacError;
}(ShopifyError));
exports.InvalidHmacError = InvalidHmacError;
var InvalidShopError = /** @class */ (function (_super) {
    tslib_1.__extends(InvalidShopError, _super);
    function InvalidShopError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InvalidShopError;
}(ShopifyError));
exports.InvalidShopError = InvalidShopError;
var InvalidHostError = /** @class */ (function (_super) {
    tslib_1.__extends(InvalidHostError, _super);
    function InvalidHostError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InvalidHostError;
}(ShopifyError));
exports.InvalidHostError = InvalidHostError;
var InvalidJwtError = /** @class */ (function (_super) {
    tslib_1.__extends(InvalidJwtError, _super);
    function InvalidJwtError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InvalidJwtError;
}(ShopifyError));
exports.InvalidJwtError = InvalidJwtError;
var MissingJwtTokenError = /** @class */ (function (_super) {
    tslib_1.__extends(MissingJwtTokenError, _super);
    function MissingJwtTokenError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MissingJwtTokenError;
}(ShopifyError));
exports.MissingJwtTokenError = MissingJwtTokenError;
var SafeCompareError = /** @class */ (function (_super) {
    tslib_1.__extends(SafeCompareError, _super);
    function SafeCompareError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SafeCompareError;
}(ShopifyError));
exports.SafeCompareError = SafeCompareError;
var UninitializedContextError = /** @class */ (function (_super) {
    tslib_1.__extends(UninitializedContextError, _super);
    function UninitializedContextError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UninitializedContextError;
}(ShopifyError));
exports.UninitializedContextError = UninitializedContextError;
var PrivateAppError = /** @class */ (function (_super) {
    tslib_1.__extends(PrivateAppError, _super);
    function PrivateAppError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PrivateAppError;
}(ShopifyError));
exports.PrivateAppError = PrivateAppError;
var HttpRequestError = /** @class */ (function (_super) {
    tslib_1.__extends(HttpRequestError, _super);
    function HttpRequestError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HttpRequestError;
}(ShopifyError));
exports.HttpRequestError = HttpRequestError;
var HttpMaxRetriesError = /** @class */ (function (_super) {
    tslib_1.__extends(HttpMaxRetriesError, _super);
    function HttpMaxRetriesError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HttpMaxRetriesError;
}(ShopifyError));
exports.HttpMaxRetriesError = HttpMaxRetriesError;
var HttpResponseError = /** @class */ (function (_super) {
    tslib_1.__extends(HttpResponseError, _super);
    function HttpResponseError(_a) {
        var message = _a.message, code = _a.code, statusText = _a.statusText, body = _a.body, headers = _a.headers;
        var _this = _super.call(this, message) || this;
        _this.response = {
            code: code,
            statusText: statusText,
            body: body,
            headers: headers,
        };
        return _this;
    }
    return HttpResponseError;
}(ShopifyError));
exports.HttpResponseError = HttpResponseError;
var HttpRetriableError = /** @class */ (function (_super) {
    tslib_1.__extends(HttpRetriableError, _super);
    function HttpRetriableError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HttpRetriableError;
}(HttpResponseError));
exports.HttpRetriableError = HttpRetriableError;
var HttpInternalError = /** @class */ (function (_super) {
    tslib_1.__extends(HttpInternalError, _super);
    function HttpInternalError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HttpInternalError;
}(HttpRetriableError));
exports.HttpInternalError = HttpInternalError;
var HttpThrottlingError = /** @class */ (function (_super) {
    tslib_1.__extends(HttpThrottlingError, _super);
    function HttpThrottlingError(_a) {
        var _this = this;
        var retryAfter = _a.retryAfter, params = tslib_1.__rest(_a, ["retryAfter"]);
        _this = _super.call(this, params) || this;
        _this.response.retryAfter = retryAfter;
        return _this;
    }
    return HttpThrottlingError;
}(HttpRetriableError));
exports.HttpThrottlingError = HttpThrottlingError;
var RestResourceError = /** @class */ (function (_super) {
    tslib_1.__extends(RestResourceError, _super);
    function RestResourceError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RestResourceError;
}(ShopifyError));
exports.RestResourceError = RestResourceError;
var GraphqlQueryError = /** @class */ (function (_super) {
    tslib_1.__extends(GraphqlQueryError, _super);
    function GraphqlQueryError(_a) {
        var message = _a.message, response = _a.response;
        var _this = _super.call(this, message) || this;
        _this.response = response;
        return _this;
    }
    return GraphqlQueryError;
}(ShopifyError));
exports.GraphqlQueryError = GraphqlQueryError;
var InvalidOAuthError = /** @class */ (function (_super) {
    tslib_1.__extends(InvalidOAuthError, _super);
    function InvalidOAuthError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InvalidOAuthError;
}(ShopifyError));
exports.InvalidOAuthError = InvalidOAuthError;
var SessionNotFound = /** @class */ (function (_super) {
    tslib_1.__extends(SessionNotFound, _super);
    function SessionNotFound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SessionNotFound;
}(ShopifyError));
exports.SessionNotFound = SessionNotFound;
var CookieNotFound = /** @class */ (function (_super) {
    tslib_1.__extends(CookieNotFound, _super);
    function CookieNotFound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CookieNotFound;
}(ShopifyError));
exports.CookieNotFound = CookieNotFound;
var InvalidSession = /** @class */ (function (_super) {
    tslib_1.__extends(InvalidSession, _super);
    function InvalidSession() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InvalidSession;
}(ShopifyError));
exports.InvalidSession = InvalidSession;
var InvalidWebhookError = /** @class */ (function (_super) {
    tslib_1.__extends(InvalidWebhookError, _super);
    function InvalidWebhookError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InvalidWebhookError;
}(ShopifyError));
exports.InvalidWebhookError = InvalidWebhookError;
var SessionStorageError = /** @class */ (function (_super) {
    tslib_1.__extends(SessionStorageError, _super);
    function SessionStorageError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SessionStorageError;
}(ShopifyError));
exports.SessionStorageError = SessionStorageError;
var MissingRequiredArgument = /** @class */ (function (_super) {
    tslib_1.__extends(MissingRequiredArgument, _super);
    function MissingRequiredArgument() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MissingRequiredArgument;
}(ShopifyError));
exports.MissingRequiredArgument = MissingRequiredArgument;
var UnsupportedClientType = /** @class */ (function (_super) {
    tslib_1.__extends(UnsupportedClientType, _super);
    function UnsupportedClientType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UnsupportedClientType;
}(ShopifyError));
exports.UnsupportedClientType = UnsupportedClientType;
var InvalidRequestError = /** @class */ (function (_super) {
    tslib_1.__extends(InvalidRequestError, _super);
    function InvalidRequestError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InvalidRequestError;
}(ShopifyError));
exports.InvalidRequestError = InvalidRequestError;
var BillingError = /** @class */ (function (_super) {
    tslib_1.__extends(BillingError, _super);
    function BillingError(_a) {
        var message = _a.message, errorData = _a.errorData;
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.errorData = errorData;
        return _this;
    }
    return BillingError;
}(ShopifyError));
exports.BillingError = BillingError;

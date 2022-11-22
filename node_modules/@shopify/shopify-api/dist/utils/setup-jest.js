"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jest_fetch_mock_1 = tslib_1.__importDefault(require("jest-fetch-mock"));
var context_1 = require("../context");
var base_types_1 = require("../base-types");
var session_1 = require("../auth/session");
jest_fetch_mock_1.default.enableMocks();
var currentCall = 0;
beforeEach(function () {
    // We want to reset the Context object on every run so that tests start with a consistent state
    context_1.Context.initialize({
        API_KEY: 'test_key',
        API_SECRET_KEY: 'test_secret_key',
        SCOPES: ['test_scope'],
        HOST_NAME: 'test_host_name',
        HOST_SCHEME: 'https',
        API_VERSION: base_types_1.ApiVersion.Unstable,
        IS_EMBEDDED_APP: false,
        IS_PRIVATE_APP: false,
        SESSION_STORAGE: new session_1.MemorySessionStorage(),
        CUSTOM_SHOP_DOMAINS: undefined,
        BILLING: undefined,
    });
    jest_fetch_mock_1.default.mockReset();
    currentCall = 0;
});
expect.extend({
    /**
     * Checks if two dates in the form of numbers are within seconds of each other
     *
     * @param received First date
     * @param compareDate Second date
     * @param seconds The number of seconds the first and second date should be within
     */
    toBeWithinSecondsOf: function (received, compareDate, seconds) {
        if (received &&
            compareDate &&
            Math.abs(received - compareDate) <= seconds * 1000) {
            return {
                message: function () {
                    return "expected ".concat(received, " not to be within ").concat(seconds, " seconds of ").concat(compareDate);
                },
                pass: true,
            };
        }
        else {
            return {
                message: function () {
                    return "expected ".concat(received, " to be within ").concat(seconds, " seconds of ").concat(compareDate);
                },
                pass: false,
            };
        }
    },
    toMatchMadeHttpRequest: function (_a) {
        var method = _a.method, domain = _a.domain, path = _a.path, _b = _a.query, query = _b === void 0 ? '' : _b, _c = _a.headers, headers = _c === void 0 ? {} : _c, _d = _a.data, data = _d === void 0 ? null : _d, _e = _a.tries, tries = _e === void 0 ? 1 : _e;
        var searchUrl = new URL("https://".concat(domain).concat(path).concat(query ? "?".concat(query.replace(/\+/g, '%20')) : ''));
        // We compare the sorted query items, so we can expect arguments in a different order
        var searchQueryItems = Array.from(searchUrl.searchParams.entries()).sort();
        var cleanSearchUrl = searchUrl.toString().split('?')[0];
        var bodyObject = data && typeof data !== 'string';
        var maxCall = currentCall + tries;
        for (var i = currentCall; i < maxCall; i++) {
            currentCall++;
            var mockCall = jest_fetch_mock_1.default.mock.calls[i];
            expect(mockCall).not.toBeUndefined();
            var requestUrl = new URL(mockCall[0]);
            var requestQueryItems = Array.from(requestUrl.searchParams.entries()).sort();
            var cleanRequestUrl = requestUrl.toString().split('?')[0];
            if (bodyObject && mockCall[1]) {
                mockCall[1].body = JSON.parse(mockCall[1].body);
            }
            expect(cleanRequestUrl).toEqual(cleanSearchUrl);
            expect(requestQueryItems).toEqual(searchQueryItems);
            expect(mockCall[1]).toMatchObject({ method: method, headers: headers, body: data });
        }
        return {
            message: function () { return "expected to have seen the right HTTP requests"; },
            pass: true,
        };
    },
});

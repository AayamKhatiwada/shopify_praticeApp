"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var querystring_1 = tslib_1.__importDefault(require("querystring"));
var ProcessedQuery = /** @class */ (function () {
    function ProcessedQuery() {
        this.processedQuery = {};
    }
    ProcessedQuery.stringify = function (keyValuePairs) {
        if (!keyValuePairs || Object.keys(keyValuePairs).length === 0)
            return '';
        return new ProcessedQuery().putAll(keyValuePairs).stringify();
    };
    ProcessedQuery.prototype.putAll = function (keyValuePairs) {
        var _this = this;
        Object.entries(keyValuePairs).forEach(function (_a) {
            var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
            return _this.put(key, value);
        });
        return this;
    };
    ProcessedQuery.prototype.put = function (key, value) {
        if (Array.isArray(value)) {
            this.putArray(key, value);
        }
        else if (value.constructor === Object) {
            this.putObject(key, value);
        }
        else {
            this.putSimple(key, value);
        }
    };
    ProcessedQuery.prototype.putArray = function (key, value) {
        this.processedQuery["".concat(key, "[]")] = value;
    };
    ProcessedQuery.prototype.putObject = function (key, value) {
        var _this = this;
        Object.entries(value).forEach(function (_a) {
            var _b = tslib_1.__read(_a, 2), entry = _b[0], entryValue = _b[1];
            _this.processedQuery["".concat(key, "[").concat(entry, "]")] = entryValue;
        });
    };
    ProcessedQuery.prototype.putSimple = function (key, value) {
        this.processedQuery[key] = value;
    };
    ProcessedQuery.prototype.stringify = function () {
        return "?".concat(querystring_1.default.stringify(this.processedQuery));
    };
    return ProcessedQuery;
}());
exports.default = ProcessedQuery;

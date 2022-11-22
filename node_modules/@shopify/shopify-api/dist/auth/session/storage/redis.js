"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisSessionStorage = void 0;
var tslib_1 = require("tslib");
var redis_1 = require("redis");
var session_utils_1 = require("../session-utils");
var shop_validator_1 = require("../../../utils/shop-validator");
var defaultRedisSessionStorageOptions = {
    sessionKeyPrefix: 'shopify_sessions',
};
var RedisSessionStorage = /** @class */ (function () {
    function RedisSessionStorage(dbUrl, opts) {
        if (opts === void 0) { opts = {}; }
        this.dbUrl = dbUrl;
        if (typeof this.dbUrl === 'string') {
            this.dbUrl = new URL(this.dbUrl);
        }
        this.options = tslib_1.__assign(tslib_1.__assign({}, defaultRedisSessionStorageOptions), opts);
        this.ready = this.init();
    }
    RedisSessionStorage.withCredentials = function (host, db, username, password, opts) {
        return new RedisSessionStorage(new URL("redis://".concat(encodeURIComponent(username), ":").concat(encodeURIComponent(password), "@").concat(host, "/").concat(db)), opts);
    };
    RedisSessionStorage.prototype.storeSession = function (session) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.client.set(this.fullKey(session.id), JSON.stringify((0, session_utils_1.sessionEntries)(session)))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    RedisSessionStorage.prototype.loadSession = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var rawResult;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.client.get(this.fullKey(id))];
                    case 2:
                        rawResult = _a.sent();
                        if (!rawResult)
                            return [2 /*return*/, undefined];
                        rawResult = JSON.parse(rawResult);
                        return [2 /*return*/, (0, session_utils_1.sessionFromEntries)(rawResult)];
                }
            });
        });
    };
    RedisSessionStorage.prototype.deleteSession = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.client.del(this.fullKey(id))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    RedisSessionStorage.prototype.deleteSessions = function (ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.client.del(ids.map(function (id) { return _this.fullKey(id); }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    RedisSessionStorage.prototype.findSessionsByShop = function (shop) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var cleanShop, keys, results, keys_1, keys_1_1, key, rawResult, session, e_1_1;
            var e_1, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _b.sent();
                        cleanShop = (0, shop_validator_1.sanitizeShop)(shop, true);
                        return [4 /*yield*/, this.client.keys('*')];
                    case 2:
                        keys = _b.sent();
                        results = [];
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 8, 9, 10]);
                        keys_1 = tslib_1.__values(keys), keys_1_1 = keys_1.next();
                        _b.label = 4;
                    case 4:
                        if (!!keys_1_1.done) return [3 /*break*/, 7];
                        key = keys_1_1.value;
                        return [4 /*yield*/, this.client.get(key)];
                    case 5:
                        rawResult = _b.sent();
                        if (!rawResult)
                            return [3 /*break*/, 6];
                        session = (0, session_utils_1.sessionFromEntries)(JSON.parse(rawResult));
                        if (session.shop === cleanShop)
                            results.push(session);
                        _b.label = 6;
                    case 6:
                        keys_1_1 = keys_1.next();
                        return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/, results];
                }
            });
        });
    };
    RedisSessionStorage.prototype.disconnect = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.quit()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RedisSessionStorage.prototype.fullKey = function (name) {
        return "".concat(this.options.sessionKeyPrefix, "_").concat(name);
    };
    RedisSessionStorage.prototype.init = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.client = (0, redis_1.createClient)(tslib_1.__assign(tslib_1.__assign({}, this.options), { url: this.dbUrl.toString() }));
                        if (this.options.onError) {
                            this.client.on('error', this.options.onError);
                        }
                        return [4 /*yield*/, this.client.connect()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return RedisSessionStorage;
}());
exports.RedisSessionStorage = RedisSessionStorage;

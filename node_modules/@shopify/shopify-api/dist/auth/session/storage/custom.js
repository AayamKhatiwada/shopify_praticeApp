"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSessionStorage = void 0;
var tslib_1 = require("tslib");
var session_1 = require("../session");
var ShopifyErrors = tslib_1.__importStar(require("../../../error"));
var shop_validator_1 = require("../../../utils/shop-validator");
var CustomSessionStorage = /** @class */ (function () {
    function CustomSessionStorage(storeCallback, loadCallback, deleteCallback, deleteSessionsCallback, findSessionsByShopCallback) {
        this.storeCallback = storeCallback;
        this.loadCallback = loadCallback;
        this.deleteCallback = deleteCallback;
        this.deleteSessionsCallback = deleteSessionsCallback;
        this.findSessionsByShopCallback = findSessionsByShopCallback;
        this.storeCallback = storeCallback;
        this.loadCallback = loadCallback;
        this.deleteCallback = deleteCallback;
        this.deleteSessionsCallback = deleteSessionsCallback;
        this.findSessionsByShopCallback = findSessionsByShopCallback;
    }
    CustomSessionStorage.prototype.storeSession = function (session) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.storeCallback(session)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        throw new ShopifyErrors.SessionStorageError("CustomSessionStorage failed to store a session. Error Details: ".concat(error_1));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomSessionStorage.prototype.loadSession = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result, error_2, session;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.loadCallback(id)];
                    case 1:
                        result = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        throw new ShopifyErrors.SessionStorageError("CustomSessionStorage failed to load a session. Error Details: ".concat(error_2));
                    case 3:
                        if (result) {
                            if (result instanceof session_1.Session) {
                                if (result.expires && typeof result.expires === 'string') {
                                    result.expires = new Date(result.expires);
                                }
                                return [2 /*return*/, result];
                            }
                            else if (result instanceof Object && 'id' in result) {
                                session = new session_1.Session(result.id, result.shop, result.state, result.isOnline);
                                session = tslib_1.__assign(tslib_1.__assign({}, session), result);
                                if (session.expires && typeof session.expires === 'string') {
                                    session.expires = new Date(session.expires);
                                }
                                Object.setPrototypeOf(session, session_1.Session.prototype);
                                return [2 /*return*/, session];
                            }
                            else {
                                throw new ShopifyErrors.SessionStorageError("Expected return to be instanceof Session, but received instanceof ".concat(result.constructor.name, "."));
                            }
                        }
                        else {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomSessionStorage.prototype.deleteSession = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.deleteCallback(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_3 = _a.sent();
                        throw new ShopifyErrors.SessionStorageError("CustomSessionStorage failed to delete a session. Error Details: ".concat(error_3));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomSessionStorage.prototype.deleteSessions = function (ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.deleteSessionsCallback) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.deleteSessionsCallback(ids)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_4 = _a.sent();
                        throw new ShopifyErrors.SessionStorageError("CustomSessionStorage failed to delete array of sessions. Error Details: ".concat(error_4));
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        console.warn("CustomSessionStorage failed to delete array of sessions. Error Details: deleteSessionsCallback not defined.");
                        _a.label = 6;
                    case 6: return [2 /*return*/, false];
                }
            });
        });
    };
    CustomSessionStorage.prototype.findSessionsByShop = function (shop) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var cleanShop, sessions, error_5;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cleanShop = (0, shop_validator_1.sanitizeShop)(shop, true);
                        sessions = [];
                        if (!this.findSessionsByShopCallback) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.findSessionsByShopCallback(cleanShop)];
                    case 2:
                        sessions = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_5 = _a.sent();
                        throw new ShopifyErrors.SessionStorageError("CustomSessionStorage failed to find sessions by shop. Error Details: ".concat(error_5));
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        console.warn("CustomSessionStorage failed to find sessions by shop. Error Details: findSessionsByShopCallback not defined.");
                        _a.label = 6;
                    case 6: return [2 /*return*/, sessions];
                }
            });
        });
    };
    return CustomSessionStorage;
}());
exports.CustomSessionStorage = CustomSessionStorage;

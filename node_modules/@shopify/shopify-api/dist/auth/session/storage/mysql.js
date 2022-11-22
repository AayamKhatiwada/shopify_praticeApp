"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLSessionStorage = void 0;
var tslib_1 = require("tslib");
var promise_1 = tslib_1.__importDefault(require("mysql2/promise"));
var session_utils_1 = require("../session-utils");
var shop_validator_1 = require("../../../utils/shop-validator");
var defaultMySQLSessionStorageOptions = {
    sessionTableName: 'shopify_sessions',
};
var MySQLSessionStorage = /** @class */ (function () {
    function MySQLSessionStorage(dbUrl, opts) {
        if (opts === void 0) { opts = {}; }
        this.dbUrl = dbUrl;
        if (typeof this.dbUrl === 'string') {
            this.dbUrl = new URL(this.dbUrl);
        }
        this.options = tslib_1.__assign(tslib_1.__assign({}, defaultMySQLSessionStorageOptions), opts);
        this.ready = this.init();
    }
    MySQLSessionStorage.withCredentials = function (host, dbName, username, password, opts) {
        return new MySQLSessionStorage(new URL("mysql://".concat(encodeURIComponent(username), ":").concat(encodeURIComponent(password), "@").concat(host, "/").concat(encodeURIComponent(dbName))), opts);
    };
    MySQLSessionStorage.prototype.storeSession = function (session) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var entries, query;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _a.sent();
                        entries = (0, session_utils_1.sessionEntries)(session);
                        query = "\n      REPLACE INTO ".concat(this.options.sessionTableName, "\n      (").concat(entries.map(function (_a) {
                            var _b = tslib_1.__read(_a, 1), key = _b[0];
                            return key;
                        }).join(', '), ")\n      VALUES (").concat(entries.map(function () { return "?"; }).join(', '), ")\n    ");
                        return [4 /*yield*/, this.query(query, entries.map(function (_a) {
                                var _b = tslib_1.__read(_a, 2), _key = _b[0], value = _b[1];
                                return value;
                            }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    MySQLSessionStorage.prototype.loadSession = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query, _a, rows, rawResult;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _b.sent();
                        query = "\n      SELECT * FROM `".concat(this.options.sessionTableName, "`\n      WHERE id = ?;\n    ");
                        return [4 /*yield*/, this.query(query, [id])];
                    case 2:
                        _a = tslib_1.__read.apply(void 0, [_b.sent(), 1]), rows = _a[0];
                        if (!Array.isArray(rows) || (rows === null || rows === void 0 ? void 0 : rows.length) !== 1)
                            return [2 /*return*/, undefined];
                        rawResult = rows[0];
                        return [2 /*return*/, (0, session_utils_1.sessionFromEntries)(Object.entries(rawResult))];
                }
            });
        });
    };
    MySQLSessionStorage.prototype.deleteSession = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _a.sent();
                        query = "\n      DELETE FROM ".concat(this.options.sessionTableName, "\n      WHERE id = ?;\n    ");
                        return [4 /*yield*/, this.query(query, [id])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    MySQLSessionStorage.prototype.deleteSessions = function (ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _a.sent();
                        query = "\n      DELETE FROM ".concat(this.options.sessionTableName, "\n      WHERE id IN (").concat(ids.map(function () { return '?'; }).join(','), ");\n    ");
                        return [4 /*yield*/, this.query(query, ids)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    MySQLSessionStorage.prototype.findSessionsByShop = function (shop) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var cleanShop, query, _a, rows, results;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _b.sent();
                        cleanShop = (0, shop_validator_1.sanitizeShop)(shop, true);
                        query = "\n      SELECT * FROM ".concat(this.options.sessionTableName, "\n      WHERE shop = ?;\n    ");
                        return [4 /*yield*/, this.query(query, [cleanShop])];
                    case 2:
                        _a = tslib_1.__read.apply(void 0, [_b.sent(), 1]), rows = _a[0];
                        if (!Array.isArray(rows) || (rows === null || rows === void 0 ? void 0 : rows.length) === 0)
                            return [2 /*return*/, []];
                        results = rows.map(function (row) {
                            return (0, session_utils_1.sessionFromEntries)(Object.entries(row));
                        });
                        return [2 /*return*/, results];
                }
            });
        });
    };
    MySQLSessionStorage.prototype.disconnect = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connection.end()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MySQLSessionStorage.prototype.init = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, promise_1.default.createConnection(this.dbUrl.toString())];
                    case 1:
                        _a.connection = _b.sent();
                        return [4 /*yield*/, this.createTable()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MySQLSessionStorage.prototype.hasSessionTable = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query, _a, rows;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        query = "\n      SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = ?;\n    ";
                        return [4 /*yield*/, this.query(query, [this.options.sessionTableName])];
                    case 1:
                        _a = tslib_1.__read.apply(void 0, [_b.sent(), 1]), rows = _a[0];
                        return [2 /*return*/, Array.isArray(rows) && rows.length === 1];
                }
            });
        });
    };
    MySQLSessionStorage.prototype.createTable = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var hasSessionTable, query;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hasSessionTable()];
                    case 1:
                        hasSessionTable = _a.sent();
                        if (!!hasSessionTable) return [3 /*break*/, 3];
                        query = "\n        CREATE TABLE ".concat(this.options.sessionTableName, " (\n          id varchar(255) NOT NULL PRIMARY KEY,\n          shop varchar(255) NOT NULL,\n          state varchar(255) NOT NULL,\n          isOnline tinyint NOT NULL,\n          scope varchar(255),\n          expires integer,\n          onlineAccessInfo varchar(255),\n          accessToken varchar(255)\n        )\n      ");
                        return [4 /*yield*/, this.query(query)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MySQLSessionStorage.prototype.query = function (sql, params) {
        if (params === void 0) { params = []; }
        return this.connection.query(sql, params);
    };
    return MySQLSessionStorage;
}());
exports.MySQLSessionStorage = MySQLSessionStorage;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLiteSessionStorage = void 0;
var tslib_1 = require("tslib");
var sqlite3_1 = tslib_1.__importDefault(require("sqlite3"));
var session_utils_1 = require("../session-utils");
var shop_validator_1 = require("../../../utils/shop-validator");
var defaultSQLiteSessionStorageOptions = {
    sessionTableName: 'shopify_sessions',
};
var SQLiteSessionStorage = /** @class */ (function () {
    function SQLiteSessionStorage(filename, opts) {
        if (opts === void 0) { opts = {}; }
        this.filename = filename;
        this.options = tslib_1.__assign(tslib_1.__assign({}, defaultSQLiteSessionStorageOptions), opts);
        this.db = new sqlite3_1.default.Database(this.filename);
        this.ready = this.init();
    }
    SQLiteSessionStorage.prototype.storeSession = function (session) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var entries, query;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _a.sent();
                        entries = (0, session_utils_1.sessionEntries)(session);
                        query = "\n      INSERT OR REPLACE INTO ".concat(this.options.sessionTableName, "\n      (").concat(entries.map(function (_a) {
                            var _b = tslib_1.__read(_a, 1), key = _b[0];
                            return key;
                        }).join(', '), ")\n      VALUES (").concat(entries.map(function () { return '?'; }).join(', '), ");\n    ");
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
    SQLiteSessionStorage.prototype.loadSession = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query, rows, rawResult;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _a.sent();
                        query = "\n      SELECT * FROM ".concat(this.options.sessionTableName, "\n      WHERE id = ?;\n    ");
                        return [4 /*yield*/, this.query(query, [id])];
                    case 2:
                        rows = _a.sent();
                        if (!Array.isArray(rows) || (rows === null || rows === void 0 ? void 0 : rows.length) !== 1)
                            return [2 /*return*/, undefined];
                        rawResult = rows[0];
                        return [2 /*return*/, (0, session_utils_1.sessionFromEntries)(Object.entries(rawResult))];
                }
            });
        });
    };
    SQLiteSessionStorage.prototype.deleteSession = function (id) {
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
    SQLiteSessionStorage.prototype.deleteSessions = function (ids) {
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
    SQLiteSessionStorage.prototype.findSessionsByShop = function (shop) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var cleanShop, query, rows, results;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cleanShop = (0, shop_validator_1.sanitizeShop)(shop, true);
                        return [4 /*yield*/, this.ready];
                    case 1:
                        _a.sent();
                        query = "\n      SELECT * FROM ".concat(this.options.sessionTableName, "\n      WHERE shop = ?;\n    ");
                        return [4 /*yield*/, this.query(query, [cleanShop])];
                    case 2:
                        rows = _a.sent();
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
    SQLiteSessionStorage.prototype.hasSessionTable = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query, rows;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n    SELECT name FROM sqlite_schema\n    WHERE\n      type = 'table' AND\n      name = ?;\n    ";
                        return [4 /*yield*/, this.query(query, [this.options.sessionTableName])];
                    case 1:
                        rows = _a.sent();
                        return [2 /*return*/, rows.length === 1];
                }
            });
        });
    };
    SQLiteSessionStorage.prototype.init = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var hasSessionTable, query;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hasSessionTable()];
                    case 1:
                        hasSessionTable = _a.sent();
                        if (!!hasSessionTable) return [3 /*break*/, 3];
                        query = "\n        CREATE TABLE ".concat(this.options.sessionTableName, " (\n          id varchar(255) NOT NULL PRIMARY KEY,\n          shop varchar(255) NOT NULL,\n          state varchar(255) NOT NULL,\n          isOnline integer NOT NULL,\n          expires integer,\n          scope varchar(255),\n          accessToken varchar(255),\n          onlineAccessInfo varchar(255)\n        )\n      ");
                        return [4 /*yield*/, this.query(query)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SQLiteSessionStorage.prototype.query = function (sql, params) {
        var _this = this;
        if (params === void 0) { params = []; }
        return new Promise(function (resolve, reject) {
            _this.db.all(sql, params, function (err, result) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
    };
    return SQLiteSessionStorage;
}());
exports.SQLiteSessionStorage = SQLiteSessionStorage;

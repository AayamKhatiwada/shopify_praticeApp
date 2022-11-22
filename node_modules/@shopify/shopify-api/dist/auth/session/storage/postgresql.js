"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgreSQLSessionStorage = void 0;
var tslib_1 = require("tslib");
var pg_1 = tslib_1.__importDefault(require("pg"));
var session_utils_1 = require("../session-utils");
var shop_validator_1 = require("../../../utils/shop-validator");
var defaultPostgreSQLSessionStorageOptions = {
    sessionTableName: 'shopify_sessions',
    port: 3211,
};
var PostgreSQLSessionStorage = /** @class */ (function () {
    function PostgreSQLSessionStorage(dbUrl, opts) {
        if (opts === void 0) { opts = {}; }
        this.dbUrl = dbUrl;
        if (typeof this.dbUrl === 'string') {
            this.dbUrl = new URL(this.dbUrl);
        }
        this.options = tslib_1.__assign(tslib_1.__assign({}, defaultPostgreSQLSessionStorageOptions), opts);
        this.ready = this.init();
    }
    PostgreSQLSessionStorage.withCredentials = function (host, dbName, username, password, opts) {
        return new PostgreSQLSessionStorage(new URL("postgres://".concat(encodeURIComponent(username), ":").concat(encodeURIComponent(password), "@").concat(host, "/").concat(encodeURIComponent(dbName))), opts);
    };
    PostgreSQLSessionStorage.prototype.storeSession = function (session) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var entries, query;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _a.sent();
                        entries = (0, session_utils_1.sessionEntries)(session);
                        query = "\n      INSERT INTO ".concat(this.options.sessionTableName, "\n      (").concat(entries.map(function (_a) {
                            var _b = tslib_1.__read(_a, 1), key = _b[0];
                            return key;
                        }).join(', '), ")\n      VALUES (").concat(entries.map(function (_, i) { return "$".concat(i + 1); }).join(', '), ")\n      ON CONFLICT (id) DO UPDATE SET ").concat(entries
                            .map(function (_a) {
                            var _b = tslib_1.__read(_a, 1), key = _b[0];
                            return "".concat(key, " = Excluded.").concat(key);
                        })
                            .join(', '), ";\n    ");
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
    PostgreSQLSessionStorage.prototype.loadSession = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query, rows, rawResult;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _a.sent();
                        query = "\n      SELECT * FROM ".concat(this.options.sessionTableName, "\n      WHERE id = $1;\n    ");
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
    PostgreSQLSessionStorage.prototype.deleteSession = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _a.sent();
                        query = "\n      DELETE FROM ".concat(this.options.sessionTableName, "\n      WHERE id = $1;\n    ");
                        return [4 /*yield*/, this.query(query, [id])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    PostgreSQLSessionStorage.prototype.deleteSessions = function (ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _a.sent();
                        query = "\n      DELETE FROM ".concat(this.options.sessionTableName, "\n      WHERE id IN (").concat(ids.map(function (_, i) { return "$".concat(i + 1); }).join(', '), ");\n    ");
                        return [4 /*yield*/, this.query(query, ids)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    PostgreSQLSessionStorage.prototype.findSessionsByShop = function (shop) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var cleanShop, query, rows, results;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ready];
                    case 1:
                        _a.sent();
                        cleanShop = (0, shop_validator_1.sanitizeShop)(shop, true);
                        query = "\n      SELECT * FROM ".concat(this.options.sessionTableName, "\n      WHERE shop = $1;\n    ");
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
    PostgreSQLSessionStorage.prototype.disconnect = function () {
        return this.client.end();
    };
    PostgreSQLSessionStorage.prototype.init = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.client = new pg_1.default.Client({ connectionString: this.dbUrl.toString() });
                        return [4 /*yield*/, this.connectClient()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.createTable()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostgreSQLSessionStorage.prototype.connectClient = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.connect()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostgreSQLSessionStorage.prototype.hasSessionTable = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var query, rows;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n      SELECT * FROM pg_catalog.pg_tables WHERE tablename = $1\n    ";
                        return [4 /*yield*/, this.query(query, [this.options.sessionTableName])];
                    case 1:
                        rows = _a.sent();
                        return [2 /*return*/, Array.isArray(rows) && rows.length === 1];
                }
            });
        });
    };
    PostgreSQLSessionStorage.prototype.createTable = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var hasSessionTable, query;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hasSessionTable()];
                    case 1:
                        hasSessionTable = _a.sent();
                        if (!!hasSessionTable) return [3 /*break*/, 3];
                        query = "\n        CREATE TABLE ".concat(this.options.sessionTableName, " (\n          id varchar(255) NOT NULL PRIMARY KEY,\n          shop varchar(255) NOT NULL,\n          state varchar(255) NOT NULL,\n          isOnline boolean NOT NULL,\n          scope varchar(255),\n          expires integer,\n          onlineAccessInfo varchar(255),\n          accessToken varchar(255)\n        )\n      ");
                        return [4 /*yield*/, this.query(query)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostgreSQLSessionStorage.prototype.query = function (sql, params) {
        if (params === void 0) { params = []; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.query(sql, params)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.rows];
                }
            });
        });
    };
    return PostgreSQLSessionStorage;
}());
exports.PostgreSQLSessionStorage = PostgreSQLSessionStorage;

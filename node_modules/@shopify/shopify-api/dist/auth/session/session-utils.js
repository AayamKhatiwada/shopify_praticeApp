"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionEqual = exports.sessionEntries = exports.sessionFromEntries = void 0;
var tslib_1 = require("tslib");
var session_1 = require("./session");
/**
 * Like Object.fromEntries(), but normalizes the keys and filters out null values.
 */
function sessionFromEntries(entries) {
    var obj = Object.fromEntries(entries
        .filter(function (_a) {
        var _b = tslib_1.__read(_a, 2), _key = _b[0], value = _b[1];
        return value !== null && value !== undefined;
    })
        // Sanitize keys
        .map(function (_a) {
        var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
        switch (key.toLowerCase()) {
            case 'isonline':
                return ['isOnline', value];
            case 'accesstoken':
                return ['accessToken', value];
            case 'onlineaccessinfo':
                return ['onlineAccessInfo', value];
            default:
                return [key.toLowerCase(), value];
        }
    })
        // Sanitize values
        .map(function (_a) {
        var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
        switch (key) {
            case 'isOnline':
                if (typeof value === 'string') {
                    return [key, value.toString().toLowerCase() === 'true'];
                }
                else if (typeof value === 'number') {
                    return [key, Boolean(value)];
                }
                return [key, value];
            case 'scope':
                return [key, value.toString()];
            case 'expires':
                return [key, value ? new Date(Number(value) * 1000) : undefined];
            case 'onlineAccessInfo':
                return [
                    key,
                    {
                        // eslint-disable-next-line  @typescript-eslint/naming-convention
                        associated_user: {
                            id: Number(value),
                        },
                    },
                ];
            default:
                return [key, value];
        }
    }));
    Object.setPrototypeOf(obj, session_1.Session.prototype);
    return obj;
}
exports.sessionFromEntries = sessionFromEntries;
var includedKeys = [
    'id',
    'shop',
    'state',
    'isOnline',
    'scope',
    'accessToken',
    'expires',
    'onlineAccessInfo',
];
function sessionEntries(session) {
    return (Object.entries(session)
        .filter(function (_a) {
        var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
        return includedKeys.includes(key) && value !== undefined && value !== null;
    })
        // Prepare values for db storage
        .map(function (_a) {
        var _b;
        var _c = tslib_1.__read(_a, 2), key = _c[0], value = _c[1];
        switch (key) {
            case 'expires':
                return [
                    key,
                    value ? Math.floor(value.getTime() / 1000) : undefined,
                ];
            case 'onlineAccessInfo':
                return [key, (_b = value === null || value === void 0 ? void 0 : value.associated_user) === null || _b === void 0 ? void 0 : _b.id];
            default:
                return [key, value];
        }
    }));
}
exports.sessionEntries = sessionEntries;
function sessionEqual(sessionA, sessionB) {
    if (!sessionA)
        return false;
    if (!sessionB)
        return false;
    var copyA = sessionEntries(sessionA);
    copyA.sort(function (_a, _b) {
        var _c = tslib_1.__read(_a, 1), k1 = _c[0];
        var _d = tslib_1.__read(_b, 1), k2 = _d[0];
        return (k1 < k2 ? -1 : 1);
    });
    var copyB = sessionEntries(sessionB);
    copyB.sort(function (_a, _b) {
        var _c = tslib_1.__read(_a, 1), k1 = _c[0];
        var _d = tslib_1.__read(_b, 1), k2 = _d[0];
        return (k1 < k2 ? -1 : 1);
    });
    return JSON.stringify(copyA) === JSON.stringify(copyB);
}
exports.sessionEqual = sessionEqual;

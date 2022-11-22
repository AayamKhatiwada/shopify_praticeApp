"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var error_1 = require("./error");
var rest_1 = require("./clients/rest");
var types_1 = require("./clients/http_client/types");
var context_1 = require("./context");
var Base = /** @class */ (function () {
    function Base(_a) {
        var session = _a.session, fromData = _a.fromData;
        this.session = session;
        if (fromData) {
            this.setData(fromData);
        }
    }
    Base.baseFind = function (_a) {
        var _b, _c, _d, _e;
        var session = _a.session, urlIds = _a.urlIds, params = _a.params;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, this.request({
                            http_method: 'get',
                            operation: 'get',
                            session: session,
                            urlIds: urlIds,
                            params: params,
                        })];
                    case 1:
                        response = _f.sent();
                        this.NEXT_PAGE_INFO = (_c = (_b = response.pageInfo) === null || _b === void 0 ? void 0 : _b.nextPage) !== null && _c !== void 0 ? _c : undefined;
                        this.PREV_PAGE_INFO = (_e = (_d = response.pageInfo) === null || _d === void 0 ? void 0 : _d.prevPage) !== null && _e !== void 0 ? _e : undefined;
                        return [2 /*return*/, this.createInstancesFromResponse(session, response.body)];
                }
            });
        });
    };
    Base.request = function (_a) {
        var session = _a.session, http_method = _a.http_method, operation = _a.operation, urlIds = _a.urlIds, params = _a.params, body = _a.body, entity = _a.entity;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var client, path, cleanParams, key;
            return tslib_1.__generator(this, function (_b) {
                if (context_1.Context.API_VERSION !== this.API_VERSION) {
                    throw new error_1.RestResourceError("Current Context.API_VERSION '".concat(context_1.Context.API_VERSION, "' does not match resource version ").concat(this.API_VERSION));
                }
                client = new rest_1.RestClient(session.shop, session.accessToken);
                path = this.getPath({ http_method: http_method, operation: operation, urlIds: urlIds, entity: entity });
                cleanParams = {};
                if (params) {
                    for (key in params) {
                        if (params[key] !== null) {
                            cleanParams[key] = params[key];
                        }
                    }
                }
                switch (http_method) {
                    case 'get':
                        return [2 /*return*/, client.get({ path: path, query: cleanParams })];
                    case 'post':
                        return [2 /*return*/, client.post({
                                path: path,
                                query: cleanParams,
                                data: body,
                                type: types_1.DataType.JSON,
                            })];
                    case 'put':
                        return [2 /*return*/, client.put({
                                path: path,
                                query: cleanParams,
                                data: body,
                                type: types_1.DataType.JSON,
                            })];
                    case 'delete':
                        return [2 /*return*/, client.delete({ path: path, query: cleanParams })];
                    default:
                        throw new Error("Unrecognized HTTP method \"".concat(http_method, "\""));
                }
                return [2 /*return*/];
            });
        });
    };
    Base.getJsonBodyName = function () {
        return this.name.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    };
    Base.getPath = function (_a) {
        var http_method = _a.http_method, operation = _a.operation, urlIds = _a.urlIds, entity = _a.entity;
        var match = null;
        var specificity = -1;
        this.PATHS.forEach(function (path) {
            if (http_method !== path.http_method ||
                operation !== path.operation ||
                path.ids.length <= specificity) {
                return;
            }
            var pathUrlIds = tslib_1.__assign({}, urlIds);
            path.ids.forEach(function (id) {
                if (!pathUrlIds[id] && entity && entity[id]) {
                    pathUrlIds[id] = entity[id];
                }
            });
            pathUrlIds = Object.entries(pathUrlIds).reduce(function (acc, _a) {
                var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
                if (value) {
                    acc[key] = value;
                }
                return acc;
            }, {});
            // If we weren't given all of the path's required ids, we can't use it
            var diff = path.ids.reduce(function (acc, id) { return (pathUrlIds[id] ? acc : acc.concat(id)); }, []);
            if (diff.length > 0) {
                return;
            }
            specificity = path.ids.length;
            match = path.path.replace(/(<([^>]+)>)/g, 
            // eslint-disable-next-line @typescript-eslint/naming-convention
            function (_m1, _m2, id) { return "".concat(pathUrlIds[id]); });
        });
        if (!match) {
            throw new error_1.RestResourceError('Could not find a path for request');
        }
        if (this.CUSTOM_PREFIX) {
            return "".concat(this.CUSTOM_PREFIX, "/").concat(match);
        }
        else {
            return match;
        }
    };
    Base.createInstancesFromResponse = function (session, data) {
        var _this = this;
        if (data[this.PLURAL_NAME] || Array.isArray(data[this.NAME])) {
            return (data[this.PLURAL_NAME] || data[this.NAME]).reduce(function (acc, entry) {
                return acc.concat(_this.createInstance(session, entry));
            }, []);
        }
        if (data[this.NAME]) {
            return [this.createInstance(session, data[this.NAME])];
        }
        return [];
    };
    Base.createInstance = function (session, data, prevInstance) {
        var instance = prevInstance
            ? prevInstance
            : new this({ session: session });
        if (data) {
            instance.setData(data);
        }
        return instance;
    };
    Base.prototype.save = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.update, update = _c === void 0 ? false : _c;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _d, PRIMARY_KEY, NAME, method, data, response, body;
            var _e;
            return tslib_1.__generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _d = this.resource(), PRIMARY_KEY = _d.PRIMARY_KEY, NAME = _d.NAME;
                        method = this[PRIMARY_KEY] ? 'put' : 'post';
                        data = this.serialize(true);
                        return [4 /*yield*/, this.resource().request({
                                http_method: method,
                                operation: method,
                                session: this.session,
                                urlIds: {},
                                body: (_e = {}, _e[this.resource().getJsonBodyName()] = data, _e),
                                entity: this,
                            })];
                    case 1:
                        response = _f.sent();
                        body = response.body[NAME];
                        if (update && body) {
                            this.setData(body);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Base.prototype.saveAndUpdate = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.save({ update: true })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Base.prototype.delete = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resource().request({
                            http_method: 'delete',
                            operation: 'delete',
                            session: this.session,
                            urlIds: {},
                            entity: this,
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Base.prototype.serialize = function (saving) {
        var _this = this;
        if (saving === void 0) { saving = false; }
        var _a = this.resource(), HAS_MANY = _a.HAS_MANY, HAS_ONE = _a.HAS_ONE, READ_ONLY_ATTRIBUTES = _a.READ_ONLY_ATTRIBUTES;
        return Object.entries(this).reduce(function (acc, _a) {
            var _b = tslib_1.__read(_a, 2), attribute = _b[0], value = _b[1];
            if (saving &&
                (['session'].includes(attribute) ||
                    READ_ONLY_ATTRIBUTES.includes(attribute))) {
                return acc;
            }
            if (attribute in HAS_MANY && value) {
                acc[attribute] = value.reduce(function (attrAcc, entry) {
                    return attrAcc.concat(_this.serializeSubAttribute(entry, saving));
                }, []);
            }
            else if (attribute in HAS_ONE && value) {
                acc[attribute] = _this.serializeSubAttribute(value, saving);
            }
            else {
                acc[attribute] = value;
            }
            return acc;
        }, {});
    };
    Base.prototype.setData = function (data) {
        var _this = this;
        var _a = this.resource(), HAS_MANY = _a.HAS_MANY, HAS_ONE = _a.HAS_ONE;
        Object.entries(data).forEach(function (_a) {
            var _b = tslib_1.__read(_a, 2), attribute = _b[0], val = _b[1];
            if (attribute in HAS_MANY) {
                var HasManyResource_1 = HAS_MANY[attribute];
                _this[attribute] = [];
                val.forEach(function (entry) {
                    _this[attribute].push(new HasManyResource_1({ session: _this.session, fromData: entry }));
                });
            }
            else if (attribute in HAS_ONE) {
                var HasOneResource = HAS_ONE[attribute];
                _this[attribute] = new HasOneResource({
                    session: _this.session,
                    fromData: val,
                });
            }
            else {
                _this[attribute] = val;
            }
        });
    };
    Base.prototype.resource = function () {
        return this.constructor;
    };
    Base.prototype.serializeSubAttribute = function (attribute, saving) {
        return attribute.serialize
            ? attribute.serialize(saving)
            : this.resource()
                .createInstance(this.session, attribute)
                .serialize(saving);
    };
    Base.NAME = '';
    Base.PLURAL_NAME = '';
    Base.PRIMARY_KEY = 'id';
    Base.CUSTOM_PREFIX = null;
    Base.READ_ONLY_ATTRIBUTES = [];
    Base.HAS_ONE = {};
    Base.HAS_MANY = {};
    Base.PATHS = [];
    return Base;
}());
exports.default = Base;

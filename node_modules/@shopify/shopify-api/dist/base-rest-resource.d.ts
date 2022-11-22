import { SessionInterface } from './auth/session/types';
import { RestRequestReturn } from './clients/rest/types';
import { GetRequestParams } from './clients/http_client/types';
import { ApiVersion } from './base-types';
export interface IdSet {
    [id: string]: string | number | null;
}
export interface ParamSet {
    [key: string]: any;
}
export interface Body {
    [key: string]: any;
}
export interface ResourcePath {
    http_method: string;
    operation: string;
    ids: string[];
    path: string;
}
export interface BaseFindArgs {
    session: SessionInterface;
    params?: ParamSet;
    urlIds: IdSet;
}
export interface RequestArgs extends BaseFindArgs {
    http_method: string;
    operation: string;
    body?: Body | null;
    entity?: Base | null;
}
export interface BaseConstructorArgs {
    session: SessionInterface;
    fromData?: Body | null;
}
declare class Base {
    [key: string]: any;
    static API_VERSION: ApiVersion;
    static NEXT_PAGE_INFO: GetRequestParams | undefined;
    static PREV_PAGE_INFO: GetRequestParams | undefined;
    protected static NAME: string;
    protected static PLURAL_NAME: string;
    protected static PRIMARY_KEY: string;
    protected static CUSTOM_PREFIX: string | null;
    protected static READ_ONLY_ATTRIBUTES: string[];
    protected static HAS_ONE: {
        [attribute: string]: typeof Base;
    };
    protected static HAS_MANY: {
        [attribute: string]: typeof Base;
    };
    protected static PATHS: ResourcePath[];
    protected static baseFind({ session, urlIds, params, }: BaseFindArgs): Promise<Base[]>;
    protected static request({ session, http_method, operation, urlIds, params, body, entity, }: RequestArgs): Promise<RestRequestReturn>;
    protected static getJsonBodyName(): string;
    private static getPath;
    private static createInstancesFromResponse;
    private static createInstance;
    session: SessionInterface;
    constructor({ session, fromData }: BaseConstructorArgs);
    save({ update }?: {
        update?: boolean | undefined;
    }): Promise<void>;
    saveAndUpdate(): Promise<void>;
    delete(): Promise<void>;
    serialize(saving?: boolean): Body;
    protected setData(data: Body): void;
    private resource;
    private serializeSubAttribute;
}
export default Base;
//# sourceMappingURL=base-rest-resource.d.ts.map
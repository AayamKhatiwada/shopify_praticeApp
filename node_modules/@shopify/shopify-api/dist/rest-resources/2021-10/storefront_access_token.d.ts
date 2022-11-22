import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
interface DeleteArgs {
    session: SessionInterface;
    id: number | string;
}
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
}
export declare class StorefrontAccessToken extends Base {
    static API_VERSION: ApiVersion;
    protected static NAME: string;
    protected static PLURAL_NAME: string;
    protected static HAS_ONE: {
        [key: string]: typeof Base;
    };
    protected static HAS_MANY: {
        [key: string]: typeof Base;
    };
    protected static PATHS: ResourcePath[];
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, ...otherArgs }: AllArgs): Promise<StorefrontAccessToken[]>;
    title: string | null;
    access_scope: string | null;
    access_token: string | null;
    created_at: string | null;
    id: number | null;
}
export {};
//# sourceMappingURL=storefront_access_token.d.ts.map
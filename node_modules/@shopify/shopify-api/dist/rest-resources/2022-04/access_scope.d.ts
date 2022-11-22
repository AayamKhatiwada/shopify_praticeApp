/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
}
export declare class AccessScope extends Base {
    static API_VERSION: ApiVersion;
    protected static NAME: string;
    protected static PLURAL_NAME: string;
    protected static HAS_ONE: {
        [key: string]: typeof Base;
    };
    protected static HAS_MANY: {
        [key: string]: typeof Base;
    };
    protected static CUSTOM_PREFIX: string | null;
    protected static PATHS: ResourcePath[];
    static all({ session, ...otherArgs }: AllArgs): Promise<AccessScope[]>;
    handle: string | null;
    access_scopes: {
        [key: string]: unknown;
    }[] | null;
}
export {};
//# sourceMappingURL=access_scope.d.ts.map
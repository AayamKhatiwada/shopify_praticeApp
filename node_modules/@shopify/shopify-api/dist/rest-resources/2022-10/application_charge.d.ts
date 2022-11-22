/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
interface FindArgs {
    session: SessionInterface;
    id: number | string;
    fields?: unknown;
}
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    since_id?: unknown;
    fields?: unknown;
}
export declare class ApplicationCharge extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<ApplicationCharge | null>;
    static all({ session, since_id, fields, ...otherArgs }: AllArgs): Promise<ApplicationCharge[]>;
    confirmation_url: string | null;
    created_at: string | null;
    id: number | null;
    name: string | null;
    price: string | number | null;
    return_url: string | null;
    status: string | null;
    test: boolean | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=application_charge.d.ts.map
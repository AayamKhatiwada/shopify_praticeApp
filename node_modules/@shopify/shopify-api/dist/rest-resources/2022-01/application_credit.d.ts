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
    fields?: unknown;
}
export declare class ApplicationCredit extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<ApplicationCredit | null>;
    static all({ session, fields, ...otherArgs }: AllArgs): Promise<ApplicationCredit[]>;
    amount: number | null;
    description: string | null;
    id: number | null;
    test: boolean | null;
}
export {};
//# sourceMappingURL=application_credit.d.ts.map
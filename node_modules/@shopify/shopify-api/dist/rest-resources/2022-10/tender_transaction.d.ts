/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    limit?: unknown;
    since_id?: unknown;
    processed_at_min?: unknown;
    processed_at_max?: unknown;
    processed_at?: unknown;
    order?: unknown;
}
export declare class TenderTransaction extends Base {
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
    static all({ session, limit, since_id, processed_at_min, processed_at_max, processed_at, order, ...otherArgs }: AllArgs): Promise<TenderTransaction[]>;
    amount: string | null;
    currency: string | null;
    id: number | null;
    order_id: number | null;
    payment_details: {
        [key: string]: unknown;
    } | null;
    payment_method: string | null;
    processed_at: string | null;
    remote_reference: string | null;
    test: boolean | null;
    user_id: number | null;
}
export {};
//# sourceMappingURL=tender_transaction.d.ts.map
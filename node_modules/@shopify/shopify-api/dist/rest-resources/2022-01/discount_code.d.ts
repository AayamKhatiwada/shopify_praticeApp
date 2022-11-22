/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
interface FindArgs {
    session: SessionInterface;
    id: number | string;
    price_rule_id?: number | string | null;
}
interface DeleteArgs {
    session: SessionInterface;
    id: number | string;
    price_rule_id?: number | string | null;
}
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    price_rule_id?: number | string | null;
    batch_id?: number | string | null;
}
interface CountArgs {
    [key: string]: unknown;
    session: SessionInterface;
    times_used?: unknown;
    times_used_min?: unknown;
    times_used_max?: unknown;
}
interface GetAllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    price_rule_id?: number | string | null;
    batch_id?: number | string | null;
}
interface LookupArgs {
    [key: string]: unknown;
    session: SessionInterface;
    code?: unknown;
}
interface BatchArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class DiscountCode extends Base {
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
    static find({ session, id, price_rule_id }: FindArgs): Promise<DiscountCode | null>;
    static delete({ session, id, price_rule_id }: DeleteArgs): Promise<unknown>;
    static all({ session, price_rule_id, batch_id, ...otherArgs }: AllArgs): Promise<DiscountCode[]>;
    static count({ session, times_used, times_used_min, times_used_max, ...otherArgs }: CountArgs): Promise<unknown>;
    static get_all({ session, price_rule_id, batch_id, ...otherArgs }: GetAllArgs): Promise<unknown>;
    static lookup({ session, code, ...otherArgs }: LookupArgs): Promise<unknown>;
    batch({ body, ...otherArgs }: BatchArgs): Promise<unknown>;
    code: string | null;
    created_at: string | null;
    id: number | null;
    price_rule_id: number | null;
    updated_at: string | null;
    usage_count: number | null;
}
export {};
//# sourceMappingURL=discount_code.d.ts.map
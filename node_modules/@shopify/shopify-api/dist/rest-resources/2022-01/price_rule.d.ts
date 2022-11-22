/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
interface FindArgs {
    session: SessionInterface;
    id: number | string;
}
interface DeleteArgs {
    session: SessionInterface;
    id: number | string;
}
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    limit?: unknown;
    since_id?: unknown;
    created_at_min?: unknown;
    created_at_max?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
    starts_at_min?: unknown;
    starts_at_max?: unknown;
    ends_at_min?: unknown;
    ends_at_max?: unknown;
    times_used?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: SessionInterface;
}
export declare class PriceRule extends Base {
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
    static find({ session, id }: FindArgs): Promise<PriceRule | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, limit, since_id, created_at_min, created_at_max, updated_at_min, updated_at_max, starts_at_min, starts_at_max, ends_at_min, ends_at_max, times_used, ...otherArgs }: AllArgs): Promise<PriceRule[]>;
    static count({ session, ...otherArgs }: CountArgs): Promise<unknown>;
    allocation_limit: number | null;
    allocation_method: string | null;
    created_at: string | null;
    customer_selection: string | null;
    ends_at: string | null;
    entitled_collection_ids: number[] | null;
    entitled_country_ids: number[] | null;
    entitled_product_ids: number[] | null;
    entitled_variant_ids: number[] | null;
    id: number | null;
    once_per_customer: boolean | null;
    prerequisite_collection_ids: number[] | null;
    prerequisite_customer_ids: number[] | null;
    prerequisite_product_ids: number[] | null;
    prerequisite_quantity_range: {
        [key: string]: unknown;
    } | null;
    prerequisite_saved_search_ids: number[] | null;
    prerequisite_shipping_price_range: {
        [key: string]: unknown;
    } | null;
    prerequisite_subtotal_range: {
        [key: string]: unknown;
    } | null;
    prerequisite_to_entitlement_purchase: {
        [key: string]: unknown;
    } | null;
    prerequisite_to_entitlement_quantity_ratio: {
        [key: string]: unknown;
    } | null;
    prerequisite_variant_ids: number[] | null;
    starts_at: string | null;
    target_selection: string | null;
    target_type: string | null;
    title: string | null;
    updated_at: string | null;
    usage_limit: number | null;
    value: string | null;
    value_type: string | null;
}
export {};
//# sourceMappingURL=price_rule.d.ts.map
import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
interface FindArgs {
    session: SessionInterface;
    id: number | string;
    order_id?: number | string | null;
    fields?: unknown;
}
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    fulfillment_order_id?: number | string | null;
    order_id?: number | string | null;
    created_at_max?: unknown;
    created_at_min?: unknown;
    fields?: unknown;
    limit?: unknown;
    since_id?: unknown;
    updated_at_max?: unknown;
    updated_at_min?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: SessionInterface;
    order_id?: number | string | null;
    created_at_min?: unknown;
    created_at_max?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
}
interface UpdateTrackingArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class Fulfillment extends Base {
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
    static find({ session, id, order_id, fields }: FindArgs): Promise<Fulfillment | null>;
    static all({ session, fulfillment_order_id, order_id, created_at_max, created_at_min, fields, limit, since_id, updated_at_max, updated_at_min, ...otherArgs }: AllArgs): Promise<Fulfillment[]>;
    static count({ session, order_id, created_at_min, created_at_max, updated_at_min, updated_at_max, ...otherArgs }: CountArgs): Promise<unknown>;
    update_tracking({ body, ...otherArgs }: UpdateTrackingArgs): Promise<unknown>;
    created_at: string | null;
    id: number | null;
    line_items: {
        [key: string]: unknown;
    }[] | null;
    location_id: number | null;
    name: string | null;
    notify_customer: boolean | null;
    order_id: number | null;
    origin_address: {
        [key: string]: unknown;
    }[] | null;
    receipt: {
        [key: string]: unknown;
    } | null;
    service: string | null;
    shipment_status: string | null;
    status: string | null;
    tracking_company: string | null;
    tracking_numbers: string[] | null;
    tracking_urls: string[] | null;
    updated_at: string | null;
    variant_inventory_management: string | null;
}
export {};
//# sourceMappingURL=fulfillment.d.ts.map
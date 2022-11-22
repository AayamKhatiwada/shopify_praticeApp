import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
interface FindArgs {
    session: SessionInterface;
    id: number | string;
}
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    order_id?: number | string | null;
}
interface CancelArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface CloseArgs {
    [key: string]: unknown;
    message?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface HoldArgs {
    [key: string]: unknown;
    reason?: unknown;
    reason_notes?: unknown;
    notify_merchant?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface MoveArgs {
    [key: string]: unknown;
    new_location_id?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface OpenArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface ReleaseHoldArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface RescheduleArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class FulfillmentOrder extends Base {
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
    static find({ session, id }: FindArgs): Promise<FulfillmentOrder | null>;
    static all({ session, order_id, ...otherArgs }: AllArgs): Promise<FulfillmentOrder[]>;
    cancel({ body, ...otherArgs }: CancelArgs): Promise<unknown>;
    close({ message, body, ...otherArgs }: CloseArgs): Promise<unknown>;
    hold({ reason, reason_notes, notify_merchant, body, ...otherArgs }: HoldArgs): Promise<unknown>;
    move({ new_location_id, body, ...otherArgs }: MoveArgs): Promise<unknown>;
    open({ body, ...otherArgs }: OpenArgs): Promise<unknown>;
    release_hold({ body, ...otherArgs }: ReleaseHoldArgs): Promise<unknown>;
    reschedule({ body, ...otherArgs }: RescheduleArgs): Promise<unknown>;
    assigned_location: {
        [key: string]: unknown;
    } | null;
    assigned_location_id: number | null;
    delivery_method: {
        [key: string]: unknown;
    } | null;
    destination: {
        [key: string]: unknown;
    } | null;
    fulfill_at: string | null;
    fulfillment_holds: {
        [key: string]: unknown;
    }[] | null;
    id: number | null;
    international_duties: {
        [key: string]: unknown;
    } | null;
    line_items: {
        [key: string]: unknown;
    }[] | null;
    merchant_requests: {
        [key: string]: unknown;
    }[] | null;
    order_id: number | null;
    request_status: string | null;
    shop_id: number | null;
    status: string | null;
    supported_actions: string[] | null;
}
export {};
//# sourceMappingURL=fulfillment_order.d.ts.map
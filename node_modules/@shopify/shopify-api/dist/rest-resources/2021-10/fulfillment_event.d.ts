import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
import { Country } from './country';
import { Province } from './province';
interface FindArgs {
    session: SessionInterface;
    id: number | string;
    order_id?: number | string | null;
    fulfillment_id?: number | string | null;
    event_id?: unknown;
}
interface DeleteArgs {
    session: SessionInterface;
    id: number | string;
    order_id?: number | string | null;
    fulfillment_id?: number | string | null;
}
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    order_id?: number | string | null;
    fulfillment_id?: number | string | null;
}
export declare class FulfillmentEvent extends Base {
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
    protected static getJsonBodyName(): string;
    static find({ session, id, order_id, fulfillment_id, event_id }: FindArgs): Promise<FulfillmentEvent | null>;
    static delete({ session, id, order_id, fulfillment_id }: DeleteArgs): Promise<unknown>;
    static all({ session, order_id, fulfillment_id, ...otherArgs }: AllArgs): Promise<FulfillmentEvent[]>;
    address1: string | null;
    city: string | null;
    country: Country | null | {
        [key: string]: any;
    };
    created_at: string | null;
    estimated_delivery_at: string | null;
    fulfillment_id: number | null;
    happened_at: string | null;
    id: number | null;
    latitude: number | null;
    longitude: number | null;
    message: string | null;
    order_id: number | null;
    province: Province | null | {
        [key: string]: any;
    };
    shop_id: number | null;
    status: string | null;
    updated_at: string | null;
    zip: string | null;
}
export {};
//# sourceMappingURL=fulfillment_event.d.ts.map
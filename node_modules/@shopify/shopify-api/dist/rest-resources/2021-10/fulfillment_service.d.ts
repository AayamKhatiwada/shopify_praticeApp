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
    scope?: unknown;
}
export declare class FulfillmentService extends Base {
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
    static find({ session, id }: FindArgs): Promise<FulfillmentService | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, scope, ...otherArgs }: AllArgs): Promise<FulfillmentService[]>;
    admin_graphql_api_id: string | null;
    callback_url: string | null;
    format: string | null;
    fulfillment_orders_opt_in: boolean | null;
    handle: string | null;
    id: number | null;
    inventory_management: boolean | null;
    location_id: number | null;
    name: string | null;
    provider_id: string | null;
    requires_shipping_method: boolean | null;
    tracking_support: boolean | null;
}
export {};
//# sourceMappingURL=fulfillment_service.d.ts.map
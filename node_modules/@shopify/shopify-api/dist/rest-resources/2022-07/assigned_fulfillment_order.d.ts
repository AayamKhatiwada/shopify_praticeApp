/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    assignment_status?: unknown;
    location_ids?: unknown[] | number | string | null;
}
export declare class AssignedFulfillmentOrder extends Base {
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
    static all({ session, assignment_status, location_ids, ...otherArgs }: AllArgs): Promise<AssignedFulfillmentOrder[]>;
    assigned_location_id: number | null;
    destination: {
        [key: string]: unknown;
    } | null;
    id: number | null;
    line_items: {
        [key: string]: unknown;
    }[] | null;
    order_id: number | null;
    request_status: string | null;
    shop_id: number | null;
    status: string | null;
}
export {};
//# sourceMappingURL=assigned_fulfillment_order.d.ts.map
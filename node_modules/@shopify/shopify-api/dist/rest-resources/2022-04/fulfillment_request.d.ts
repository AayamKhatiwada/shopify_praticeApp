/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import Base, { ResourcePath } from '../../base-rest-resource';
import { ApiVersion } from '../../base-types';
interface AcceptArgs {
    [key: string]: unknown;
    message?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface RejectArgs {
    [key: string]: unknown;
    message?: unknown;
    reason?: unknown;
    line_items?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class FulfillmentRequest extends Base {
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
    accept({ message, body, ...otherArgs }: AcceptArgs): Promise<unknown>;
    reject({ message, reason, line_items, body, ...otherArgs }: RejectArgs): Promise<unknown>;
    fulfillment_order_id: number | null;
}
export {};
//# sourceMappingURL=fulfillment_request.d.ts.map
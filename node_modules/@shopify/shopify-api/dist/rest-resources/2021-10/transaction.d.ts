import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
interface FindArgs {
    session: SessionInterface;
    id: number | string;
    order_id?: number | string | null;
    fields?: unknown;
    in_shop_currency?: unknown;
}
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    order_id?: number | string | null;
    since_id?: unknown;
    fields?: unknown;
    in_shop_currency?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: SessionInterface;
    order_id?: number | string | null;
}
export declare class Transaction extends Base {
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
    static find({ session, id, order_id, fields, in_shop_currency }: FindArgs): Promise<Transaction | null>;
    static all({ session, order_id, since_id, fields, in_shop_currency, ...otherArgs }: AllArgs): Promise<Transaction[]>;
    static count({ session, order_id, ...otherArgs }: CountArgs): Promise<unknown>;
    kind: string | null;
    amount: string | null;
    authorization: string | null;
    authorization_expires_at: string | null;
    created_at: string | null;
    currency: string | null;
    currency_exchange_adjustment: {
        [key: string]: unknown;
    } | null;
    device_id: number | null;
    error_code: string | null;
    extended_authorization_attributes: {
        [key: string]: unknown;
    } | null;
    gateway: string | null;
    id: number | null;
    location_id: number | null;
    message: string | null;
    order_id: number | null;
    parent_id: number | null;
    payment_details: {
        [key: string]: unknown;
    } | null;
    payments_refund_attributes: {
        [key: string]: unknown;
    } | null;
    processed_at: string | null;
    receipt: {
        [key: string]: unknown;
    } | null;
    source_name: string | null;
    status: string | null;
    test: boolean | null;
    user_id: number | null;
}
export {};
//# sourceMappingURL=transaction.d.ts.map
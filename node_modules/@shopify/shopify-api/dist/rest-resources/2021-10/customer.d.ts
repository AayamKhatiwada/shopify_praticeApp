import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
import { Metafield } from './metafield';
interface FindArgs {
    session: SessionInterface;
    id: number | string;
    fields?: unknown;
}
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    ids?: unknown;
    since_id?: unknown;
    created_at_min?: unknown;
    created_at_max?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
    limit?: unknown;
    fields?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: SessionInterface;
}
interface OrdersArgs {
    [key: string]: unknown;
    session: SessionInterface;
    id: number | string;
    status?: unknown;
}
interface SearchArgs {
    [key: string]: unknown;
    session: SessionInterface;
    order?: unknown;
    query?: unknown;
    limit?: unknown;
    fields?: unknown;
}
interface AccountActivationUrlArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface SendInviteArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class Customer extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<Customer | null>;
    static all({ session, ids, since_id, created_at_min, created_at_max, updated_at_min, updated_at_max, limit, fields, ...otherArgs }: AllArgs): Promise<Customer[]>;
    static count({ session, ...otherArgs }: CountArgs): Promise<unknown>;
    static orders({ session, id, status, ...otherArgs }: OrdersArgs): Promise<unknown>;
    static search({ session, order, query, limit, fields, ...otherArgs }: SearchArgs): Promise<unknown>;
    account_activation_url({ body, ...otherArgs }: AccountActivationUrlArgs): Promise<unknown>;
    send_invite({ body, ...otherArgs }: SendInviteArgs): Promise<unknown>;
    accepts_marketing: boolean | null;
    accepts_marketing_updated_at: string | null;
    addresses: {
        [key: string]: unknown;
    }[] | null;
    created_at: string | null;
    currency: string | null;
    default_address: {
        [key: string]: unknown;
    } | null;
    email: string | null;
    first_name: string | null;
    id: number | null;
    last_name: string | null;
    last_order_id: number | null;
    last_order_name: string | null;
    marketing_opt_in_level: string | null;
    metafield: Metafield | null | {
        [key: string]: any;
    };
    multipass_identifier: string | null;
    note: string | null;
    orders_count: number | null;
    phone: string | null;
    sms_marketing_consent: {
        [key: string]: unknown;
    } | null;
    state: string | null;
    tags: string | null;
    tax_exempt: boolean | null;
    tax_exemptions: string[] | null;
    total_spent: string | null;
    updated_at: string | null;
    verified_email: boolean | null;
}
export {};
//# sourceMappingURL=customer.d.ts.map
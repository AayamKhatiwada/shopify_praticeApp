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
    status?: unknown;
    limit?: unknown;
    since_id?: unknown;
    fields?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: SessionInterface;
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
interface DisableArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class GiftCard extends Base {
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
    static find({ session, id }: FindArgs): Promise<GiftCard | null>;
    static all({ session, status, limit, since_id, fields, ...otherArgs }: AllArgs): Promise<GiftCard[]>;
    static count({ session, status, ...otherArgs }: CountArgs): Promise<unknown>;
    static search({ session, order, query, limit, fields, ...otherArgs }: SearchArgs): Promise<unknown>;
    disable({ body, ...otherArgs }: DisableArgs): Promise<unknown>;
    api_client_id: number | null;
    balance: number | null;
    code: string | null;
    created_at: string | null;
    currency: string | null;
    customer_id: number | null;
    disabled_at: string | null;
    expires_on: string | null;
    id: number | null;
    initial_value: number | null;
    last_characters: string | null;
    line_item_id: number | null;
    note: string | null;
    order_id: number | null;
    template_suffix: string | null;
    updated_at: string | null;
    user_id: number | null;
}
export {};
//# sourceMappingURL=gift_card.d.ts.map
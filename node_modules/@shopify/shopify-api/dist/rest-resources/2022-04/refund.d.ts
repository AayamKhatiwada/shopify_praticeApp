/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
import { Transaction } from './transaction';
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
    limit?: unknown;
    fields?: unknown;
    in_shop_currency?: unknown;
}
interface CalculateArgs {
    [key: string]: unknown;
    shipping?: unknown;
    refund_line_items?: unknown;
    currency?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class Refund extends Base {
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
    static find({ session, id, order_id, fields, in_shop_currency }: FindArgs): Promise<Refund | null>;
    static all({ session, order_id, limit, fields, in_shop_currency, ...otherArgs }: AllArgs): Promise<Refund[]>;
    calculate({ shipping, refund_line_items, currency, body, ...otherArgs }: CalculateArgs): Promise<unknown>;
    created_at: string | null;
    duties: {
        [key: string]: unknown;
    }[] | null;
    id: number | null;
    note: string | null;
    order_adjustments: {
        [key: string]: unknown;
    }[] | null;
    order_id: number | null;
    processed_at: string | null;
    refund_duties: {
        [key: string]: unknown;
    }[] | null;
    refund_line_items: {
        [key: string]: unknown;
    }[] | null;
    restock: boolean | null;
    transactions: Transaction[] | null | {
        [key: string]: any;
    };
    user_id: number | null;
}
export {};
//# sourceMappingURL=refund.d.ts.map
import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
import { Currency } from './currency';
interface TransactionsArgs {
    [key: string]: unknown;
    session: SessionInterface;
    since_id?: unknown;
    last_id?: unknown;
    test?: unknown;
    payout_id?: unknown;
    payout_status?: unknown;
}
export declare class PaymentTransaction extends Base {
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
    static transactions({ session, since_id, last_id, test, payout_id, payout_status, ...otherArgs }: TransactionsArgs): Promise<unknown>;
    amount: string | null;
    currency: Currency | null | {
        [key: string]: any;
    };
    fee: string | null;
    id: number | null;
    net: string | null;
    payout_id: number | null;
    payout_status: string | null;
    processed_at: string | null;
    source_id: number | null;
    source_order_id: number | null;
    source_order_transaction_id: number | null;
    source_type: string | null;
    test: boolean | null;
    type: string | null;
}
export {};
//# sourceMappingURL=payment_transaction.d.ts.map
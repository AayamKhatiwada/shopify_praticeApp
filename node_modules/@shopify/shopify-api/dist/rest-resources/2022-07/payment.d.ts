/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
import { Transaction } from './transaction';
import { Checkout } from './checkout';
interface FindArgs {
    session: SessionInterface;
    id: number | string;
    checkout_id?: number | string | null;
}
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    checkout_id?: number | string | null;
}
interface CountArgs {
    [key: string]: unknown;
    session: SessionInterface;
    checkout_id?: number | string | null;
}
export declare class Payment extends Base {
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
    static find({ session, id, checkout_id }: FindArgs): Promise<Payment | null>;
    static all({ session, checkout_id, ...otherArgs }: AllArgs): Promise<Payment[]>;
    static count({ session, checkout_id, ...otherArgs }: CountArgs): Promise<unknown>;
    checkout: Checkout | null | {
        [key: string]: any;
    };
    credit_card: {
        [key: string]: unknown;
    } | null;
    id: number | null;
    next_action: {
        [key: string]: unknown;
    } | null;
    payment_processing_error_message: string | null;
    transaction: Transaction | null | {
        [key: string]: any;
    };
    unique_token: string | null;
}
export {};
//# sourceMappingURL=payment.d.ts.map
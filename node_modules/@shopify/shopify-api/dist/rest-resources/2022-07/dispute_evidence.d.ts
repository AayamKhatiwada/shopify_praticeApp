/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
import { Fulfillment } from './fulfillment';
interface FindArgs {
    session: SessionInterface;
    dispute_id: number | string;
}
export declare class DisputeEvidence extends Base {
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
    protected static PRIMARY_KEY: string;
    static find({ session, dispute_id }: FindArgs): Promise<DisputeEvidence | null>;
    access_activity_log: string | null;
    billing_address: {
        [key: string]: unknown;
    } | null;
    cancellation_policy_disclosure: string | null;
    cancellation_rebuttal: string | null;
    created_at: string | null;
    customer_email_address: string | null;
    customer_first_name: string | null;
    customer_last_name: string | null;
    dispute_evidence_files: {
        [key: string]: unknown;
    } | null;
    fulfillments: Fulfillment[] | null | {
        [key: string]: any;
    };
    id: number | null;
    payments_dispute_id: number | null;
    product_description: {
        [key: string]: unknown;
    } | null;
    refund_policy_disclosure: string | null;
    refund_refusal_explanation: string | null;
    shipping_address: {
        [key: string]: unknown;
    } | null;
    submitted: boolean | null;
    uncategorized_text: string | null;
    updated_on: string | null;
}
export {};
//# sourceMappingURL=dispute_evidence.d.ts.map
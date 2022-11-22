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
    since_id?: unknown;
    last_id?: unknown;
    status?: unknown;
    initiated_at?: unknown;
}
export declare class Dispute extends Base {
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
    static find({ session, id }: FindArgs): Promise<Dispute | null>;
    static all({ session, since_id, last_id, status, initiated_at, ...otherArgs }: AllArgs): Promise<Dispute[]>;
    amount: string | null;
    currency: string | null;
    evidence_due_by: string | null;
    evidence_sent_on: string | null;
    finalized_on: string | null;
    id: number | null;
    network_reason_code: number | null;
    order_id: number | null;
    reason: string | null;
    status: string | null;
    type: string | null;
}
export {};
//# sourceMappingURL=dispute.d.ts.map
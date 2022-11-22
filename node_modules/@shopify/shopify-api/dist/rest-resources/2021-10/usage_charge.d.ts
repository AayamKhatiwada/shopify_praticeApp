import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
interface FindArgs {
    session: SessionInterface;
    id: number | string;
    recurring_application_charge_id?: number | string | null;
    fields?: unknown;
}
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    recurring_application_charge_id?: number | string | null;
    fields?: unknown;
}
export declare class UsageCharge extends Base {
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
    static find({ session, id, recurring_application_charge_id, fields }: FindArgs): Promise<UsageCharge | null>;
    static all({ session, recurring_application_charge_id, fields, ...otherArgs }: AllArgs): Promise<UsageCharge[]>;
    created_at: string | null;
    description: string | null;
    id: number | null;
    price: number | null;
    recurring_application_charge_id: number | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=usage_charge.d.ts.map
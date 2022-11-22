import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
}
export declare class Currency extends Base {
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
    static all({ session, ...otherArgs }: AllArgs): Promise<Currency[]>;
    currency: string | null;
    rate_updated_at: string | null;
}
export {};
//# sourceMappingURL=currency.d.ts.map
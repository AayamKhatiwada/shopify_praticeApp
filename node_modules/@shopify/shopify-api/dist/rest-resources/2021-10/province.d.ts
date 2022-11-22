import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
interface FindArgs {
    session: SessionInterface;
    id: number | string;
    country_id?: number | string | null;
    fields?: unknown;
}
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    country_id?: number | string | null;
    since_id?: unknown;
    fields?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: SessionInterface;
    country_id?: number | string | null;
}
export declare class Province extends Base {
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
    static find({ session, id, country_id, fields }: FindArgs): Promise<Province | null>;
    static all({ session, country_id, since_id, fields, ...otherArgs }: AllArgs): Promise<Province[]>;
    static count({ session, country_id, ...otherArgs }: CountArgs): Promise<unknown>;
    code: string | null;
    country_id: number | null;
    id: number | null;
    name: string | null;
    shipping_zone_id: number | null;
    tax: number | null;
    tax_name: string | null;
    tax_percentage: number | null;
    tax_type: string | null;
}
export {};
//# sourceMappingURL=province.d.ts.map
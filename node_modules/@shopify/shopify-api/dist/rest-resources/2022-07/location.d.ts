/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
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
}
interface CountArgs {
    [key: string]: unknown;
    session: SessionInterface;
}
interface InventoryLevelsArgs {
    [key: string]: unknown;
    session: SessionInterface;
    id: number | string;
}
export declare class Location extends Base {
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
    static find({ session, id }: FindArgs): Promise<Location | null>;
    static all({ session, ...otherArgs }: AllArgs): Promise<Location[]>;
    static count({ session, ...otherArgs }: CountArgs): Promise<unknown>;
    static inventory_levels({ session, id, ...otherArgs }: InventoryLevelsArgs): Promise<unknown>;
    active: boolean | null;
    address1: string | null;
    address2: string | null;
    city: string | null;
    country: string | null;
    country_code: string | null;
    created_at: string | null;
    id: number | null;
    legacy: boolean | null;
    localized_country_name: string | null;
    localized_province_name: string | null;
    name: string | null;
    phone: string | null;
    province: string | null;
    province_code: string | null;
    updated_at: string | null;
    zip: string | null;
}
export {};
//# sourceMappingURL=location.d.ts.map
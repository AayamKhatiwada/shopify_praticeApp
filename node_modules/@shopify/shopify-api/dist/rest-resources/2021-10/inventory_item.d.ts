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
    ids?: unknown;
    limit?: unknown;
}
export declare class InventoryItem extends Base {
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
    static find({ session, id }: FindArgs): Promise<InventoryItem | null>;
    static all({ session, ids, limit, ...otherArgs }: AllArgs): Promise<InventoryItem[]>;
    cost: string | null;
    country_code_of_origin: string | null;
    country_harmonized_system_codes: {
        [key: string]: unknown;
    }[] | null;
    created_at: string | null;
    harmonized_system_code: number | null;
    id: number | null;
    province_code_of_origin: string | null;
    requires_shipping: boolean | null;
    sku: string | null;
    tracked: boolean | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=inventory_item.d.ts.map
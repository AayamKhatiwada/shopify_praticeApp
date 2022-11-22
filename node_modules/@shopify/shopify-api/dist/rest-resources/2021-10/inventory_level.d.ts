import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
interface DeleteArgs {
    session: SessionInterface;
    inventory_item_id?: unknown;
    location_id?: unknown;
}
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    inventory_item_ids?: unknown;
    location_ids?: unknown;
    limit?: unknown;
    updated_at_min?: unknown;
}
interface AdjustArgs {
    [key: string]: unknown;
    inventory_item_id?: unknown;
    location_id?: unknown;
    available_adjustment?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface ConnectArgs {
    [key: string]: unknown;
    inventory_item_id?: unknown;
    location_id?: unknown;
    relocate_if_necessary?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface SetArgs {
    [key: string]: unknown;
    inventory_item_id?: unknown;
    location_id?: unknown;
    available?: unknown;
    disconnect_if_necessary?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class InventoryLevel extends Base {
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
    static delete({ session, inventory_item_id, location_id }: DeleteArgs): Promise<unknown>;
    static all({ session, inventory_item_ids, location_ids, limit, updated_at_min, ...otherArgs }: AllArgs): Promise<InventoryLevel[]>;
    adjust({ inventory_item_id, location_id, available_adjustment, body, ...otherArgs }: AdjustArgs): Promise<unknown>;
    connect({ inventory_item_id, location_id, relocate_if_necessary, body, ...otherArgs }: ConnectArgs): Promise<unknown>;
    set({ inventory_item_id, location_id, available, disconnect_if_necessary, body, ...otherArgs }: SetArgs): Promise<unknown>;
    available: number | null;
    inventory_item_id: number | null;
    location_id: number | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=inventory_level.d.ts.map
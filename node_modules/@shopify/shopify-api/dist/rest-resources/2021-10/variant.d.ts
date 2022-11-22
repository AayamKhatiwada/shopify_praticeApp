import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
interface FindArgs {
    session: SessionInterface;
    id: number | string;
    fields?: unknown;
}
interface DeleteArgs {
    session: SessionInterface;
    id: number | string;
    product_id?: number | string | null;
}
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    product_id?: number | string | null;
    limit?: unknown;
    presentment_currencies?: unknown;
    since_id?: unknown;
    fields?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: SessionInterface;
    product_id?: number | string | null;
}
export declare class Variant extends Base {
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
    protected static READ_ONLY_ATTRIBUTES: string[];
    static find({ session, id, fields }: FindArgs): Promise<Variant | null>;
    static delete({ session, id, product_id }: DeleteArgs): Promise<unknown>;
    static all({ session, product_id, limit, presentment_currencies, since_id, fields, ...otherArgs }: AllArgs): Promise<Variant[]>;
    static count({ session, product_id, ...otherArgs }: CountArgs): Promise<unknown>;
    barcode: string | null;
    compare_at_price: string | null;
    created_at: string | null;
    fulfillment_service: string | null;
    grams: number | null;
    id: number | null;
    image_id: number | null;
    inventory_item_id: number | null;
    inventory_management: string | null;
    inventory_policy: string | null;
    inventory_quantity: number | null;
    inventory_quantity_adjustment: number | null;
    old_inventory_quantity: number | null;
    option: {
        [key: string]: unknown;
    } | null;
    position: number | null;
    presentment_prices: {
        [key: string]: unknown;
    }[] | null;
    price: string | null;
    product_id: number | null;
    requires_shipping: boolean | null;
    sku: string | null;
    tax_code: string | null;
    taxable: boolean | null;
    title: string | null;
    updated_at: string | null;
    weight: number | null;
    weight_unit: string | null;
}
export {};
//# sourceMappingURL=variant.d.ts.map
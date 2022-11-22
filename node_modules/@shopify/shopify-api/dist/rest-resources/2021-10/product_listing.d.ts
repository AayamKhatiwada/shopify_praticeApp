import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
import { Image } from './image';
import { Variant } from './variant';
interface FindArgs {
    session: SessionInterface;
    product_id: number | string;
}
interface DeleteArgs {
    session: SessionInterface;
    product_id: number | string;
}
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    product_ids?: unknown;
    limit?: unknown;
    collection_id?: unknown;
    updated_at_min?: unknown;
    handle?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: SessionInterface;
}
interface ProductIdsArgs {
    [key: string]: unknown;
    session: SessionInterface;
    limit?: unknown;
}
export declare class ProductListing extends Base {
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
    static find({ session, product_id }: FindArgs): Promise<ProductListing | null>;
    static delete({ session, product_id }: DeleteArgs): Promise<unknown>;
    static all({ session, product_ids, limit, collection_id, updated_at_min, handle, ...otherArgs }: AllArgs): Promise<ProductListing[]>;
    static count({ session, ...otherArgs }: CountArgs): Promise<unknown>;
    static product_ids({ session, limit, ...otherArgs }: ProductIdsArgs): Promise<unknown>;
    body_html: string | null;
    created_at: string | null;
    handle: string | null;
    images: Image[] | null | {
        [key: string]: any;
    };
    options: {
        [key: string]: unknown;
    }[] | null;
    product_id: number | null;
    product_type: string | null;
    published_at: string | null;
    tags: string | null;
    title: string | null;
    updated_at: string | null;
    variants: Variant[] | null | {
        [key: string]: any;
    };
    vendor: string | null;
}
export {};
//# sourceMappingURL=product_listing.d.ts.map
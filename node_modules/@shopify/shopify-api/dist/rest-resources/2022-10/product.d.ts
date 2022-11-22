/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
import { Image } from './image';
import { Variant } from './variant';
interface FindArgs {
    session: SessionInterface;
    id: number | string;
    fields?: unknown;
}
interface DeleteArgs {
    session: SessionInterface;
    id: number | string;
}
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    ids?: unknown;
    limit?: unknown;
    since_id?: unknown;
    title?: unknown;
    vendor?: unknown;
    handle?: unknown;
    product_type?: unknown;
    status?: unknown;
    collection_id?: unknown;
    created_at_min?: unknown;
    created_at_max?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
    published_at_min?: unknown;
    published_at_max?: unknown;
    published_status?: unknown;
    fields?: unknown;
    presentment_currencies?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: SessionInterface;
    vendor?: unknown;
    product_type?: unknown;
    collection_id?: unknown;
    created_at_min?: unknown;
    created_at_max?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
    published_at_min?: unknown;
    published_at_max?: unknown;
    published_status?: unknown;
}
export declare class Product extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<Product | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, ids, limit, since_id, title, vendor, handle, product_type, status, collection_id, created_at_min, created_at_max, updated_at_min, updated_at_max, published_at_min, published_at_max, published_status, fields, presentment_currencies, ...otherArgs }: AllArgs): Promise<Product[]>;
    static count({ session, vendor, product_type, collection_id, created_at_min, created_at_max, updated_at_min, updated_at_max, published_at_min, published_at_max, published_status, ...otherArgs }: CountArgs): Promise<unknown>;
    title: string | null;
    body_html: string | null;
    created_at: string | null;
    handle: string | null;
    id: number | null;
    images: Image[] | null | {
        [key: string]: any;
    };
    options: {
        [key: string]: unknown;
    } | {
        [key: string]: unknown;
    }[] | null;
    product_type: string | null;
    published_at: string | null;
    published_scope: string | null;
    status: string | null;
    tags: string | string[] | null;
    template_suffix: string | null;
    updated_at: string | null;
    variants: Variant[] | null | {
        [key: string]: any;
    };
    vendor: string | null;
}
export {};
//# sourceMappingURL=product.d.ts.map
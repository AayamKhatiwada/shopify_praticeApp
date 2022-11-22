/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
import { Image } from './image';
interface FindArgs {
    session: SessionInterface;
    collection_id: number | string;
}
interface DeleteArgs {
    session: SessionInterface;
    collection_id: number | string;
}
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    limit?: unknown;
}
interface ProductIdsArgs {
    [key: string]: unknown;
    session: SessionInterface;
    collection_id: number | string;
    limit?: unknown;
}
export declare class CollectionListing extends Base {
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
    static find({ session, collection_id }: FindArgs): Promise<CollectionListing | null>;
    static delete({ session, collection_id }: DeleteArgs): Promise<unknown>;
    static all({ session, limit, ...otherArgs }: AllArgs): Promise<CollectionListing[]>;
    static product_ids({ session, collection_id, limit, ...otherArgs }: ProductIdsArgs): Promise<unknown>;
    body_html: string | null;
    collection_id: number | null;
    default_product_image: {
        [key: string]: unknown;
    }[] | null;
    handle: string | null;
    image: Image | null | {
        [key: string]: any;
    };
    published_at: string | null;
    sort_order: string | null;
    title: string | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=collection_listing.d.ts.map
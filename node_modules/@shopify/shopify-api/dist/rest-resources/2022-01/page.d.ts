/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
import { Metafield } from './metafield';
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
    limit?: unknown;
    since_id?: unknown;
    title?: unknown;
    handle?: unknown;
    created_at_min?: unknown;
    created_at_max?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
    published_at_min?: unknown;
    published_at_max?: unknown;
    fields?: unknown;
    published_status?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: SessionInterface;
    title?: unknown;
    created_at_min?: unknown;
    created_at_max?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
    published_at_min?: unknown;
    published_at_max?: unknown;
    published_status?: unknown;
}
export declare class Page extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<Page | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, limit, since_id, title, handle, created_at_min, created_at_max, updated_at_min, updated_at_max, published_at_min, published_at_max, fields, published_status, ...otherArgs }: AllArgs): Promise<Page[]>;
    static count({ session, title, created_at_min, created_at_max, updated_at_min, updated_at_max, published_at_min, published_at_max, published_status, ...otherArgs }: CountArgs): Promise<unknown>;
    admin_graphql_api_id: string | null;
    author: string | null;
    body_html: string | null;
    created_at: string | null;
    handle: string | null;
    id: number | null;
    metafield: Metafield | null | {
        [key: string]: any;
    };
    published_at: string | null;
    shop_id: number | null;
    template_suffix: string | null;
    title: string | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=page.d.ts.map
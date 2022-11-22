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
    handle?: unknown;
    fields?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: SessionInterface;
}
export declare class Blog extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<Blog | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, limit, since_id, handle, fields, ...otherArgs }: AllArgs): Promise<Blog[]>;
    static count({ session, ...otherArgs }: CountArgs): Promise<unknown>;
    admin_graphql_api_id: string | null;
    commentable: string | null;
    created_at: string | null;
    feedburner: string | null;
    feedburner_location: string | null;
    handle: string | null;
    id: number | null;
    metafields: Metafield[] | null | {
        [key: string]: any;
    };
    tags: string | null;
    template_suffix: string | null;
    title: string | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=blog.d.ts.map
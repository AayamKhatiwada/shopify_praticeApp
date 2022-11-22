import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
interface FindArgs {
    session: SessionInterface;
    id: number | string;
    fields?: unknown;
}
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    limit?: unknown;
    since_id?: unknown;
    created_at_min?: unknown;
    created_at_max?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
    published_at_min?: unknown;
    published_at_max?: unknown;
    fields?: unknown;
    published_status?: unknown;
    status?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: SessionInterface;
    created_at_min?: unknown;
    created_at_max?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
    published_at_min?: unknown;
    published_at_max?: unknown;
    published_status?: unknown;
    status?: unknown;
}
interface ApproveArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface NotSpamArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface RemoveArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface RestoreArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface SpamArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class Comment extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<Comment | null>;
    static all({ session, limit, since_id, created_at_min, created_at_max, updated_at_min, updated_at_max, published_at_min, published_at_max, fields, published_status, status, ...otherArgs }: AllArgs): Promise<Comment[]>;
    static count({ session, created_at_min, created_at_max, updated_at_min, updated_at_max, published_at_min, published_at_max, published_status, status, ...otherArgs }: CountArgs): Promise<unknown>;
    approve({ body, ...otherArgs }: ApproveArgs): Promise<unknown>;
    not_spam({ body, ...otherArgs }: NotSpamArgs): Promise<unknown>;
    remove({ body, ...otherArgs }: RemoveArgs): Promise<unknown>;
    restore({ body, ...otherArgs }: RestoreArgs): Promise<unknown>;
    spam({ body, ...otherArgs }: SpamArgs): Promise<unknown>;
    article_id: number | null;
    author: string | null;
    blog_id: number | null;
    body: string | null;
    body_html: string | null;
    created_at: string | null;
    email: string | null;
    id: number | null;
    ip: string | null;
    published_at: string | null;
    status: string | null;
    updated_at: string | null;
    user_agent: string | null;
}
export {};
//# sourceMappingURL=comment.d.ts.map
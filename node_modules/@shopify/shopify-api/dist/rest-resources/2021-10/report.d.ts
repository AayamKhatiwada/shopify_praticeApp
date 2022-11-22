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
}
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    ids?: unknown;
    limit?: unknown;
    since_id?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
    fields?: unknown;
}
export declare class Report extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<Report | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, ids, limit, since_id, updated_at_min, updated_at_max, fields, ...otherArgs }: AllArgs): Promise<Report[]>;
    category: string | null;
    id: number | null;
    name: string | null;
    shopify_ql: string | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=report.d.ts.map
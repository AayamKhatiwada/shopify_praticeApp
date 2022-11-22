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
    address?: unknown;
    created_at_max?: unknown;
    created_at_min?: unknown;
    fields?: unknown;
    limit?: unknown;
    since_id?: unknown;
    topic?: unknown;
    updated_at_min?: unknown;
    updated_at_max?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: SessionInterface;
    address?: unknown;
    topic?: unknown;
}
export declare class Webhook extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<Webhook | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, address, created_at_max, created_at_min, fields, limit, since_id, topic, updated_at_min, updated_at_max, ...otherArgs }: AllArgs): Promise<Webhook[]>;
    static count({ session, address, topic, ...otherArgs }: CountArgs): Promise<unknown>;
    address: string | null;
    topic: string | null;
    api_version: string | null;
    created_at: string | null;
    fields: string[] | null;
    format: string | null;
    id: number | null;
    metafield_namespaces: string[] | null;
    private_metafield_namespaces: string[] | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=webhook.d.ts.map
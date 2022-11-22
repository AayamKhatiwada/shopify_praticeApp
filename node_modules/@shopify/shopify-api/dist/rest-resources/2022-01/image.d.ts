/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
interface FindArgs {
    session: SessionInterface;
    id: number | string;
    product_id?: number | string | null;
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
    since_id?: unknown;
    fields?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: SessionInterface;
    product_id?: number | string | null;
    since_id?: unknown;
}
export declare class Image extends Base {
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
    static find({ session, id, product_id, fields }: FindArgs): Promise<Image | null>;
    static delete({ session, id, product_id }: DeleteArgs): Promise<unknown>;
    static all({ session, product_id, since_id, fields, ...otherArgs }: AllArgs): Promise<Image[]>;
    static count({ session, product_id, since_id, ...otherArgs }: CountArgs): Promise<unknown>;
    created_at: string | null;
    height: number | null;
    id: number | null;
    position: number | null;
    product_id: number | null;
    src: string | null;
    updated_at: string | null;
    variant_ids: number[] | null;
    width: number | null;
}
export {};
//# sourceMappingURL=image.d.ts.map
import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    product_id?: number | string | null;
}
export declare class ProductResourceFeedback extends Base {
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
    protected static getJsonBodyName(): string;
    static all({ session, product_id, ...otherArgs }: AllArgs): Promise<ProductResourceFeedback[]>;
    created_at: string | null;
    feedback_generated_at: string | null;
    messages: string[] | null;
    product_id: number | null;
    resource_id: number | null;
    resource_type: string | null;
    resource_updated_at: string | null;
    state: string | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=product_resource_feedback.d.ts.map
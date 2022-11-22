import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
interface FindArgs {
    session: SessionInterface;
    id: number | string;
}
interface DeleteArgs {
    session: SessionInterface;
    id: number | string;
}
export declare class AndroidPayKey extends Base {
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
    static find({ session, id }: FindArgs): Promise<AndroidPayKey | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    id: number | null;
    public_key: string | null;
}
export {};
//# sourceMappingURL=android_pay_key.d.ts.map
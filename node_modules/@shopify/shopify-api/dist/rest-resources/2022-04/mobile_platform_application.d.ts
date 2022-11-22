/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
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
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
}
export declare class MobilePlatformApplication extends Base {
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
    static find({ session, id }: FindArgs): Promise<MobilePlatformApplication | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, ...otherArgs }: AllArgs): Promise<MobilePlatformApplication[]>;
    application_id: string | null;
    enabled_shared_webcredentials: boolean | null;
    enabled_universal_or_app_links: boolean | null;
    id: number | null;
    platform: string | null;
    sha256_cert_fingerprints: string[] | null;
}
export {};
//# sourceMappingURL=mobile_platform_application.d.ts.map
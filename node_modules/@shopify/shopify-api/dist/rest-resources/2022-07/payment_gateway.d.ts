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
export declare class PaymentGateway extends Base {
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
    static find({ session, id }: FindArgs): Promise<PaymentGateway | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, ...otherArgs }: AllArgs): Promise<PaymentGateway[]>;
    attachment: string | null;
    created_at: string | null;
    credential1: string | null;
    credential2: string | null;
    credential3: string | null;
    credential4: string | null;
    disabled: boolean | null;
    enabled_card_brands: string[] | null;
    id: number | null;
    name: string | null;
    processing_method: string | null;
    provider_id: number | null;
    sandbox: boolean | null;
    service_name: string | null;
    supports_network_tokenization: boolean | null;
    type: string | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=payment_gateway.d.ts.map
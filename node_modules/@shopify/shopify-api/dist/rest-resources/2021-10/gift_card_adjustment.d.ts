import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
interface FindArgs {
    session: SessionInterface;
    id: number | string;
    gift_card_id?: number | string | null;
}
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    gift_card_id?: number | string | null;
}
export declare class GiftCardAdjustment extends Base {
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
    static find({ session, id, gift_card_id }: FindArgs): Promise<GiftCardAdjustment | null>;
    static all({ session, gift_card_id, ...otherArgs }: AllArgs): Promise<GiftCardAdjustment[]>;
    amount: number | null;
    api_client_id: number | null;
    created_at: string | null;
    gift_card_id: number | null;
    id: number | null;
    note: string | null;
    number: number | null;
    order_transaction_id: number | null;
    processed_at: string | null;
    remote_transaction_ref: string | null;
    remote_transaction_url: string | null;
    user_id: number | null;
}
export {};
//# sourceMappingURL=gift_card_adjustment.d.ts.map
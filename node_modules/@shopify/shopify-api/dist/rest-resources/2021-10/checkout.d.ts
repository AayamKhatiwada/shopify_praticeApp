import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
import { DiscountCode } from './discount_code';
import { Order } from './order';
import { GiftCard } from './gift_card';
interface FindArgs {
    session: SessionInterface;
    token: number | string;
}
interface ShippingRatesArgs {
    [key: string]: unknown;
    session: SessionInterface;
    token: number | string;
}
interface CompleteArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class Checkout extends Base {
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
    protected static PRIMARY_KEY: string;
    static find({ session, token }: FindArgs): Promise<Checkout | null>;
    static shipping_rates({ session, token, ...otherArgs }: ShippingRatesArgs): Promise<unknown>;
    complete({ body, ...otherArgs }: CompleteArgs): Promise<unknown>;
    billing_address: {
        [key: string]: unknown;
    } | null;
    line_items: {
        [key: string]: unknown;
    }[] | null;
    applied_discount: {
        [key: string]: unknown;
    } | null;
    buyer_accepts_marketing: boolean | null;
    created_at: string | null;
    currency: string | null;
    customer_id: number | null;
    discount_code: DiscountCode | null | {
        [key: string]: any;
    };
    email: string | null;
    gift_cards: GiftCard[] | null | {
        [key: string]: any;
    };
    order: Order | null | {
        [key: string]: any;
    };
    payment_due: string | null;
    payment_url: string | null;
    phone: string | null;
    presentment_currency: string | null;
    requires_shipping: boolean | null;
    reservation_time: string | null;
    reservation_time_left: number | null;
    shipping_address: {
        [key: string]: unknown;
    } | null;
    shipping_line: {
        [key: string]: unknown;
    } | null;
    shipping_rate: {
        [key: string]: unknown;
    } | null;
    source_identifier: string | null;
    source_name: string | null;
    source_url: string | null;
    subtotal_price: string | null;
    tax_lines: {
        [key: string]: unknown;
    }[] | null;
    taxes_included: boolean | null;
    token: string | null;
    total_price: string | null;
    total_tax: string | null;
    updated_at: string | null;
    user_id: number | null;
    web_url: string | null;
}
export {};
//# sourceMappingURL=checkout.d.ts.map
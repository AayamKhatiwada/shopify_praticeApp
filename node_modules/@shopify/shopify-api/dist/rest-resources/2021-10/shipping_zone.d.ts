import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
import { Country } from './country';
import { Province } from './province';
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    fields?: unknown;
}
export declare class ShippingZone extends Base {
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
    static all({ session, fields, ...otherArgs }: AllArgs): Promise<ShippingZone[]>;
    carrier_shipping_rate_providers: unknown | null;
    countries: Country[] | null | {
        [key: string]: any;
    };
    id: number | null;
    location_group_id: number | null;
    name: string | null;
    price_based_shipping_rates: {
        [key: string]: unknown;
    } | null;
    profile_id: number | null;
    provinces: Province[] | null | {
        [key: string]: any;
    };
    weight_based_shipping_rates: {
        [key: string]: unknown;
    } | null;
}
export {};
//# sourceMappingURL=shipping_zone.d.ts.map
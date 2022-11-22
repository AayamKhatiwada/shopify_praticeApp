import Base, { ResourcePath } from '../../base-rest-resource';
import { SessionInterface } from '../../auth/session/types';
import { ApiVersion } from '../../base-types';
interface FindArgs {
    session: SessionInterface;
    id: number | string;
    customer_id?: number | string | null;
}
interface DeleteArgs {
    session: SessionInterface;
    id: number | string;
    customer_id?: number | string | null;
}
interface AllArgs {
    [key: string]: unknown;
    session: SessionInterface;
    customer_id?: number | string | null;
}
interface DefaultArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
interface SetArgs {
    [key: string]: unknown;
    address_ids?: unknown[] | number | string | null;
    operation?: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class CustomerAddress extends Base {
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
    static find({ session, id, customer_id }: FindArgs): Promise<CustomerAddress | null>;
    static delete({ session, id, customer_id }: DeleteArgs): Promise<unknown>;
    static all({ session, customer_id, ...otherArgs }: AllArgs): Promise<CustomerAddress[]>;
    default({ body, ...otherArgs }: DefaultArgs): Promise<unknown>;
    set({ address_ids, operation, body, ...otherArgs }: SetArgs): Promise<unknown>;
    address1: string | null;
    address2: string | null;
    city: string | null;
    company: string | null;
    country: string | null;
    country_code: string | null;
    country_name: string | null;
    customer_id: number | null;
    first_name: string | null;
    id: number | null;
    last_name: string | null;
    name: string | null;
    phone: string | null;
    province: string | null;
    province_code: string | null;
    zip: string | null;
}
export {};
//# sourceMappingURL=customer_address.d.ts.map
import { SessionInterface } from '../auth/session/types';
interface CheckInterface {
    session: SessionInterface;
    isTest?: boolean;
}
interface CheckReturn {
    hasPayment: boolean;
    confirmBillingUrl?: string;
}
export declare function check({ session, isTest, }: CheckInterface): Promise<CheckReturn>;
export {};
//# sourceMappingURL=check.d.ts.map
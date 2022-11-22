import { SessionInterface } from '../types';
import { SessionStorage } from '../session_storage';
export declare class CustomSessionStorage implements SessionStorage {
    readonly storeCallback: (session: SessionInterface) => Promise<boolean>;
    readonly loadCallback: (id: string) => Promise<SessionInterface | {
        [key: string]: unknown;
    } | undefined>;
    readonly deleteCallback: (id: string) => Promise<boolean>;
    readonly deleteSessionsCallback?: ((ids: string[]) => Promise<boolean>) | undefined;
    readonly findSessionsByShopCallback?: ((shop: string) => Promise<SessionInterface[]>) | undefined;
    constructor(storeCallback: (session: SessionInterface) => Promise<boolean>, loadCallback: (id: string) => Promise<SessionInterface | {
        [key: string]: unknown;
    } | undefined>, deleteCallback: (id: string) => Promise<boolean>, deleteSessionsCallback?: ((ids: string[]) => Promise<boolean>) | undefined, findSessionsByShopCallback?: ((shop: string) => Promise<SessionInterface[]>) | undefined);
    storeSession(session: SessionInterface): Promise<boolean>;
    loadSession(id: string): Promise<SessionInterface | undefined>;
    deleteSession(id: string): Promise<boolean>;
    deleteSessions(ids: string[]): Promise<boolean>;
    findSessionsByShop(shop: string): Promise<SessionInterface[]>;
}
//# sourceMappingURL=custom.d.ts.map
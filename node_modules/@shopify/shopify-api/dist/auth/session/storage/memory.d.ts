import { SessionInterface } from '../types';
import { SessionStorage } from '../session_storage';
export declare class MemorySessionStorage implements SessionStorage {
    private sessions;
    storeSession(session: SessionInterface): Promise<boolean>;
    loadSession(id: string): Promise<SessionInterface | undefined>;
    deleteSession(id: string): Promise<boolean>;
    deleteSessions(ids: string[]): Promise<boolean>;
    findSessionsByShop(shop: string): Promise<SessionInterface[]>;
}
//# sourceMappingURL=memory.d.ts.map
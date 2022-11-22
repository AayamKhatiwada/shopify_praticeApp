import { SessionInterface } from '../types';
import { SessionStorage } from '../session_storage';
export interface SQLiteSessionStorageOptions {
    sessionTableName: string;
}
export declare class SQLiteSessionStorage implements SessionStorage {
    private filename;
    private options;
    private db;
    private ready;
    constructor(filename: string, opts?: Partial<SQLiteSessionStorageOptions>);
    storeSession(session: SessionInterface): Promise<boolean>;
    loadSession(id: string): Promise<SessionInterface | undefined>;
    deleteSession(id: string): Promise<boolean>;
    deleteSessions(ids: string[]): Promise<boolean>;
    findSessionsByShop(shop: string): Promise<SessionInterface[]>;
    private hasSessionTable;
    private init;
    private query;
}
//# sourceMappingURL=sqlite.d.ts.map
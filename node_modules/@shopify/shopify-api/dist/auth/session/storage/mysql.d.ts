import { SessionInterface } from '../types';
import { SessionStorage } from '../session_storage';
export interface MySQLSessionStorageOptions {
    sessionTableName: string;
}
export declare class MySQLSessionStorage implements SessionStorage {
    private dbUrl;
    static withCredentials(host: string, dbName: string, username: string, password: string, opts: Partial<MySQLSessionStorageOptions>): MySQLSessionStorage;
    readonly ready: Promise<void>;
    private options;
    private connection;
    constructor(dbUrl: URL, opts?: Partial<MySQLSessionStorageOptions>);
    storeSession(session: SessionInterface): Promise<boolean>;
    loadSession(id: string): Promise<SessionInterface | undefined>;
    deleteSession(id: string): Promise<boolean>;
    deleteSessions(ids: string[]): Promise<boolean>;
    findSessionsByShop(shop: string): Promise<SessionInterface[]>;
    disconnect(): Promise<void>;
    private init;
    private hasSessionTable;
    private createTable;
    private query;
}
//# sourceMappingURL=mysql.d.ts.map
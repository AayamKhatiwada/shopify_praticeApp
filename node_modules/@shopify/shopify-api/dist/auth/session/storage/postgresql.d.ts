import { SessionInterface } from '../types';
import { SessionStorage } from '../session_storage';
export interface PostgreSQLSessionStorageOptions {
    sessionTableName: string;
    port: number;
}
export declare class PostgreSQLSessionStorage implements SessionStorage {
    private dbUrl;
    static withCredentials(host: string, dbName: string, username: string, password: string, opts: Partial<PostgreSQLSessionStorageOptions>): PostgreSQLSessionStorage;
    readonly ready: Promise<void>;
    private options;
    private client;
    constructor(dbUrl: URL, opts?: Partial<PostgreSQLSessionStorageOptions>);
    storeSession(session: SessionInterface): Promise<boolean>;
    loadSession(id: string): Promise<SessionInterface | undefined>;
    deleteSession(id: string): Promise<boolean>;
    deleteSessions(ids: string[]): Promise<boolean>;
    findSessionsByShop(shop: string): Promise<SessionInterface[]>;
    disconnect(): Promise<void>;
    private init;
    private connectClient;
    private hasSessionTable;
    private createTable;
    private query;
}
//# sourceMappingURL=postgresql.d.ts.map
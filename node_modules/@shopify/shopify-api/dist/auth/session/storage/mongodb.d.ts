import { SessionInterface } from '../types';
import { SessionStorage } from '../session_storage';
export interface MongoDBSessionStorageOptions {
    sessionCollectionName: string;
}
export declare class MongoDBSessionStorage implements SessionStorage {
    private dbUrl;
    private dbName;
    static withCredentials(host: string, dbName: string, username: string, password: string, opts: Partial<MongoDBSessionStorageOptions>): MongoDBSessionStorage;
    readonly ready: Promise<void>;
    private options;
    private client;
    constructor(dbUrl: URL, dbName: string, opts?: Partial<MongoDBSessionStorageOptions>);
    storeSession(session: SessionInterface): Promise<boolean>;
    loadSession(id: string): Promise<SessionInterface | undefined>;
    deleteSession(id: string): Promise<boolean>;
    deleteSessions(ids: string[]): Promise<boolean>;
    findSessionsByShop(shop: string): Promise<SessionInterface[]>;
    disconnect(): Promise<void>;
    private get collection();
    private init;
    private hasSessionCollection;
    private createCollection;
}
//# sourceMappingURL=mongodb.d.ts.map
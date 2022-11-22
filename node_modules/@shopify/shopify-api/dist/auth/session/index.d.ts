import { Session } from './session';
import { SessionStorage } from './session_storage';
import { MemorySessionStorage } from './storage/memory';
import { CustomSessionStorage } from './storage/custom';
import { MySQLSessionStorage } from './storage/mysql';
import { MongoDBSessionStorage } from './storage/mongodb';
import { PostgreSQLSessionStorage } from './storage/postgresql';
import { RedisSessionStorage } from './storage/redis';
import { SQLiteSessionStorage } from './storage/sqlite';
declare const ShopifySession: {
    Session: typeof Session;
    MemorySessionStorage: typeof MemorySessionStorage;
    CustomSessionStorage: typeof CustomSessionStorage;
    MySQLSessionStorage: typeof MySQLSessionStorage;
    MongoDBSessionStorage: typeof MongoDBSessionStorage;
    PostgreSQLSessionStorage: typeof PostgreSQLSessionStorage;
    RedisSessionStorage: typeof RedisSessionStorage;
    SQLiteSessionStorage: typeof SQLiteSessionStorage;
};
export default ShopifySession;
export { Session, SessionStorage, MemorySessionStorage, CustomSessionStorage, MySQLSessionStorage, MongoDBSessionStorage, PostgreSQLSessionStorage, RedisSessionStorage, SQLiteSessionStorage, };
//# sourceMappingURL=index.d.ts.map
import IDatabase  from "../interface/IDatabase";
import { MongoClient } from "mongodb";
import { mongoDatabaseUri } from "../../global/MongoDatabaseUri";

class MongoDbImpl implements IDatabase {
    async getConnection(): Promise<void> {
        const client = new MongoClient(mongoDatabaseUri);
        try {
            await client.connect();
        } catch (error) {
            console.error(error);
        } finally {
            await client.close();
        }
    }
    
    saveUrl(fullUrl: string): Promise<string> {
        throw new Error("Method not implemented.");
    }

    getFullUrl(fullUrlId: string): Promise<string> {
        throw new Error("Method not implemented.");
    }  
}

export { MongoDbImpl }
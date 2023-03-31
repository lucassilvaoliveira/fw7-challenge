import IDatabase from "../interface/IDatabase";
import { MongoClient } from "mongodb";
import { mongodbUri } from "../../global/mongo_database_uri";

export default class MongoDbImpl implements IDatabase {
    async getConnection(): Promise<void> {
        const client = new MongoClient(mongodbUri);
        try {
            await client.connect();
        } catch (error) {
            console.error(error);
        } finally {
            await client.close();
        }
    }

    getFullUrl(fullUrlId: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    
    saveUrl(): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
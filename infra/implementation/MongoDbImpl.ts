import IDatabase  from "../interface/IDatabase";
import mongoose from "mongoose";
import { MongoClient } from "mongodb";
import { mongoDatabaseUri } from "../../global/MongoDatabaseUri";

class MongoDbImpl implements IDatabase {

    async getConnection(): Promise<void> {
        try {
            await mongoose.connect(mongoDatabaseUri);
            console.log('Database connected successfully!');
        } catch (error) {
            console.log(error);
            console.log('Database connected failed!');
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
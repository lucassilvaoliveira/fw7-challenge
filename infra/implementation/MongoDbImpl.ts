import IDatabase  from "../interface/IDatabase";
import mongoose from "mongoose";
import shortid from "shortid";
import { UrlSchema } from "../mongoSchemas/Url"
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
    
    async saveUrl(fullUrl: string): Promise<string> {
        const shortId = shortid();
        await UrlSchema.create({
            id: shortId,
            fullUrl: fullUrl
        })
        
        return `https://localhost:3001/fw7.${shortId}`
    }

    async getFullUrl(fullUrlId: string): Promise<string> {
        const entry = await UrlSchema.findOne({
            id: fullUrlId
        })
        if (entry?.fullUrl != null) {
            return entry.fullUrl;
        }
        return "no results finded"
    }  
}


export { MongoDbImpl }
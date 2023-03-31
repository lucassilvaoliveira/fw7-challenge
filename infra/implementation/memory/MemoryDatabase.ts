import Url from "../../../core/entities/url";
import IDatabase from "../../interface/IDatabase";
import crypto from "crypto";

class MemoryDatabase implements IDatabase {

    public data: Url[] = []

    private randomUuid = crypto.randomUUID();

    public getRandomUuid() {
        return this.randomUuid;
    }
    
    async getConnection(): Promise<void> {
        console.log("connected successfully");
    }
    
    async saveUrl(fullUrl: string): Promise<string> {
        const shortedUrl = `https://fw7.${this.randomUuid}`;
        this.data.push(new Url(crypto.randomUUID(), fullUrl, shortedUrl));
        return shortedUrl;
    }

    async getFullUrl(fullUrlId: string): Promise<string> {
        const result = this.data.find((url) => {
            return url.getId() == fullUrlId;
        });
        
        if (result != null) {
            return result.getFullUrl();
        }

        return "does not exist an url with this id";
    }
    
}

export { MemoryDatabase }
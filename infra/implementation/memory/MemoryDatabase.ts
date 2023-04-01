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

    async generateUrl(fullUrl: string): Promise<string> {
        return `https://fw7.${this.randomUuid}`;
    }
    
    async saveUrl(fullUrl: string): Promise<string> {
        const shortedUrl = await this.generateUrl(fullUrl);
        this.data.push(new Url(crypto.randomUUID(), fullUrl, shortedUrl));
        return shortedUrl;
    }

    async getFullUrl(shortedUrl: string): Promise<string> {
        const result = this.data.find((url) => {
            return url.shortedUrl == shortedUrl;
        });
        
        if (result != null) {
            return result.fullUrl;
        }

        return "does not exist full url with this shorted url";
    }
    
}

export { MemoryDatabase }
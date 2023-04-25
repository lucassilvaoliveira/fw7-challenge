import { Url } from "../../../core/entities/url"
import IDatabase  from "../../interface/IDatabase";
import crypto from "crypto";

class MemoryDatabase implements IDatabase {

    public data: Url[] = []

    private randomUuid: number = 0;

    private maxRandomNumber: number = 100000000;

    public getRandomUuid() {
        return this.randomUuid;
    }
    
    async getConnection(): Promise<void> {
        console.log("connected successfully");
    }

    generateUrl(): string {
        for (var i = 0; i < 6; i++) {
            this.randomUuid += Math.floor(Math.random() * this.maxRandomNumber);
        }
        return `https://fw7.${this.randomUuid}`;
    }
    
    async saveUrl(fullUrl: string): Promise<string> {
        const shortedUrl = this.generateUrl();
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

        throw new Error("does not exist full url with this shorted url");
    }
    
}

export { MemoryDatabase }
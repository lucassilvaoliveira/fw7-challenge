import IDatabase from "../interface/IDatabase";
import { IShortenUrl } from "../interface/IShortenUrl";

class CreateShortenUrlImpl implements IShortenUrl {

    constructor(
        private iDatabase: IDatabase
    ) {}
    
    async createShortenUrl(fullUrl: string): Promise<string> {
        return await this.iDatabase.saveUrl(fullUrl);
    }

}

export { CreateShortenUrlImpl as ShortenUrlImpl }
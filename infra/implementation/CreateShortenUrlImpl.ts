import IDatabase from "../interface/IDatabase";
import { ICreateShortenUrl } from "../interface/ICreateShortenUrl";

class CreateShortenUrlImpl implements ICreateShortenUrl {

    constructor(
        private iDatabase: IDatabase
    ) {}
    
    async createShortenUrl(fullUrl: string): Promise<string> {
        return await this.iDatabase.saveUrl(fullUrl);
    }

}

export { CreateShortenUrlImpl }
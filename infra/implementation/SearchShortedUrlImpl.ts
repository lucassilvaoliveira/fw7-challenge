import IDatabase  from "../interface/IDatabase";
import { ISearchShortedUrl } from "../interface/ISearchShortedUrl";

class SearchShortedUrlImpl implements ISearchShortedUrl {

    constructor(private iDatabase: IDatabase) {}

    async searchShortedUrl(shortedUrl: string): Promise<string> {
        return await this.iDatabase.getFullUrl(shortedUrl);
    }
}

export { SearchShortedUrlImpl }
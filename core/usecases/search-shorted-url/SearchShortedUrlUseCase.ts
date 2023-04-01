import { ISearchShortedUrl } from "../../../infra/interface/ISearchShortedUrl";

class SearchShortedUrlUseCase {
    constructor(private iSearchShortedUrl: ISearchShortedUrl) {}

    async execute(shortedUrl: string) {
        if (shortedUrl) {
            return await this.iSearchShortedUrl.searchShortedUrl(shortedUrl);
        }
        throw new Error("shorted url is missing")
    }
}

export { SearchShortedUrlUseCase }
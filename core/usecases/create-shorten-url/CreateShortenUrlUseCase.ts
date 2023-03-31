import { IShortenUrl } from "../../../infra/interface/IShortenUrl";
import { urlValidation } from "../../../global/UrlValidation";

class CreateShortenUrlUseCase {
    constructor (private iShortenUrl: IShortenUrl) {}

    async execute(fullUrl: string) {
        if (urlValidation.test(fullUrl)) {
            return await this.iShortenUrl.createShortenUrl(fullUrl);    
        } else {
            throw new Error("This is an invalid URL!");
        }
    }
}

export { CreateShortenUrlUseCase }
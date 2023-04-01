import { ICreateShortenUrl } from "../../../infra/interface/ICreateShortenUrl";
import { urlValidation } from "../../../global/UrlValidation";

class CreateShortenUrlUseCase {
    constructor (private iCreateShortenUrl: ICreateShortenUrl) {}

    async execute(fullUrl: string) {
        if (urlValidation.test(fullUrl)) {
            return await this.iCreateShortenUrl.createShortenUrl(fullUrl);    
        } else {
            throw new Error("This is an invalid URL!");
        }
    }
}

export { CreateShortenUrlUseCase }
import { Request, Response } from "express";
import { SearchShortedUrlUseCase } from "./SearchShortedUrlUseCase";

class SearchShortedUrlController {
    constructor(private searchShortedUrlUseCase: SearchShortedUrlUseCase) {}

    async handle(request: Request, response: Response) {
        const shortedUrl = request.params.shortId;
        if (shortedUrl) {
            try {
                const result = await this.searchShortedUrlUseCase.execute(shortedUrl);
                console.log(result)
                return response.redirect(result);
            } catch (error) {
                
            }
        }
        return response.status(400).json({
            error: '"shortedUrl" is missing!'
        })
    }
}

export { SearchShortedUrlController }
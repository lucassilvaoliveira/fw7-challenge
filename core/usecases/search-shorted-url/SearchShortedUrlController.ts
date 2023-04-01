import { Request, Response } from "express";
import { SearchShortedUrlUseCase } from "./SearchShortedUrlUseCase";

class SearchShortedUrlController {
    constructor(private searchShortedUrlUseCase: SearchShortedUrlUseCase) {}

    async handle(request: Request, response: Response) {
        const { shortedUrl } = request.body;
        if (shortedUrl) {
            try {
                const result = await this.searchShortedUrlUseCase.execute(shortedUrl);
                return response.status(201).json({
                    message: result
                })
            } catch (error) {
                
            }
        }
        return response.status(400).json({
            message: '"shortedUrl" is missing!'
        })
    }
}
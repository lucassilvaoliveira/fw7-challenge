import { Request, Response } from "express";
import { CreateShortenUrlUseCase } from "./CreateShortenUrlUseCase";

class CreateShortenUrlController {
    constructor (
        private shortenUrlUseCase: CreateShortenUrlUseCase
    ) {}

    async handle(request: Request, response: Response) {
        const { fullUrl } = request.body;        
        try {
            const result = await this.shortenUrlUseCase.execute(fullUrl);
            return response.status(201).json({
                message: result
            })
        } catch (error: any) {
            return response.status(400).json({
                message: error.message
            })
        }
    }
}

export { CreateShortenUrlController }

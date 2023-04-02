import { Request, Response } from "express";
import { CreateShortenUrlUseCase } from "./CreateShortenUrlUseCase";

class CreateShortenUrlController {
    constructor (
        private createShortenUrlUseCase: CreateShortenUrlUseCase
    ) {}

    async handle(request: Request, response: Response) {
        const { fullUrl } = request.body;
        if (fullUrl) {
            try {
                const result = await this.createShortenUrlUseCase.execute(fullUrl);
                return response.status(201).json({
                    shortedUrl: result
                })
            } catch (error: any) {
                return response.status(400).json({
                    error: error.message
                })
            }
        } 
        return response.status(400).json({
            message: '"fullUrl" is missing!'
        })      
    }
}

export { CreateShortenUrlController }

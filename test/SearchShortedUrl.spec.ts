import { MemoryDatabase } from "../infra/implementation/memory/MemoryDatabase";
import { CreateShortenUrlUseCase } from "../core/usecases/create-shorten-url/CreateShortenUrlUseCase";
import { SearchShortedUrlUseCase } from "../core/usecases/search-shorted-url/SearchShortedUrlUseCase";
import { CreateShortenUrlImpl } from "../infra/implementation/CreateShortenUrlImpl";
import { SearchShortedUrlImpl } from "../infra/implementation/SearchShortedUrlImpl";

describe("Search Shorted Url", () => {
    it("should be receive an shorted url and return full url", async () => {
        const fullUrl = "https://www.youtube.com/watch?v=THtxQrP3MGo";
        const memoryDatabase = new MemoryDatabase();

        const createShortenUrlUseCase = new CreateShortenUrlUseCase(new CreateShortenUrlImpl(memoryDatabase));

        const shortedUrl = await createShortenUrlUseCase.execute(fullUrl);

        const searchShortedUrlUseCase = new SearchShortedUrlUseCase(new SearchShortedUrlImpl(memoryDatabase));

        const sut = await searchShortedUrlUseCase.execute(shortedUrl);

        expect(sut).toBe(fullUrl)
    })

    it("should be receive an nonexistent url and return error message", async () => {
        const shortedUrl = "https://fw7.669144b1-50d5-4b04-9f10-d4c4cdf8c8cd"
        const memoryDatabase = new MemoryDatabase();

        const searchShortedUrlUseCase = new SearchShortedUrlUseCase(new SearchShortedUrlImpl(memoryDatabase));

        try {
            await searchShortedUrlUseCase.execute(shortedUrl);
        } catch (error) {
            expect(error).toBeInstanceOf(Error)
        }


    })
})
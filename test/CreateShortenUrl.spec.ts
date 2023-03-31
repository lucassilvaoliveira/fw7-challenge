import { CreateShortenUrlUseCase } from "../core/usecases/create-shorten-url/CreateShortenUrlUseCase";
import { MemoryDatabase } from "../infra/implementation/memory/MemoryDatabase";
import { ShortenUrlImpl } from "../infra/implementation/ShortenUrlImpl";

describe("Create Shorten url", () => {
    it("should be receive full url and return transform in shorted", async () => {
        const fullUrl = "https://www.youtube.com/watch?v=ulmcrRyg4yg";
        const memoryDatabase = new MemoryDatabase();
        const createShortenUrlUseCase = new CreateShortenUrlUseCase(new ShortenUrlImpl(memoryDatabase));

        const sut = await createShortenUrlUseCase.execute(fullUrl);

        expect(sut).toBe(`https://fw7.${memoryDatabase.getRandomUuid()}`);
    })

    it("should be return true validate regex url", async () => {
        const fullUrl = "http://fw7.com.br/";
        const memoryDatabase = new MemoryDatabase();
        const createShortenUrlUseCase = new CreateShortenUrlUseCase(new ShortenUrlImpl(memoryDatabase));

        const sut = await createShortenUrlUseCase.execute(fullUrl);
        
        expect(sut).toBeDefined();
    })

    it("should be return false validate regex url", async () => {
        const fullUrl = "ttp://fw7.com.br/";
        const memoryDatabase = new MemoryDatabase();
        const createShortenUrlUseCase = new CreateShortenUrlUseCase(new ShortenUrlImpl(memoryDatabase));

        try {
            await createShortenUrlUseCase.execute(fullUrl);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }

    })
})
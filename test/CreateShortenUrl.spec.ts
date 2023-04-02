import { CreateShortenUrlUseCase } from "../core/usecases/create-shorten-url/CreateShortenUrlUseCase";
import { MemoryDatabase } from "../infra/implementation/memory/MemoryDatabase";
import { CreateShortenUrlImpl } from "../infra/implementation/CreateShortenUrlImpl";

describe("Create Shorten url", () => {
    it("should be receive full url and return transform in shorted", async () => {
        const fullUrl = "https://www.youtube.com/watch?v=ulmcrRyg4yg";
        const memoryDatabase = new MemoryDatabase();
        const createShortenUrlUseCase = new CreateShortenUrlUseCase(new CreateShortenUrlImpl(memoryDatabase));

        const sut = await createShortenUrlUseCase.execute(fullUrl);

        const expectedUrl = `https://fw7.${memoryDatabase.getRandomUuid()}`
        expect(sut).toBe(expectedUrl);
    })

    it("should be return true validate regex url", async () => {
        const fullUrl = "http://fw7.com.br/";
        const memoryDatabase = new MemoryDatabase();
        const createShortenUrlUseCase = new CreateShortenUrlUseCase(new CreateShortenUrlImpl(memoryDatabase));

        const sut = await createShortenUrlUseCase.execute(fullUrl);
        
        expect(sut).toBeDefined();
    })

    it("should be return false validate regex url", async () => {
        const fullUrl = "ttp://fw7.com.br/";
        const memoryDatabase = new MemoryDatabase();
        const createShortenUrlUseCase = new CreateShortenUrlUseCase(new CreateShortenUrlImpl(memoryDatabase));

        try {
            await createShortenUrlUseCase.execute(fullUrl);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    })
})
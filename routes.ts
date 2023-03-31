import Router from "express";
import { CreateShortenUrlController } from "./core/usecases/create-shorten-url/CreateShortenUrlController";
import { CreateShortenUrlUseCase } from "./core/usecases/create-shorten-url/CreateShortenUrlUseCase";
import { MemoryDatabase } from "./infra/implementation/memory/MemoryDatabase";
import { ShortenUrlImpl } from "./infra/implementation/ShortenUrlImpl";

const router = Router();

router.post("/create-shorten-url", async (request, response) => {
    const createShortenUrlController = new CreateShortenUrlController(
                                            new CreateShortenUrlUseCase(
                                                new ShortenUrlImpl(
                                                    new MemoryDatabase())))
    createShortenUrlController.handle(request, response);
});

router.get("/search-shorted-url/:shortedUrl", async (request, response) => {})

export { router }
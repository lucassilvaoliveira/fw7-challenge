import Router from "express";
import { CreateShortenUrlController } from "./core/usecases/create-shorten-url/CreateShortenUrlController";
import { CreateShortenUrlUseCase } from "./core/usecases/create-shorten-url/CreateShortenUrlUseCase";
import { MongoDbImpl } from "./infra/implementation/MongoDbImpl";
import { CreateShortenUrlImpl } from "./infra/implementation/CreateShortenUrlImpl";
import { SearchShortedUrlController } from "./core/usecases/search-shorted-url/SearchShortedUrlController";
import { SearchShortedUrlUseCase } from "./core/usecases/search-shorted-url/SearchShortedUrlUseCase";
import { SearchShortedUrlImpl } from "./infra/implementation/SearchShortedUrlImpl";

const router = Router();

router.post("/create-shorten-url", async (request, response) => {
    const createShortenUrlController = 
    new CreateShortenUrlController(new CreateShortenUrlUseCase(new CreateShortenUrlImpl(new MongoDbImpl())))
    await createShortenUrlController.handle(request, response);
});

router.get("/search-shorted-url/:shortId", async (request, response) => {
    const searchShortedUrlController = 
    new SearchShortedUrlController(new SearchShortedUrlUseCase(new SearchShortedUrlImpl(new MongoDbImpl())))
    await searchShortedUrlController.handle(request, response);
})

export { router }
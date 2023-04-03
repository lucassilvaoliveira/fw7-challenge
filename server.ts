import { app } from "./app";
import { MongoDbImpl } from "./infra/implementation/MongoDbImpl";

const mongoDbImpl = new MongoDbImpl();

mongoDbImpl.getConnection();

app.listen(3001);
import { app } from "./app";
import { MongoDbImpl } from "./infra/implementation/MongoDbImpl";

const mongoDbImpl = new MongoDbImpl();

mongoDbImpl.getConnection();

const port = process.env.PORT || 3001;

app.listen(port);
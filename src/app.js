import express from "express";
import connectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorHandler from "./middlwares/errorHandler.js";

//instância da conexão com o Mongo, colocando await por se tratar de async
const connection = await connectDatabase();

// "error" é um evento do mongoose
connection.on("error", (error) => {
    console.error("Connection error", error);
});

connection.once("open", () => {
    console.log("Connection successfull!");
});

const app = express();

// app.get("/books", (req, res, next) => {
//     console.log("Middleware registrado no GET da rota /books");
//     next();
// });

routes(app);


app.use(errorHandler);

export default app;

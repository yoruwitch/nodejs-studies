// É responsável por gerenciar as rotas da API

import express from "express";
import BookController from "../controllers/bookController.js";

//
const routes = express.Router();

routes.get("/books", BookController.listBooks);
routes.get("/books/search", BookController.listBookByPublisher);
routes.get("/books/:id", BookController.listBookById);
routes.post("/books/", BookController.registerBook);
routes.put("/books/:id", BookController.updateBookById);
routes.delete("/books/:id", BookController.deleteBookById);

export default routes;

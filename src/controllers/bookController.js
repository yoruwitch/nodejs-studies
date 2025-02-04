// Vai ser responsável por ser uma interface intermediária entre as requisições

import { author } from "../models/Author.js";
import book from "../models/Book.js";

class BookController {
    static async listBooks(req, res, next) {
        try {
            /*.find() -> método do mongoose, se conecta com o banco MongoDb, encontrando tudo que tem,
   pois não foi especificado nada */
            const listBooks = await book.find({});
            res.status(200).json(listBooks);
        } catch (error) {
            next(error);
        }
    }
    static async registerBook(req, res, next) {
        
        try {
            //req.body -> corpo da requisição, para usar um POST, precisamos usar o body para enviar como request
            let newBook = new book(req.body);
            
            const authorFound = await author.findById(newBook.author);
            const completeBook = {
                ...newBook,
                author: { ...authorFound._doc },
            };
            await book.create(completeBook);

            res.status(201).json({
                message: "Created successfully",
                book: newBook,
            });
        } catch (error) {
            next(error);
        }
    }
    static async listBookById(req, res, next) {
        try {
            const id = req.params.id;
            /*.findById() -> método do mongoose, se conecta com o banco MongoDb, encontrando pelo ID */
            const foundBook = await book.findById(id);
            res.status(200).json(foundBook);
        } catch (error) {
            next(error);
        }
    }
    static async updateBookById(req, res, next) {
        try {
            const id = req.params.id;

            /*.findByIdAndUpdate() -> método do mongoose, se conecta com o banco MongoDb,
             encontrando pelo ID e atualizando o registro. A função precisa do ID e do body da requisição para
             saber o que precisa ser atualizado */
            await book.findByIdAndUpdate(id, req.body);

            res.status(200).json({
                message: "The book has been updated successfully",
            });
        } catch (error) {
            next(error);
        }
    }
    static async deleteBookById(req, res, next) {
        try {
            const id = req.params.id;

            /*.findByIdAndUpdate() -> método do mongoose, se conecta com o banco MongoDb,
             encontrando pelo ID e atualizando o registro. A função precisa do ID e do body da requisão para
             saber o que precisa ser atulizado */
            await book.findByIdAndDelete(id);

            res.status(200).json({
                message: "The book has been deleted successfully",
            });
        } catch (error) {
            next(error);
        }
    }

    static async listBookByPublisher(req, res, next) {
        // req.query -> query string da requisição, para filtrar os livros pelo publisher
        const publisher = req.query.publisher;
        try {
            const booksByPublisher = await book.find({
                publisher: publisher,
            });
            res.status(200).json(booksByPublisher);
        } catch (error) {
            next(error);
        }
    }
}
export default BookController;

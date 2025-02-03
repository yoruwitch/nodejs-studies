// Vai ser responsável por ser uma interface intermediária entre as requisições

import { author } from "../models/Author.js";

class AuthorController {
    static async listAuthors(req, res) {
        try {
            const listAuthors = await author.find({});
            res.status(200).json(listAuthors);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Request failed`,
            });
        }
    }
    static async registerAuthor(req, res) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({
                message: "Created successfully",
                book: newAuthor,
            });
        } catch (error) {
            res.status(500).json({
                message: `Failed to register new author: ${error.message}`,
            });
        }
    }
    static async listAuthorById(req, res) {
        try {
            const id = req.params.id;
            const authorFound = await author.findById(id);
            res.status(200).json(authorFound);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Request failed fetching an author`,
            });
        }
    }
    static async updateAuthorById(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: "The author has been updated successfully",
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Request failed updating an author`,
            });
        }
    }
    static async deleteAuthorsById(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(200).json({
                message: "The author has been deleted successfully",
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Request failed deleting the author`,
            });
        }
    }
}

export default AuthorController;

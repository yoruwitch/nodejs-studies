import mongoose from "mongoose";

/* -> Schema é um objeto de configuração que define a estrutura
  e as propriedades de um documento
*/
const bookSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        title: {
            type: String,
            required: [true, "The name of the book is required"],
        },
        publisher: {
            type: String,
            required: [true, "The name of the publisher is required"],
        },
        price: { type: Number },
        pages: { type: Number },

        // esse Schema se refere ao model para integrar as duas entidades
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "authors",
            required: [true, "The author is required"],
        },
    },
    { versionKey: false }
);

/* -> O primeiro parâmetro é o nome da coleção criada e o segundo parâmetro
se refere ao Schema criado anteriormente
*/

// -> Um modelo é um objeto que representa uma coleção na base de dados

const book = mongoose.model("books", bookSchema);

export default book;

import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        name: {
            type: String,
            // podemos usar um array em que a segunda posição pode ser uma mensagem erro 
            required: [true, "The name of the author is required"],
        },
        nationality: { type: String },
    },
    { versionKey: false }
);

const author = mongoose.model("authors", authorSchema);
export { author, authorSchema };

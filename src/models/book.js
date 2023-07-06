const mongoose = require("mongoose");
const Author = require("./author");

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        authorId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Author' 
        },
        price: {
            type: Number,
            required: true
        },
        isbn: {
            type: String,
            required: true,
            unique: true
        },
        language: {
            type: String,
            required: true
        },
        pages: {
            type: Number,
            required: true
        },
        publisher: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
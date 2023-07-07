const mongoose = require("mongoose");
const connectTestDb = require("../config/testDbConnection");
const Book = require("../../src/models/book");
const Author = require("../../src/models/author");

connectTestDb()
    // Delete all books
    .then(() => {
        return Book.deleteMany({});
    })
    .then(async () => {
        const authors = await Author.find();
        const booksData = [
            {
                title: "The Fellowship of the Ring",
                authorId: authors[0]._id,
                price: 17.85,
                isbn: "978-0261102354",
                language: "English",
                pages: 576,
                publisher: "HarperCollins"
            },
            {
                title: "The Two Towers",
                authorId: authors[0]._id,
                price: 15.20,
                isbn: "978-0547928203",
                language: "English",
                pages: 352,
                publisher: "HarperCollins"
            },
            {
                title: "The Return of the King",
                authorId: authors[0]._id,
                price: 16.15,
                isbn: "978-0261102378",
                language: "English",
                pages: 464,
                publisher: "HarperCollins"
            }
        ];
        // Seed new author data
        Book.insertMany(booksData)
        .then((books) => {
          console.log('Books created successfully');
          console.log(books);
          mongoose.disconnect();
        })
        .catch((error) => {
          console.error(error);
          mongoose.disconnect();
        });
    })
    .catch((error) => {
        console.error("Error retrieving authors:", error);
        mongoose.disconnect();
    });
const mongoose = require("mongoose");
const connectTestDb = require("../config/testDbConnection");
const Book = require("../../src/models/book");

connectTestDb()
    // Delete all books
    .then(() => {
        return Book.deleteMany({});
    })
    .then(() => {
        const booksData = [
            {
                title: "The Fellowship of the Ring",
                authorId: "64a72b4bff08decf4a1afd8a",
                price: 17.85,
                isbn: "978-0261102354",
                language: "English",
                pages: 576,
                publisher: "HarperCollins"
            },
            {
                title: "The Two Towers",
                authorId: "64a72b4bff08decf4a1afd8a",
                price: 15.20,
                isbn: "978-0547928203",
                language: "English",
                pages: 352,
                publisher: "HarperCollins"
            },
            {
                title: "The Return of the King",
                authorId: "64a72b4bff08decf4a1afd8a",
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
    });
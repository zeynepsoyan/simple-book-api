const mongoose = require("mongoose");
const connectDb = require("../config/dbConnection");
const Author = require("../models/author");

connectDb()
    // Delete all author entries
    .then(() => {
        return Author.deleteMany({});
    })
    .then(() => {
        const authorsData = [
            {
                name: "J.R.R. Tolkien",
                country: "South Africa",
                birthDate: new Date('1892-01-03')
            },
            {
                name: "Agatha Christie",
                country: "England",
                birthDate: new Date('1890-09-15')
            },
            {
                name: "J.K. Rowling",
                country: "England",
                birthDate: new Date('1965-07-31')
            }
        ];
        // Seed new author data
        Author.insertMany(authorsData)
        .then((authors) => {
          console.log('Authors created successfully');
          console.log(authors);
          mongoose.disconnect();
        })
        .catch((error) => {
          console.error(error);
          mongoose.disconnect();
        });
    });
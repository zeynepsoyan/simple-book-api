const express = require("express");
const mongoose = require("mongoose");
const connectDb = require("./config/dbConnection");

const app = express();
app.use(express.json());
app.use("/api/books", require("./routes/booksRoutes"));

connectDb();

const PORT = 8080;
// Start the application.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
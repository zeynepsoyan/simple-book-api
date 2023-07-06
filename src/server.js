const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");

const app = express();
app.use(express.json());
app.use("/api/books", require("./routes/booksRoutes"));

connectDb();

const PORT = process.env.NODE_LOCAL_PORT || 8080;
// Start the application.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
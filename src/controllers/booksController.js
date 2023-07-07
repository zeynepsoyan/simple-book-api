const mongoose = require('mongoose');
const Book = require("../models/book");
const Author = require("../models/author");

// GET /books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find()
        return res.status(200).json(books);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}

// POST /books
const createBook = async (req, res) => {
    try {
        const { title, authorId, price, isbn, language, pages, publisher } = req.body;

        // Validate author
        await validateAuthor(authorId);

        // Create and store new book
        const book = await Book.create({title, authorId, price, isbn, language, pages, publisher});
        if (book) { // created
            return res.status(201).json({message: `New book ${title} created`, book});
        }
        res.status(400).json({message: "Invalid book data received"});
    }
    catch (error) {
        console.error("Error creating book:", error);
        res.status(500).json({ message: `Failed to create book. ${error}`});
    }
}

// PUT /books:isbn
const updateBook = async (req, res) => {
    try {
        const { isbn } = req.params;
        const { title, authorId, price, language, pages, publisher } = req.body;

        // Validate author
        await validateAuthor(authorId);

        // Update book
        const updatedBook = await Book.findOneAndUpdate({isbn}, { title, authorId, price, language, pages, publisher }, { new: true }).exec();
        if (updatedBook) {
            return res.status(200).json({ message: `Book ${title} (id: ${isbn}) updated successfully`, updatedBook });
        }
        console.log(`Book with ISBN: ${isbn} not found.`);
        res.status(404).json({ message: `Book with ISBN: ${isbn} not found.`});
    }
    catch (error) {
        console.error("Error updating book:", error);
        res.status(500).json({ message: `Failed to update book. ${error}`});
    }
}

// DELETE /books/:isbn
const deleteBook = async (req, res) => {
    try {
        const { isbn } = req.params;
  
        // Find and delete the book
        const deletedBook = await Book.findOneAndDelete({ isbn }).exec();
        if (deletedBook) {
            return res.status(200).json({ message: `Book ${deletedBook.title} (ISBN: ${isbn}) deleted successfully` });
        }
        res.status(404).json({ message: `Book with ISBN: ${isbn} not found` });
    } 
    catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).json({ message: `Failed to delete book. ${error}`});
    }
};


// Validate author by id
const validateAuthor = async (authorId) => {
    
    // Validate authorId
    if (!mongoose.Types.ObjectId.isValid(authorId)) {
        throw new Error(`Invalid author id: ${authorId}`);
    }

    const author = await Author.findById(authorId).exec();
    if (!author) {
      throw new Error(`Author with id ${authorId} does not exist.`);
    }
};

module.exports = {getAllBooks, createBook, updateBook, deleteBook};
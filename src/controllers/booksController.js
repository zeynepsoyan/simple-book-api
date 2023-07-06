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
            return res.status(201).json({message: `New book ${title} created`});
        }
        res.status(400).json({message: "Invalid book data received"});
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}

// PUT /books:id
const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, authorId, price, isbn, language, pages, publisher } = req.body;

        //Validate book id
        await validateObjectId(id);

        // Validate author
        await validateAuthor(authorId);

        // Update book
        const updatedBook = await Book.findByIdAndUpdate(id, { title, authorId, price, isbn, language, pages, publisher }, { new: true }).exec();
        if (updatedBook) {
            return res.status(200).json({ message: `Book ${title} (id: ${id}) updated successfully`, updatedBook });
        }
        res.status(404).json({ message: `Book with id ${id} not found.`});
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}

// DELETE /books/:id
const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
    
        //Validate book id
        await validateObjectId(id);
  
        // Find and delete the book
        const deletedBook = await Book.findByIdAndDelete(id).exec();
        if (deletedBook) {
            return res.status(200).json({ message: `Book ${deletedBook.title} (id: ${id}) deleted successfully` });
        }
        res.status(404).json({ message: `Book with id ${id} not found` });
    } 
    catch (error) {
        res.status(500).send(error.message);
    }
};


// Validate author by id
const validateAuthor = async (authorId) => {
    await validateObjectId(authorId);
    const author = await Author.findById(authorId).exec();
    if (!author) {
      throw new Error(`Author with id ${authorId} does not exist.`);
    }
};

// Validate object id
const validateObjectId = async (objectId) => {
    if (!mongoose.Types.ObjectId.isValid(objectId)) {
        throw new Error(`Invalid id: ${objectId}`);
    }
}

module.exports = {getAllBooks, createBook, updateBook, deleteBook};
const mongoose = require('mongoose');
const Author = require("../models/author");

// GET /authors
const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find()
        return res.status(200).json(authors);
    }
    catch (error) {
        console.error("Error getting authors:", error);
        res.status(500).send(error.message);
    }
}

module.exports = {getAllAuthors};
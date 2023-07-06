const mongoose = require("mongoose");

const authorSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        birthDate: {
            type: Date,
            required: true
        }
    },
    { timestamps: true }
)

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
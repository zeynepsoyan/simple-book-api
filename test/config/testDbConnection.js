const mongoose = require("mongoose");

const connectTestDb = async () => {
    try {
        await mongoose.connect("mongodb://mongodb:27017/book-api-test", 
        {
            useNewUrlParser: true, useUnifiedTopology: true
        });
        console.log("Connected to MongoDB Test.")
    }
    catch (error) {
        console.error("Cannot connect to test database.", error.message);
        process.exit();
    }
}

module.exports = connectTestDb;
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectTestDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_TEST_URI, 
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
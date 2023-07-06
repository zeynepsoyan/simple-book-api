const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, 
        {
            useNewUrlParser: true, useUnifiedTopology: true
        });
        console.log("Connected to MongoDB.")
    }
    catch (error) {
        console.error("Cannot connect to database.", error.message);
        process.exit();
    }
}

module.exports = connectDb;
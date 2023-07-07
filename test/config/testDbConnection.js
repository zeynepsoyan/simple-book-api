const mongoose = require("mongoose");

const connectTestDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://zhs:dgTMEBteSfeE5PNn@cluster0.adzp0zk.mongodb.net/hbx-API-test?retryWrites=true&w=majority", 
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
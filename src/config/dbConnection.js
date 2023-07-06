const mongoose = require("mongoose");
const uri = "mongodb+srv://zhs:dgTMEBteSfeE5PNn@cluster0.adzp0zk.mongodb.net/hbx-API?retryWrites=true&w=majority";

const connectDb = async () => {
    try {
        await mongoose.connect(uri, 
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
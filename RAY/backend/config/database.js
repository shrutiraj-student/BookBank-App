const mongoose = require('mongoose');
require('dotenv').config();



async function dbConnection() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        
        console.log("Database connection established");
    } 
    catch (error) {
        console.warn("Error connecting to MongoDB");
        console.log(error.message);
        process.exit(1);

    }
}

module.exports = dbConnection;
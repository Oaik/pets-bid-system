const mongoose = require('mongoose');

module.exports.dbConnect = async function() {
    try {
        await mongoose.connect(process.env.dburl);
        console.log("Database connected successfully");
    } catch(error) {
        console.error("error while connecting with mongoose", error)
        throw error;
    }
}
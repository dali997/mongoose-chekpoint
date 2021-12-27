const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/body'),
        console.log("database is running ")
      } catch (error) {
        handleError(error);
      }
}

module.exports = connectDB
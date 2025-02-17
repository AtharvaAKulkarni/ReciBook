// config/db.js
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    console.log("In Connect db");
    console.log("Showing link here: ");
    console.log(process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;

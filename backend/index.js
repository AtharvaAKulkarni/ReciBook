console.log("Welcome to Backend!");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const connectDB = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));  
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// ✅ Serve static images from the uploads folder
app.use("/uploads", express.static("uploads"));

console.log(process.env.MONGO_URI);

app.get("/", (req, res) => {
  res.send("Welcome to backend");
});

connectDB();

app.use("/", authRoutes);
app.use("/", userRoutes);
app.use("/", recipeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});

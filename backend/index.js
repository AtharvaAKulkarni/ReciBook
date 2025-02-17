console.log("Welcome to Backend!");
const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path');
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://reci-book-wmjj.vercel.app"); // Allow frontend domain
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  if (req.method === "OPTIONS") {
    return res.sendStatus(200); // Handle CORS preflight requests
  }

  next();
});

app.use(cors({
  origin: "https://reci-book-wmjj.vercel.app", // or replace "*" with your frontend URL: ""
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true
}));
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const connectDB = require("./config/db");


app.use(express.json({ limit: "50mb" }));  
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// ✅ Serve static images from the uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


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

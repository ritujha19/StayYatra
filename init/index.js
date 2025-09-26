require('dotenv').config(); // Load environment variables
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

const uri = process.env.MONGO_URI; // ✅ gets from .env

if (!uri) {
  console.error("❌ MongoDB URI is missing. Check your .env file.");
  process.exit(1);
}

mongoose.connect(uri)
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));


const initDB = async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();
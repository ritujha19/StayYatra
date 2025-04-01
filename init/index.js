const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

mongoose.connect('mongodb+srv://ritu05491:ritu2312@myproject.chwmz.mongodb.net/?retryWrites=true&w=majority&appName=myProject')
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => console.error('❌ MongoDB connection error:', err));

const initDB = async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();
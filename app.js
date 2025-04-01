const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const cors = require("cors");

// Database connection
mongoose.connect('mongodb+srv://ritu05491:ritu2312@myproject.chwmz.mongodb.net/?retryWrites=true&w=majority&appName=myProject')
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => console.error('❌ MongoDB connection error:', err));

app.get("/",(req,res)=>{
    res.send("welcome to wanderlust");
});

app.get("/testListing", async(req,res)=>{
    let sampleListing = new Listing({
        title: "My New Villa",
        description: "See City View from window of villa",
        price: 1200,
        location: "mumbai, maharashtra",
        country: "India"
    });
    let result = await sampleListing.save();
    console.log(result);
    res.send("successful saved");
});

app.listen(2020,()=>{
    console.log("server is connected on port 2020");
});

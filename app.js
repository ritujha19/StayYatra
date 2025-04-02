const express = require("express");
const app = express();
const ejs = require("ejs");
const ejsMate = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const listingRoute = require("./routes/listingRoute.js");
const cors = require("cors");

// Database connection
mongoose.connect('mongodb+srv://ritu05491:ritu2312@myproject.chwmz.mongodb.net/?retryWrites=true&w=majority&appName=myProject')
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => console.error('❌ MongoDB connection error:', err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(cors());

app.get("/",(req,res)=>{
    res.send("welcome to wanderlust");
});

//index route
app.get("/listing", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings }); // Corrected the path
});

//show route
app.get("/listing/:id/show", async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing }); 
});

//create route
app.get("/listing/new", (req, res) => {
    res.render("listings/new.ejs");
});

//post route
app.post("/Listing", async(req,res)=>{
    const newListing = new Listing(req.body);
    await newListing.save();
    res.redirect("/listing");
});

//edit route
app.get("/listing/:id/edit", async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
});

//update route
app.put("/listing/:id", async (req, res) => {
    let { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send("Invalid ID format");
    }

    // Ensure req.body.listing exists
    if (!req.body.listing) {
        return res.status(400).send("Missing listing data");
    }

    console.log(id);
    try {
        await Listing.findByIdAndUpdate(id, { ...req.body.listing });
        res.redirect(`/listing/${id}/show`); // Interpolate the id value
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating listing");
    }
});

//delete route
app.delete("/listing/:id", async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listing");
});

app.listen(2020,()=>{
    console.log("server is connected on port 2020");
});

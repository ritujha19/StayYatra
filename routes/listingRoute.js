const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const expressError = require("../utils/expressError.js").default;
const { listingSchema } = require("../schema.js");

// Validate req.body.listing
const validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);
    if(error) {
        const errMsg = error.details.map((el) => el.message).join(",");
        throw new expressError(400, errMsg);
    }else{
        next();
    }
};

const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl;
    return res.redirect('/login');
  }
  next();
};

//index route
router.get("/",
    wrapAsync(async (req, res) => {
        const allListings = await Listing.find({});
        res.render("listings/index.ejs", { allListings }); // Corrected the path
    })
);

//show route
router.get(
    "/:id/show",
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        const listing = await Listing.findById(id).populate("reviews");
        res.render("listings/show.ejs", { listing }); 
    })
);

//create route
router.get("/new",isLoggedIn, (req, res) => {
    res.render("listings/new.ejs");
});

//post route
router.post(
    "/",isLoggedIn,
    validateListing,
    wrapAsync(async (req, res) => {    
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listing");
    })
);

//edit route
router.get(
    "/:id/edit",
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        const listing = await Listing.findById(id);
        res.render("listings/edit.ejs", { listing });
    })
);

//update route
router.put(
    "/:id", 
    validateListing,
    wrapAsync(async (req, res) => {
        let { id } = req.params;
        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new expressError(400, "Invalid ObjectId");
        }
            await Listing.findByIdAndUpdate(id, { ...req.body.listing });
            res.redirect(`/listing/${id}/show`); // Interpolate the id value
    })
);

//delete route
router.delete(
    "/:id",
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        await Listing.findByIdAndDelete(id);
        res.redirect("/listing");
    })
);

// Export the router
module.exports = router;
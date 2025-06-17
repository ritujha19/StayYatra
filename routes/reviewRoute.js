const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const expressError = require("../utils/expressError.js").default;
const { reviewSchema } = require("../schema.js");
const Review = require("../models/reviews.js");

// Validate req.body.review
const validateReview = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body);
    if(error) {
        const errMsg = error.details.map((el) => el.message).join(",");
        throw new expressError(400, errMsg);
    }else{
        next();
    }
};

// post route
router.post(
    "/",
    validateReview,
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        const listing = await Listing.findById(id);
        const review = new Review(req.body.review);
        listing.reviews.push(review);
        await review.save();
       let result = await listing.save();
       console.log(result);
        res.redirect(`/listing/${id}/show`);
    })
);

// delete review route
router.delete("/:reviewId", wrapAsync( async(req,res)=>{
    let { id, reviewId }= req.params;
    await Listing.findByIdAndUpdate(id,  {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listing/${id}/show`);
} ));

module.exports = router;
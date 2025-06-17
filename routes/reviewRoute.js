const express = require("express");
const router = express.Router({ mergeParams: true }); // Important: add mergeParams
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");

// POST - Create review
router.post(
    "/",
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        let listing = await Listing.findById(id);
        let review = new Review(req.body.review);
        listing.reviews.push(review);
        await review.save();
        await listing.save();
        req.flash("success", "Review created successfully!");
        res.redirect(`/listing/${id}/show`);
    })
);

// DELETE - Delete review
router.delete(
    "/:reviewId",
    wrapAsync(async (req, res) => {
        try {
            const { id, reviewId } = req.params;
            console.log("Deleting review:", reviewId, "from listing:", id);

            await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
            await Review.findByIdAndDelete(reviewId);

            req.flash("success", "Review deleted successfully!");
            res.redirect(`/listing/${id}/show`);
        } catch (error) {
            console.error("Error deleting review:", error);
            req.flash("error", "Failed to delete review");
            res.redirect(`/listing/${id}/show`);
        }
    })
);

module.exports = router;
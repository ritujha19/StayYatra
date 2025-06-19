const express = require("express");
const router = express.Router({ mergeParams: true }); // Merge parent :id param
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isReviewAuthor } = require("../middleware");

// CREATE review - Any logged-in user can create
router.post(
  "/",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    const review = new Review(req.body.review);
    review.author = req.user._id; // ✅ Save author
    await review.save();

    listing.reviews.push(review);
    await listing.save();

    req.user.userReview.push(review._id); // ✅ Optional: link back to user
    await req.user.save();

    req.flash("success", "Review created successfully!");
    res.redirect(`/listing/${id}/show`);
  })
);

// DELETE review - Only the author can delete
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review deleted successfully!");
    res.redirect(`/listing/${id}/show`);
  })
);

module.exports = router;

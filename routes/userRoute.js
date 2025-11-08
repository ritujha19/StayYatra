const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Listing = require("../models/listing");
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn } = require("../middleware");
const user = require("../models/user");

// ✅ Update profile page
router.get("/profile", isLoggedIn, (req, res) => {
  res.render("users/profile", { user: req.user });
});

// ✅ Update profile
router.put(
  "/profile",
  wrapAsync(async (req, res) => {
    if (!req.user) {
      if (req.xhr || req.headers.accept.includes("json")) {
        return res
          .status(401)
          .json({ success: false, message: "Not authenticated" });
      }
      req.flash("error", "You must be logged in.");
      return res.redirect("/login");
    }

    const { username, email } = req.body;
    const user = await User.findById(req.user._id);
    if (username && username !== user.username) user.username = username;
    if (email) user.email = email;
    await user.save();

    req.flash("success", "Profile updated successfully!");
    res.redirect("/user/profile");
  })
);

// ✅ My Listings page
router.get(
  "/my-listings",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const user = await User.findById(req.user._id).populate("userListing");
    res.render("users/listing/index.ejs", { listings: user.userListing });
  })
);

router.get(
  "/listing/:id/show",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id)
      .populate({
        path: "reviews",
        populate: {
          path: "author",
        },
      })
      .populate("owner");

    res.render("users/listing/show.ejs", { listing });
  })
);


router.get("/my-reviews", isLoggedIn, wrapAsync(async (req, res) => {
  try {
    // Find all reviews by this user
    const user = await User.findById(req.user._id)
      .populate({
        path: "userReview",
        populate: { path: "listing" },
      })
      .sort({ createdAt: -1 });

    res.render("users/myReviews.ejs", { user });
  } catch (error) {
    console.log(error);
    res.render("users/myReviews", { user: [] });
  }
}));

router.get("/mybookings", isLoggedIn, wrapAsync(async (req, res) => {
    const user = await User.findById(req.user._id)
        .populate({
            path: 'userBooking',
            populate: {
                path: 'listing',
                select: 'title price location image'
            }
        });
    res.render("users/booking/myBookedNivaas", { 
        user,
        userBooking: user.userBooking.map(booking => booking.listing)
    });
}))
module.exports = router;

const express = require('express');
const router = express.Router();
const User = require('../models/user');
// const Listing = require('../models/listing');
// const Review = require('../models/reviews');
const { isLoggedIn } = require('../middleware');

// ✅ Update profile page
router.get('/profile', isLoggedIn, (req, res) => {
  res.render('users/profile', { user: req.user });
});

// ✅ My Listings page
router.get('/my-listings', isLoggedIn, async (req, res) => {
  const user = await User.findById(req.user._id).populate('userListing');
  res.render('users/myListings', { listings: user.userListing });
});

// ✅ My Reviews page
router.get('/my-reviews', isLoggedIn, async (req, res) => {
  const user = await User.findById(req.user._id).populate('userReview');
  res.render('users/myReviews', { reviews: user.userReview });
});

module.exports = router;

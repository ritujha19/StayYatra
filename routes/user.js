const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/user');
const wrapAsync = require('../utils/wrapAsync');
const expressError = require('../utils/expressError');
// const Listing = require('../models/listing');
// const Review = require('../models/reviews');
const { isLoggedIn } = require('../middleware');

// ✅ Update profile page
router.get('/profile', isLoggedIn, (req, res) => {
  res.render('users/profile', { user: req.user });
});

// ✅ Update profile form submission
router.put('/profile', wrapAsync(async (req, res) => {
  const { username, email } = req.body;
  const user = await User.findById(req.user._id);
  if (username && username !== user.username) user.username = username;
  if (email) user.email = email;
  await user.save();
  if (req.xhr || req.headers.accept.indexOf('json') > -1) {
    return res.json({ success: true });
  }
  req.flash('success', 'Profile updated successfully!');
  res.redirect(`/user/profile`);
}));

// ✅ My Listings page
router.get('/my-listings', isLoggedIn, async (req, res) => {
  const user = await User.findById(req.user._id).populate('userListing');
  res.render('users/listing/index.ejs', { listings: user.userListing });
});

// ✅ My Reviews page
router.get('/my-reviews', isLoggedIn, async (req, res) => {
  const user = await User.findById(req.user._id).populate('userReview');
  res.render('users/myReviews', { reviews: user.userReview });
});

module.exports = router;

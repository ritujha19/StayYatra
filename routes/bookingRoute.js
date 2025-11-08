const express = require('express');
const router = express.Router();
const Listing = require("../models/listing.js");
const Booking = require("../models/booking.js");
const wrapAsync = require("../utils/wrapAsync.js");
const expressError = require("../utils/expressError.js");
const { bookingSchema } = require("../schema.js");
const { isLoggedIn } = require("../middleware");


const validateBooking = (req, res, next) => {
  const { error } = bookingSchema.validate(req.body); 
  if (error) {
    const errMsg = error.details.map((el) => el.message).join(",");
    throw new expressError(400, errMsg);
  } else {
    next();
  }
};

//geet book router
router.get('/', isLoggedIn, wrapAsync(async (req, res) => {
    const id = res.locals.id; // Get ID from res.locals
    const listing = await Listing.findById(id);
    
    if (!listing) {
        req.flash('error', 'Listing not found');
        return res.redirect('/listing');
    };
    res.render('users/listing/bookForm', { listing });
}));

// post booking router
router.post('/', isLoggedIn, validateBooking, wrapAsync(async (req, res) => {
    const id = res.locals.id; // Get ID from res.locals
    const userId = req.user._id;
    const { checkin, checkout, adults, children, price } = req.body.booking;
    
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash('error', 'Listing not found');
        return res.redirect('/listing');
    };

    const newBooking = new Booking({
        checkin,
        checkout,
        adults,
        children,
        price,
        listing: id,
        user: userId
    });
    await newBooking.save();
    
    req.user.userBooking.push(newBooking._id);
    await req.user.save();
    
    req.flash('success', 'Booking confirmed!');
    res.redirect('/user/mybookedNivaas');
}));

module.exports = router;
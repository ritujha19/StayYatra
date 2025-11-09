const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const Booking = require("../models/booking.js");
const User = require("../models/user.js"); // Add this line
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

// GET - Show booking form
router.get(
  "/create/:listingId",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const { listingId } = req.params; // Get ID directly from URL
    const listing = await Listing.findById(listingId);

    if (!listing) {
      req.flash("error", "Listing not found");
      return res.redirect("/listing");
    }
    res.render("users/booking/bookForm", { listing });
  })
);

// POST - Create new booking
router.post(
  "/create/:listingId",
  isLoggedIn,
  validateBooking,
  wrapAsync(async (req, res) => {
    const { listingId } = req.params; // Get ID directly from URL
    const userId = req.user._id;
    const { checkin, checkout, adults, children, price } = req.body.booking;

    const listing = await Listing.findById(listingId);
    if (!listing) {
      req.flash("error", "Listing not found");
      return res.redirect("/listing");
    }

    const newBooking = new Booking({
      checkin,
      checkout,
      adults,
      children,
      price,
      listing: listingId,
      user: userId,
    });
    await newBooking.save();

    req.user.userBooking.push(newBooking._id);
    await req.user.save();

    req.flash("success", "Booking confirmed!");
    res.redirect("/user/mybookings");
  })
);

//edit booking route
router.get(
  "/:id/edit",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const booking = await Booking.findById(id).populate({
      path: "listing",
      select: "title price", // Select the fields you need
    });

    if (!booking) {
      req.flash("error", "Booking not found");
      return res.redirect("/user/mybookedNivaas");
    }

    res.render("users/booking/editBooking", {
      booking,
      listing: booking.listing, // Pass the listing separately
    });
  })
);

//update booking route
router.put(
  "/:id/edit",
  isLoggedIn,
  validateBooking,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const { checkin, checkout, adults, children, price } = req.body.booking;
    await Booking.findByIdAndUpdate(id, { ...req.body.booking });
    req.flash("success", "Booking updated successfully");
    res.redirect("/user/mybookings");
  })
);

// Add DELETE route
router.delete(
  "/:id",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Booking.findByIdAndDelete(id);

    // Remove booking from user's bookings array
    await User.findByIdAndUpdate(req.user._id, {
      $pull: { userBooking: id },
    });

    req.flash("success", "Booking cancelled successfully");
    res.redirect("/user/mybookings");
  })
);

module.exports = router;

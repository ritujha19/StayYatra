const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const expressError = require("../utils/expressError.js");
const { listingSchema } = require("../schema.js");
const { isLoggedIn, isOwner } = require("../middleware"); // ✅ Import middleware
const { render } = require("ejs");

// Validate req.body.listing
const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  if (error) {
    const errMsg = error.details.map((el) => el.message).join(",");
    throw new expressError(400, errMsg);
  } else {
    next();
  }
};

// INDEX - Anyone can view
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  })
);

// SHOW - Anyone can view, populate owner & review authors
router.get(
  "/:id/show",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id)
    .populate({
      path: 'reviews',
      populate: {
        path: 'author'
      }
    })
    .populate('owner');

      res.render("listings/show.ejs", { listing });
    })
);

// NEW - Only logged-in can access form
router.get("/new", isLoggedIn, (req, res) => {
  res.render("listings/new.ejs");
});

// CREATE - Only logged-in can create
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id; // ✅ Save owner
    await newListing.save();

    req.user.userListing.push(newListing._id); // ✅ Add to user
    await req.user.save();

    res.redirect("/user/my-listings");
  })
);

// EDIT - Only owner can edit
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("users/listing/edit.ejs", { listing });
  })
);

// UPDATE - Only owner can update
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new expressError(400, "Invalid ObjectId");
    }
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/user/listing/${id}/show`);
  })
);

// DELETE - Only owner can delete
router.delete(
  "/:id",
  isLoggedIn,
 isOwner,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/user/my-listings");
  })
);

// async function deleteAll() {
//   try{

//     await Listing.deleteMany({});
//     console.log("All documents deleted");

//     await mongoose.connection.close();
//   } catch (err) {
//     console.error("Error deleting documents:", err);
//   }
// }

// deleteAll();
//book router
router.get('/:id/book', isLoggedIn, wrapAsync(async (req, res) => {
  const id = req.params.id;
  const listing = await Listing.findById(id);
  res.render('users/listing/book', { listing });
}))
module.exports = router;

const Listing = require('./models/listing');
const Review = require('./models/reviews');

// ✅ Check if user is logged in
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl;
    req.flash('error', 'You must be signed in!');
    if (req.query.mode === 'register') {
      req.flash('triggerRegisterModal', true);
    } else {
      req.flash('triggerLoginModal', true);
    }
    // Redirect back to the page the user was on
    return res.redirect('/listing'); // or res.redirect(req.originalUrl);
  }
  next();
};

// ✅ Check if current user is the listing owner
module.exports.isOwner = async (req, res, next) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash('error', 'Listing not found!');
    return res.redirect('/listing');
  }
  if (!req.user || !listing.owner || !listing.owner.equals(req.user._id)) {
    req.flash('error', 'You do not have permission!');
    return res.redirect(`/listing/${id}/show`);
  }
  next();
};

// ✅ Check if current user is the review author
module.exports.isReviewAuthor = async (req, res, next) => {
  const { reviewId, id } = req.params;
  const review = await Review.findById(reviewId);
  if (!review.author.equals(req.user._id)) {
    req.flash('error', 'You do not have permission to do that!');
    return res.redirect(`/listing/${id}/show`);
  }
  next();
};

// ✅ Set res.locals for user & flash messages - FIXED
module.exports.setLocals = (req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.triggerLoginModal = req.flash('triggerLoginModal')[0];
  res.locals.triggerRegisterModal = req.flash('triggerRegisterModal')[0];    
  next();
};
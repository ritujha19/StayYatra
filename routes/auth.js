const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

// POST - Login user (custom callback)
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      req.flash('loginError', info.message); // Use a special key for login errors
      return res.redirect('/#loginModal');   // Or however you open the modal
    }
    req.logIn(user, (err) => {
      if (err) return next(err);
      req.flash('success', 'Welcome back!');
      return res.redirect('/');
    });
  })(req, res, next);
});

// POST - Register new user
router.post('/register', async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({ email, username });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      req.flash('success', 'Welcome to StayYatra!');
      const redirectUrl = req.session.returnTo || req.originalUrl;
      delete req.session.returnTo;
      return res.redirect('/');
    });
  } catch (e) {
    req.flash('error', e.message);
    return res.redirect('/'); // Stay on home so modal can show
  }
});

// GET - Logout user
router.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.flash('success', 'Goodbye!');
    res.redirect('/');
  });
});

module.exports = router;

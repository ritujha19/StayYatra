const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

// // GET - Register form
// router.get('/register', (req, res) => {
//   res.render('auth/register.ejs');
// });

// // GET - Login form
// router.get('/login', (req, res) => {
//   res.render('auth/login.ejs');
// });

// POST - Register new user
router.post('/register', async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({ email, username });
    const registeredUser = await User.register(user, password);
    
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      req.flash('success', 'Welcome to WanderLust!');
      const redirectUrl = req.session.returnTo || '/listing';
      delete req.session.returnTo;
      return res.redirect(redirectUrl);
    });
  } catch (e) {
    req.flash('error', e.message);
    return res.redirect('/auth/register'); // ✅ use return
  }
});

// POST - Login user (custom callback)
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      req.flash('error', 'Invalid username or password.');
      return res.redirect('/auth/login');
    }
    req.logIn(user, (err) => {
      if (err) return next(err);
      req.flash('success', `Welcome back ${user.username}!`);
      const redirectUrl = req.session.returnTo || '/listing';
      delete req.session.returnTo;
      return res.redirect(redirectUrl);
    });
  })(req, res, next);
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

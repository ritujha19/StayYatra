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

// POST - Verify email for password reset 
router.post('/verify-email', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ 
                success: false,
                message: 'Email not found' 
            });
        }
        res.json({ 
            success: true,
            message: 'Email verified' 
        });
    } catch (err) {
        res.status(500).json({ 
            success: false,
            message: 'Server error' 
        });
    }
});

router.post('/reset-password', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(404).json({ 
                success: false,
                message: 'User not found' 
            });
        }

        // Use Passport's setPassword instead of bcrypt
        await user.setPassword(password);
        await user.save();

        // Auto login after password reset
        req.login(user, (err) => {
            if (err) {
                return res.status(500).json({ 
                    success: false,
                    message: 'Error logging in' 
                });
            }
            res.json({ 
                success: true,
                message: 'Password reset successful' 
            });
        });

    } catch (err) {
        res.status(500).json({ 
            success: false,
            message: 'Server error' 
        });
    }
});

module.exports = router;
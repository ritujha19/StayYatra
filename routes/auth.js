const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const wrapAsync = require('../utils/wrapAsync');

// Register new user
router.post('/register', wrapAsync(async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        
        // Login after successful registration
        req.login(registeredUser, (err) => {
            if (err) return next(err);
            req.flash('success', 'Welcome to WanderLust!');
            res.redirect('/');
        });
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/');
    }
}));

// Login user
router.post('/login', 
    passport.authenticate('local', {
        failureRedirect: '/',
        failureFlash: true
    }), 
    (req, res) => {
        req.flash('success', 'Welcome back!');
        const redirectUrl = req.session.returnTo || '/';
        delete req.session.returnTo;
        res.redirect(redirectUrl);
    }
);

// Logout user
router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        req.flash('success', 'Goodbye!');
        res.redirect('/');
    });
});

module.exports = router;
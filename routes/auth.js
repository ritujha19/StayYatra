const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const wrapAsync = require('../utils/wrapAsync');

// GET - Register form
router.get('/register', (req, res) => {
    res.render('auth/register.ejs');
});

// GET - Login form
router.get('/login', (req, res) => {
    res.render('auth/login.ejs');
});

// POST - Register new user
router.post('/register', wrapAsync(async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        
        req.login(registeredUser, (err) => {
            if (err) return next(err);
            req.flash('success', 'Welcome to WanderLust!');
            res.redirect('/listing');
        });
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/auth/register');
    }
}));

// POST - Login user
router.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/auth/login',
        failureFlash: true
    }),
    (req, res) => {
        req.flash('success', `Welcome back ${req.user.username}!`);
        const redirectUrl = req.session.returnTo || '/listing';
        delete req.session.returnTo;
        res.redirect(redirectUrl);
    }
);

// GET - Logout user
router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Goodbye!');
        res.redirect('/');
    });
});

module.exports = router;
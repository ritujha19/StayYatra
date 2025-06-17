const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const expressError = require("./utils/expressError.js");
const listingRoute = require("./routes/listingRoute.js");
const reviewRoute = require("./routes/reviewRoute.js");
const authRoute = require("./routes/auth.js");
const cors = require("cors");
const session = require('express-session');
const passport = require('passport');
const User = require('./models/user');
const flash = require('connect-flash');
const initializePassport = require('./config/passport');

// Database connection
mongoose.connect('mongodb+srv://ritu05491:ritu2312@myproject.chwmz.mongodb.net/?retryWrites=true&w=majority&appName=myProject')
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => console.error('❌ MongoDB connection error:', err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(cors());

const sessionConfig = {
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 1 week
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Initialize passport configuration
initializePassport(passport);

// Make flash messages available to all templates
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

//home route
app.get("/", (req, res) => {
    res.render("home.ejs");
});

// routes
app.use("/auth", authRoute);
app.use("/listing", listingRoute);
app.use("/listing/:id/review", reviewRoute);

// 404 error handling for undefined routes
app.all("*",(req,res,next)=>{
    next(new expressError(404,"page not found!"));
});

//error handling
app.use((err,req,res,next)=>{
    let { statusCode = 500, message = "something went wrong!"} = err;
    res.status(statusCode).render("listing/error.ejs",{ err });
    // res.status(statuscode).send(message);
});

app.listen(2020,()=>{
    console.log("server is connected on port 2020");
});

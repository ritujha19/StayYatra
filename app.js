require('dotenv').config(); // Load environment variables

const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const ExpressError = require("./utils/expressError.js");
const listingRoute = require("./routes/listingRoute.js");
const reviewRoute = require("./routes/reviewRoute.js");
const authRoute = require("./routes/auth.js");
const cors = require("cors");
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const MongoStore = require('connect-mongo');
const { setLocals } = require('./middleware');

// ✅ 1. Use environment variable for MongoDB URI
const mongoUrl = process.env.MONGO_URI;

mongoose.connect(mongoUrl,  {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ 2. View engine and static files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate);
app.use(methodOverride("_method"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ 3. Session configuration with env secret and mongo store
const sessionConfig = {
    secret: process.env.SESSION_SECRET,
    store: MongoStore.create({
        mongoUrl: mongoUrl
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
};
app.use(session(sessionConfig));

// ✅ 4. Flash + Passport setup
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ✅ 5. Set locals
app.use(setLocals);

// Add this test route
app.get("/api/test", (req, res) => {
    res.json({ 
        message: "Backend is working!", 
        timestamp: new Date().toISOString(),
        status: "success"
    });
});
// Add this after your existing routes
app.get("/test", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "test.html"));
});

// ✅ 6. Routes
app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.use("/auth", authRoute);
app.use("/listing", listingRoute);
app.use("/listing/:id/review", reviewRoute);
app.use("/user", require("./routes/user.js"));

// ✅ 7. 404 error handler
app.all("/{*any}", (req, res, next) => {
    next(new ExpressError(404, "page not found!"));
});

// ✅ 8. Error handler
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("error.ejs", { err });
});

// ✅ 9. Use environment PORT for Render
const port = process.env.PORT || 10000;
app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});

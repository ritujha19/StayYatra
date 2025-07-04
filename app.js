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

// Database connection
const mongoUrl = 'mongodb+srv://ritu05491:ritu2312@myproject.chwmz.mongodb.net/?retryWrites=true&w=majority&appName=myProject';

mongoose.connect(mongoUrl)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const sessionConfig = {
    secret: 'your-secret-key',
    store: MongoStore.create({ mongoUrl }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 1 week
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    }
};
app.use(session(sessionConfig));

// 2. Flash middleware (after session)
app.use(flash());

// 3. Passport initialization (after session)
app.use(passport.initialize());
app.use(passport.session());

// 4. Passport strategy and serialization
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// 5. Set res.locals for user & flash messages (after passport)
app.use(setLocals); // Set res.locals for user & flash messages

//home route
app.get("/", (req, res) => {
    res.render("home.ejs");
});


// routes
app.use("/auth", authRoute);
app.use("/listing", listingRoute);
app.use("/listing/:id/review", reviewRoute);
app.use("/user", require("./routes/user.js"));

// 404 error handling for undefined routes
 app.all("/{*any}",(req,res,next)=>{
    next(new ExpressError(404,"page not found!"));
});

//error handling
app.use((err,req,res,next)=>{
    let { statusCode = 500, message = "something went wrong!"} = err;
    res.status(statusCode).render("error.ejs",{ err });
});

app.listen(2020,()=>{
    console.log("server is connected on port 2020");
});
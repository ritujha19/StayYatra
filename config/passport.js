const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("../models/user"); // Adjust path as needed

const initializePassport = (passport) => {
  // Implement local strategy
  passport.use(new LocalStrategy(User.authenticate()));

  // Serialize user for the session
  passport.serializeUser(User.serializeUser());

  // Deserialize user from the session
  passport.deserializeUser(User.deserializeUser());
};

module.exports = initializePassport;

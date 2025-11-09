const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");

router.get(
  "/privacy",
  wrapAsync(async (req, res) => {
    res.render("links/privacy.ejs");
  })
);

router.get(
  "/terms",
  wrapAsync(async (req, res) => {
    res.render("links/terms.ejs");
  })
);

router.get(
  "/site-map",
  wrapAsync(async (req, res) => {
    res.render("links/sitemap.ejs");
  })
);

router.get(
  "/companydetails",
  wrapAsync(async (req, res) => {
    res.render("links/companydetails.ejs");
  })
);

module.exports = router;

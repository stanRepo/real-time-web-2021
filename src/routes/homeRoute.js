const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const obj = {route:'/'}
  res.render("./pages/index.ejs", obj);
});

module.exports = router;

const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/game", function (req, res, next) {
  res.render("./pages/game.ejs");
});

module.exports = router;

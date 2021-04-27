const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/game", function (req, res, next) {
  const obj = {route:'/game', req:req}
  res.render("./pages/game.ejs", obj);
});

module.exports = router;

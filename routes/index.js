var express = require("express");
var router = express.Router();
let indexController = require("../controllers/indexController");

/* GET home page. */
router.get("/", function (req, res, next) {
  // console.log(data);
  // res.render("index/index", data);
  indexController.index(req, res);
});

module.exports = router;

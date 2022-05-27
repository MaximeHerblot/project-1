var express = require("express");
var router = express.Router();
let article = require("../controllers/articleController");

router.get("/article/:id", function (req, res, next) {
  article.getArticle(req, res);
});

module.exports = router;

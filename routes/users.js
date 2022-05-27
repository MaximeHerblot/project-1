var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");

router.get("/", function (req, res, next) {
  userController.allUsers(req, res);
});

router.get("/create_form", function (req, res, next) {
  userController.createUserForm(req, res);
});

router.post("/create", function (req, res, next) {
  userController.createUser(req, res);
});

router.get("/user/:id", function (req, res, next) {
  userController.getUser(req, res);
});

router.get("/create/article/:id", function (req, res, next) {
  userController.createArticle(req, res);
});
router.post("/create/article", function (req, res, next) {
  userController.createArticleAjax(req, res);
});

module.exports = router;

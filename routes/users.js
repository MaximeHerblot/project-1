var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");
/* GET users listing. */
router.get("/", function (req, res, next) {
  userController.allUsers(req, res);
});

router.get("/create_form", function (req, res, next) {
  userController.createUserForm(req, res);
});

router.post("/create_form", function (req, res, next) {
  userController.createUser(req, res);
});


module.exports = router;

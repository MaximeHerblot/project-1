const { User } = require("../models/user");

exports.allUsers = async (req, res) => {
  let users = await User.find({});
  let data = {
    users: users,
  };
  res.render("users/index", data);
};

exports.createUserForm = (req, res) => {
  let data = {};
  res.render("users/create_form", data);
};

exports.createUser = (req, res) => {
  console.log(req.method);
  //   if (req.method == "POST") {
  User.create(req.body);
  //   }
  let data = {
    formSubmited: true,
    formMessage: "L'utilsateur a bien été créer",
  };
  res.status(200).json(data)
};

const { User } = require("../models/user");
const { Article } = require("../models/article");
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

exports.createUser = async (req, res) => {
  let data = {
    formSubmited: true,
    formMessage: "L'utilisateur a bien été créer",
  };
  let status = 200;
  //   if (req.method == "POST") {
  let user = await User.find({
    $or: [{ email: req.body.email }, { username: req.body.username }],
  });
  console.log(user);
  if (user.length) {
    data.success = "false";
    data.formMessage = `Le compte pour l'email ${req.body.email}, ou le nom d'utilisateur ${req.body.username} existe déjà.`;
  } else {
    data.success = "true";
    User.create(req.body);
  }
  res.status(status).json(data);
};

exports.getUser = async (req, res) => {
  try {
    let currentUser = await User.findById(req.params.id);
    let data = {
      user: currentUser,
      articles: await Article.find({ user: currentUser }),
    };
    res.status(200).render("users/user", data);
  } catch (error) {
    res.render("error", {
      message: "L'utilisateur est introuvable",
      status: "404",
    });
  }
};

exports.createArticle = async (req, res) => {
  try {
    await User.findById(req.params.id);
    let data = {
      userId: req.params.id,
    };
    res.render("users/create/article", data);
  } catch (error) {
    res.render("error", { message: "L'utilisateur n'existe pas" });
  }
};

exports.createArticleAjax = async (req, res) => {
  let data = {
    success: "true",
    formMessage: "Création réussi",
  };
  try {
    let user = await User.findById(req.body.userId);
    let params = req.body;
    let article = await Article.create({
      title: params.title,
      description: params.description,
      user: user,
    });
    data.article = article;
    res.status("200").json(data);
  } catch (error) {
    data.formMessage = "Une erreur c'est produite";
    res.status("200").json(data);
    // if (req.body)
  }
};

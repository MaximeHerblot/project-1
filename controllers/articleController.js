const { User } = require("../models/user");
const { Article } = require("../models/article");

exports.getArticle = async (req, res) => {
  let data = {
    article: await Article.findById(req.params.id).populate("user"),
  };
  res.render("articles/article", data);
};

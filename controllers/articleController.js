const { User } = require("../models/user");
const { Article } = require("../models/article");

exports.getArticle = async (req, res) => {
  try {
    let article = await Article.findById(req.params.id);
    let data = {
      article: article,
    };
    res.render("articles/article", data);
  } catch (error) {
    res.render("error", { message: "L'article n'a pas été trouvé" });
  }
};

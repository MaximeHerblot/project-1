const { Article } = require("../models/article");

exports.index = async (req, res) => {
  
  let data = {
    articles: await Article.find({}).populate('user'),
  };
  console.log(data);
  res.render("index/index", data);
};

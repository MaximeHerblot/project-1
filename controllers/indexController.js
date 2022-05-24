exports.index = (req, res) => {
  let data = {
    articles: [
      {
        title: "First article",
        description: "This is the first article",
        user: {
          username: "Maxime",
          email: "maxime@gmail.com",
          age: Math.round(Math.random() * 30),
        },
      },
    ],
  };
  res.render("index/index", data);
};

const { Schema, model } = require("mongoose");


const articleSchema = new Schema({
    title: String,
    description: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Article = model('Article', articleSchema);

exports.Article = Article;

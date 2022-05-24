const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: String,
  email: String,
  age: Number,
});

const User = model("User", userSchema);

exports.User = User;
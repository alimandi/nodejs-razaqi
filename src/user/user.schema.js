const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  createAt: Number,
  username: String,
  password: String,
  email: String,
});

module.exports = mongoose.model("users", userSchema);

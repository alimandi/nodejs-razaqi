const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  createAt: Number,
  password: {
    type: String,
    required: "password is required",
  },
  email: {
    type: String,
    required: "email is required",
    unique: true,
  },
});

module.exports = mongoose.model("users", userSchema);

const express = require("express");
const jwt = require("jsonwebtoken");
const userSchema = require("../user/user.schema");
const { Error } = require("mongoose");
const userLogin = express.Router();
const accessTokenSecret = "1234567890";
userLogin.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userSchema.findOne({
      email: email.toLowerCase().trim(),
      password: password.trim(),
    });
    if (!user) throw new Error("email or password incarect");
    const accessToken = jwt.sign({ userId: user._id }, accessTokenSecret);
    res.json(accessToken);
  } catch (error) {
    res.json({ message: error.message });
  }
});
module.exports = userLogin;

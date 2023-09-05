const express = require("express");
const jwt = require("jsonwebtoken");
const userSchema = require("../user/user.schema");
const userRegister = express.Router();
const accessTokenSecret = "1234567890";
userRegister.post("/register", async (req, res) => {
  try {
    const { password, email, name, age } = req.body;

    const user = await userSchema.create({
      password: password.trim(),
      email: email.toLowerCase().trim(),
      name,
      age,
    });

    const accessToken = jwt.sign({ userId: user._id }, accessTokenSecret);
    res.json(accessToken);
  } catch (error) {
    res.json({ message: error.message });
  }
});
module.exports = userRegister;

const express = require("express");
const jwt = require("jsonwebtoken");
const userSchema = require("../user/user.schema");
const userLogin = express.Router();
const accessTokenSecret = "1234567890";
userLogin.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const trueEmail = email.toLowerCase().trim();
    const truePassword = password.trim();

    const user = await userSchema.findOne({
      email: trueEmail,
      password: truePassword,
    });
    if (user) {
      const accessToken = jwt.sign({ userId: user._id }, accessTokenSecret);
      res.json(accessToken);
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});
module.exports = userLogin;

const jwt = require("jsonwebtoken");
const userSchema = require("./user.schema");
const authenticateJWT = (req, res, next) => {
  const accessTokenSecret = "1234567890";
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, accessTokenSecret, async (err, payload) => {
      if (err) {
        return res.json({ message: "token is not valid" });
      }

      const user = await userSchema.findById(payload.userId);
      req.user = user;

      next();
    });
  } else {
    res.json({ message: "token valid" });
  }
};
module.exports = authenticateJWT;

const jwt = require("jsonwebtoken");
const authenticateJWT = (req, res, next) => {
  const accessTokenSecret = "1234567890";
  const authHeader = req.headers.Authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.json({ message: "token is not valid" });
      }

      req.user = user;
      next();
    });
  } else {
    res.json({ message: "token valid" });
  }
};
module.exports = authenticateJWT;

const userSchema = require("../user/user.schema");
const userMiddleware = async (req, res, next) => {
  const userId = req.headers.userid;
  const user = await userSchema.findById(userId);
  req.user = user;
  next();
};
module.exports = userMiddleware;

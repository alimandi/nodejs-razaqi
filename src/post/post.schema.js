const mongoose = require("mongoose");
const postsSchema = new mongoose.Schema({
  title: String,
  description: String,
  createAt: Date,
  createBy: {
    type: mongoose.Types.ObjectId,
    ref: "users",
  },
});

module.exports = mongoose.model("posts", postsSchema);

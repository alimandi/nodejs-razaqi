const mongoose = require("mongoose");
const postsSchema = new mongoose.Schema({
  title: String,
  description: String,
  createAt: Date,
  updateAt: Date,
  createBy: String,
  updateBy: String,
  coverId: {
    type: mongoose.Types.ObjectId,
    ref: "uploads",
  },
});

module.exports = mongoose.model("posts", postsSchema);

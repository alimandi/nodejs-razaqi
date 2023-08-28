const mongoose = require("mongoose");
const postsSchema = new mongoose.Schema({
  title: String,
  description: String,
  createAt: Date,
  createBy: {
    type: mongoose.Types.ObjectId,
    ref: "users",
  },
  coverId: {
    type: mongoose.Types.ObjectId,
    ref: "uploads",
  },
});

module.exports = mongoose.model("posts", postsSchema);

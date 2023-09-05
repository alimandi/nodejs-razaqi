const mongoose = require("mongoose");
const postsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "title is required",
  },
  description: {
    type: String,
    required: "description is required",
  },
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

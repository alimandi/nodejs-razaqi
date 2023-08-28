const mongoose = require("mongoose");
const uploadSchema = new mongoose.Schema({
  filename: String,
  size: Number,
  path: String,
  mimeType: String,
  createBy: {
    type: mongoose.Types.ObjectId,
    ref: "users",
  },
});
module.exports = mongoose.model("uploads", uploadSchema);

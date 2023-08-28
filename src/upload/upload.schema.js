const mongoose = require("mongoose");
const uploadSchema = new mongoose.Schema({
  filename: String,
  size: Number,
  path: String,
  mimeType: String,
});
module.exports = mongoose.model("upload", uploadSchema);

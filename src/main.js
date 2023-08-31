const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const app = express();
const postController = require("./post/post.controller");
const userController = require("./user/user.controller");
const uploadcontroller = require("./upload/upload.controller");
const mongoose = require("mongoose");
const userMiddleware = require("./user/user.middleware");

mongoose.connect("mongodb://0.0.0.0:27017/testDb");

app.get("/", (req, res) => {
  res.json({ message: "success", code: 200 });
});
app.use(cors());
app.use(express.json());
app.use("/users", userController);
app.use(userMiddleware);
app.use("/posts", postController);
app.use("/upload", uploadcontroller);

app.use(fileUpload());
app.use("/public", express.static("src/public"));
app.listen(3000, () => {
  console.log("web server on port 3000");
});

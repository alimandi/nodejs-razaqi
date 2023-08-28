const express = require("express");
const postService = require("./post.service");

const router = express.Router();

router.route("/").post(postService.addPost);
router.route("/:id").put(postService.editPost);
router.route("/:id").delete(postService.removePost);
router.route("/").get(postService.getPosts);
router.route("/:id").get(postService.getPost);

module.exports = router;

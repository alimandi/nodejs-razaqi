const express = require("express");
const userService = require("./user.service");

const router = express.Router();

router.route("/").post(userService.addUser);
router.route("/:id").put(userService.editUser);
router.route("/:id").delete(userService.removeUser);
router.route("/").get(userService.getUsers);
router.route("/:id").get(userService.getUser);

module.exports = router;

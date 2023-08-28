const express = require("express");
const uploadService = require("./upload.service");
const multer = require("multer");

const path = require("path");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/public/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, "ax" + ext);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("file"), uploadService.upload);
router.route("/:id").get(uploadService.getfile);
router.route("/").get(uploadService.getfiles);
module.exports = router;

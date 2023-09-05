const express = require("express");
const uploadService = require("./upload.service");
const multer = require("multer");
const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/public/");
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("file"), uploadService.upload);
router.route("/:id").get(uploadService.getfile);
router.route("/").get(uploadService.getfiles);
module.exports = router;

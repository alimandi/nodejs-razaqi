const fs = require("fs");
const uploadSchema = require("./upload.schema");
const userSchema = require("../user/user.schema");
const { default: mongoose } = require("mongoose");
const path = require("path");
const { Console, log } = require("console");

const getfile = async (req, res) => {
  try {
    const { id } = req.params;
    const uploadGet = await uploadSchema.findById(id);
    res.json({
      message: "sucsess",
      files: { uploadGet },
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const getfiles = async (req, res, user) => {
  try {
    const userId = req.headers.userid;
    const user = await userSchema.findById(userId);
    req.user = user;
    const uploadsGet = await uploadSchema.find({});
    res.json({
      message: "sucsess",
      files: { uploadsGet, user },
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
  user();
};

const upload = async (req, res, user) => {
  try {
    const userId = req.headers.userid;
    const user = await userSchema.findById(userId);
    req.user = user;
    const upload = await uploadSchema.create({
      filename: req.file.filename,
      size: req.file.size,
      path: req.file.path,
      mimeType: req.file.mimetype,
      createBy: req.headers.userid,
    });
    res.json({
      message: "sucsess",
      file: { upload, user },
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
  user();
};

module.exports = {
  upload,
  getfile,
  getfiles,
};

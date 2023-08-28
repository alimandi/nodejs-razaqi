const fs = require("fs");
const uploadSchema = require("./upload.schema");
const { default: mongoose } = require("mongoose");
const path = require("path");

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

const getfiles = async (req, res) => {
  try {
    const uploadsGet = await uploadSchema.find({});
    res.json({
      message: "sucsess",
      files: { uploadsGet },
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const upload = async (req, res) => {
  try {
    const upload = await uploadSchema.create({
      filename: req.file.filename,
      size: req.file.size,
      path: req.file.path,
      mimeType: req.file.mimetype,
    });
    res.json({
      message: "sucsess",
      file: { upload },
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

module.exports = {
  upload,
  getfile,
  getfiles,
};

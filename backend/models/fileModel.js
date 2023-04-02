const mongoose = require("mongoose");

const fileschema = new mongoose.Schema({
  filename: String,
  data: Buffer,
});

const File = mongoose.model("file", fileschema);
module.exports = File;

const mongoose = require("mongoose");

const fileschema = new mongoose.Schema({
  filename: String,
  data: Buffer,
});

const file = mongoose.model("file", fileschema);
module.exports = file;

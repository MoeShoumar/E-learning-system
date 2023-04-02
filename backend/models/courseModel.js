const mongoose = require("mongoose");

const courseschema = new mongoose.Schema({
  name: String,
  CRN: Number,
});

const course = mongoose.model("courses", courseschema);
module.exports = course;

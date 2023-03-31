const Mongoose = require("mongoose");

const courseschema = new Mongoose.Schema({
  name: String,
  CRN: Number,
});

const course = mongoose.model("courses", courseschema);
module.exports = course;

const mongoose = require("mongoose");

const formschema = new mongoose.Schema({
  studentId: mongoose.Schema.Types.ObjectId,
  courseId: mongoose.Schema.Types.ObjectId,
  status: String,
});

const form = mongoose.model("form", formschema);
module.exports = form;

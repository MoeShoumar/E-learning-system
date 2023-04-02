const mongoose = require("mongoose");

const formschema = new mongoose.Schema({
  studentId: mongoose.Schema.Types.ObjectId,
  courseId: mongoose.Schema.Types.ObjectId,
  status: String,
});

const Form = mongoose.model("form", formschema);
module.exports = Form;

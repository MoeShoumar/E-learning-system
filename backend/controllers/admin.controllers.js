const course = require("../models/courseModel");
const file = require("../models/fileModel");
const form = require("../models/formModel");
const User = require("../models/userModel");

const addClass = (req, res) => {
  const { courseName, instructor, description } = req.body;
  res.status(200).json({ message: "Course added successfully" });
};

// model.findoneAndupdate to remove class from student
// file.findOneAndUpdate to

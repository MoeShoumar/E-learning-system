const Course = require("../models/courseModel");
const file = require("../models/fileModel");
const form = require("../models/formModel");

exports.creatCourse = async (req, res) => {
  const { name, CRN } = req.body;
  const course = await Course.create({ name, CRN });
  return res.json({ message: "sucess", course });
};

// model.findoneAndupdate to remove class from student
// file.findOneAndUpdate to

// getAllstudents
// handleFormRequest
// uploadFile
// creatCourse

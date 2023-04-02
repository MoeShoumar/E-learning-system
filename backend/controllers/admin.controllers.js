const course = require("../models/courseModel");
const file = require("../models/fileModel");
const form = require("../models/formModel");

exports.creatCourse = async (req, res) => {
  try {
    const { name, CRN } = req.body;
    const Course = await course.create({ name, CRN });
    res.status(200).json(Course);
  } catch (error) {
    res.status(500).json({ error: "Could not create course" });
  }
};

// const

// model.findoneAndupdate to remove class from student
// file.findOneAndUpdate to

// getAllstudents
// handleFormRequest
// uploadFile
// creatCourse

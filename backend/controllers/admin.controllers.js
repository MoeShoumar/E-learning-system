const Course = require("../models/courseModel");
const file = require("../models/fileModel");
const form = require("../models/formModel");

exports.creatCourse = async (req, res) => {
  const { name, CRN } = req.body;
  const course = await Course.create({ name, CRN });
  return res.json({ message: "sucess", course });
};
exports.handledropRequest = async (req, res) => {
  try {
    const { CRN, email, desicion } = req.body;
    const pendingcourse = await Course.findOne({ CRN });
    if (desicion === "approve") {
      pendingcourse.pendingRequests = pendingcourse.pendingRequests.filter(
        (request) => request.email !== email
      );
      pendingcourse.enrolledUsers = pendingcourse.enrolledUsers.filter(
        (user) => user.email !== email
      );
      await pendingcourse.save();
      return res.status(200).json({ message: "Student request approved" });
    } else if (desicion === "reject") {
      pendingcourse.pendingRequests = pendingcourse.pendingRequests.filter(
        (request) => request.email !== email
      );
      await pendingcourse.save();
      return res.status(200).json({ message: "Student request rejected" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.getrequests = async (req, res) => {
  try {
    const course = await Course.findOne({
      pendingRequests: { $exists: true, $not: { $size: 0 } },
    });
    if (!course) {
      return res
        .status(404)
        .json({ message: "No courses with pending requests found" });
    }
    return res.status(200).json({ course });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
// model.findoneAndupdate to remove class from student
// file.findOneAndUpdate to

// getAllstudents
// handleFormRequest
// uploadFile
// creatCourse

const Course = require("../models/courseModel");
const User = require("../models/userModel");
const file = require("../models/fileModel");
const form = require("../models/formModel");

exports.enrollCourse = async (req, res) => {
  try {
    const { CRN, email } = req.body;
    const course = await Course.findOne({ CRN });
    const user = await User.findOne({ email });
    console.log(course);
    console.log(user);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    if (
      course.enrolledUsers.some(
        (enrolledUser) => enrolledUser.email === user.email
      )
    ) {
      return res
        .status(409)
        .json({ message: "User already enrolled in course" });
    }
    course.enrolledUsers.push(user);
    await course.save();
    res.status(200).json({ message: "Enrolled successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.dropcourse = async (req, res) => {
  const { CRN, email } = req.body;
  const course = await Course.findOne({ CRN });
  const user = await User.findOne({ email });
  if (
    course.enrolledUsers.some(
      (enrolledUser) => enrolledUser.email === user.email
    )
  ) {
    course.pendingRequests.push(user);
    await course.save();
    return res.status(200).json({ message: "pending" });
  } else {
    res.status(500).json({ message: "You are not enrolled in course" });
  }
};

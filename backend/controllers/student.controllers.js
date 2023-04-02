const course = require("../models/courseModel");
const file = require("../models/fileModel");
const form = require("../models/formModel");

exports.enrollCourse = async (req, res) => {
  try {
    const { courseId } = req.body.courseId;
    const userId = req.user.id;
    const course = await course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    if (course.enrolledUsers.includes(userId)) {
      return res
        .status(409)
        .json({ message: "User already enrolled in course" });
    }
    course.enrolledUsers.push(userId);
    await course.save();

    res.status(200).json({ message: "Enrolled successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// router.get("/", getAllfiles);
// router.post("/", uploadFormRequest);
// router.post("/course", enrollCourse);

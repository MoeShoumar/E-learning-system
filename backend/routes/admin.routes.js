const { authMiddleware } = require("../middlewares/auth.middleware");
const { adminMiddleware } = require("../middlewares/admin.middleware");
const { Router } = require("express");
const {
  getAllstudents,
  handleFormRequest,
  uploadFile,
  creatCourse,
} = require("../controllers/admin.controllers");

const router = Router();
// router.get("/", getAllstudents);
// router.get("/:id", handleFormRequest);
// router.post("/", uploadFile);
router.post("/course", creatCourse);

module.exports = router;

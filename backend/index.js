const express = require("express");
// const cluster = require("cluster");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();

const adminRoutes = require("./routes/admin.routes");
app.use("/admin", adminRoutes);
const studentRoutes = require("./routes/student.routes");
app.use("/student", studentRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

app.listen(process.env.PORT, (err) => {
  if (err) console.log(err);
  console.log("Server is listining on port: ", process.env.PORT);
  require("./configs/db.config");
});

// const studentRoutes = require("./routes/student.routes");
// const { authMiddleware } = require("./middlewares/auth.middleware");
// app.use("/student", authMiddleware, studentRoutes);

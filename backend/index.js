const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

// const userRoutes = require("./routes/user.routes");
// app.use("/user", userRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

app.listen(process.env.PORT, (err) => {
  if (err) console.log(err);
  console.log("Server is listining on port: ", process.env.PORT);
  require("./configs/db.config");
});

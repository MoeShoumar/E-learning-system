const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.on("error", (err) => console.error(err));

db.on("open", () => console.log("moongo db connected"));

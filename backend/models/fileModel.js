const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  filename: String,
  data: Buffer,
});

const User = mongoose.model("User", userschema);
module.exports = User;

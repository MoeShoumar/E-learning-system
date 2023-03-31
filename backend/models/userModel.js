const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["student", "admin"],
    default: "user",
  },
});

const User = mongoose.model("User", userschema);
module.exports = User;

const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { email, name, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser)
    return res.status(409).json({ message: "email already exists" });
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const user = new User();
  user.email = email;
  user.password = hashedPassword;
  user.name = name;

  user.save();
  res.status(201).json(user);
};

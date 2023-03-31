const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "Invalid Credentials" });

  const checkpassowrd = await bcrypt.compare(password, user.password);
  if (!checkpassowrd)
    return res.status(400).json({ message: "invalid credintails" });
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.SECRET_KEY
  );
  res.json({ token });
};

exports.register = async (req, res) => {
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

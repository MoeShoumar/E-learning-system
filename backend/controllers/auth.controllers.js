const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  const { email, password } = request.body;
  const validuser = await User.findOne({ email });
  const checkpassowrd = await bcrypt.compare(password, user.password);
  if (checkpassowrd && validuser)
    return res.status(200).json({ message: "login sucess" });
  return res.status(400).json({ message: "invalid credintails" });
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.SECRET_KEY
  );
  res.json({ token });
};
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

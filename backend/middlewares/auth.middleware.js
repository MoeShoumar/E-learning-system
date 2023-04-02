// const jwt = require("jsonwebtoken");
// const User = require("../models/userModel");

// exports.authMiddleware = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1];
//     if (!token) {
//       return res.statu(403).json({ message: "unauthenticated" });
//     }
//     const decoded = jwt.verify(token, process.env.SECRET_KEY);
//     const user = await User.findById(decoded.id, "-password");
// req.user = usser; we use it la yehmol l user to the end point
//     next();
//   } catch (error) {
//     return res.statu(500).json({ message: "Server error" });
//   }
// };

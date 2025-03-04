import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const Authenticated = async (req, res, next) => {
  const token = req.header("Auth");

  if (!token) return res.json({ message: "Login fist" });

  const decoded = jwt.verify(token, process.env.SECRET);
  const id = decoded.userId;

  let user = await User.findById(id);

  if (!user) return res.json({ message: "User not exit" });

  req.user = user;

  next();
};

import User from "../models/user.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) res.json({ message: "User already exists" });
    const hashPassword= await bcrypt.hash(password,10)
    user = await User.create({ name, email, password:hashPassword });
    res.status(201).json({ message: "User Registered" });
  } catch (err) {
    res.send(err.message);
  }
};

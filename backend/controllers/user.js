import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    const hashPassword = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hashPassword });

    res.status(201).json({ message: "User Registered",success:true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).json({ message: "Invalid password" });
    const token=jwt.sign({userId:user._id},process.env.SECRET,{
      expiresIn:"365d"
    })

    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email, },
      success:true
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const users = async (req, res) => {
  try {
    const user =await User.find();
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const profile = async (req,res)=>{
  res.json({user:req.user})
}

import User from "../models/user.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await  User.create({ name, email, password });
    res.status(201).json({ message: "User Registered" });
  } catch (err) {
    res.send(err.message);
  }
};

import User from "../models/User.module.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, password, email } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username == "" ||
    password == "" ||
    email == ""
  ) {
    return res.status(400).json({ message: "All Fields are required" });
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json("SignUp Successful");
  } catch (err) {
    res.status(400).json(err.message);
  }
};

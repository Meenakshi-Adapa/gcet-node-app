import express from "express";
import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
const userRouter = express.Router();
import jwt from "jsonwebtoken";
const SECRET_KEY = "helloworld";

userRouter.post("/register", async (req, res) => {
  const { name, email, pass } = await req.body;
  const hashpassword = await bcrypt.hash(pass, 10);
  const result = await userModel.create({
    name: name,
    email: email,
    pass: hashpassword,
  });
  return res.json(result);
});

userRouter.post("/login", async (req, res) => {
  const { email, pass } = await req.body;
  // console.log(email, pass);
  const result = await userModel.findOne({ email });
  // console.log("result", result);
  if (!result) return res.json({ message: "Invalid user" });
  const matchPassword = await bcrypt.compare(pass, result.pass);
  // console.log(matchPassword);
  if (!matchPassword) {
    return res.status(400).json({ message: "Invalid Password" });
  }
  const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
  // console.log({ result, token })
  // return res.json({ user: result, token: token });
  return res.json({ result, token });
});

export default userRouter;
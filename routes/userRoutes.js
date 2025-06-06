import express from "express";
import userModel from "../models/userModel.js";
import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, pass } = req.body;
  const hashedPass = await bycrypt.hash(pass, 10);
  const result = await userModel.insertOne({
    name: name,
    email: email,
    pass: hashedPass,
  });
  return res.json(result);
});

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  const result = await userModel.findOne({ email, pass });
  if (!result) return res.json({ message: "Invalid user or password" });
  return res.json(result);
  console.log(result)
});



export default userRouter;
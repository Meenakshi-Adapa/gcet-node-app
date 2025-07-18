import express from "express";
import orderModel from "../models/orderModel.js";

const orderRouter = express.Router();

orderRouter.post("/new", async (req, res) => {
  try {
    const { email, orderValue } = req.body;
    const result = await orderModel.create({ email, orderValue });
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Failed to create order", error: error.message });
  }
});

orderRouter.get("/:id", async (req, res) => {
  try {
    const email = req.params.id;
    const result = await orderModel.find({ email });
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Failed to get orders", error: error.message });
  }
});

orderRouter.get("/all", async (req, res) => {
  try {
    const result = await orderModel.find();
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Failed to get all orders", error: error.message });
  }
});

export default orderRouter

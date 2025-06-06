import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js';
import ordersRouter from './routes/ordersRoutes.js';

import dotenv from 'dotenv';
dotenv.config();




const app = express();

app.use(cors());
app.options('*', cors()); // Enable preflight requests for all routes
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI


app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/orders", ordersRouter);


mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(8080, () => {
      console.log("Server Started on port 8080");
    });
  })
  .catch((error) => {
    console.log(error);
  });







app.get("/greet", (req, res) => {
    res.send("Greeting from the server!");
});

app.get("/name", (req, res) => {
    res.send("My Name is Meenakshi msg from the server!");
});

app.get("/weather", (req, res) => {
    res.send("Temperature is 30 degree Celsius");
});





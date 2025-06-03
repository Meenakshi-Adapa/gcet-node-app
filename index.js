import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js';

import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname)));
app.use("/users", userRouter);
app.use("/products", productRouter);

// Serve index.html as landing page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, () => {
  mongoose.connect("mongodb://localhost:27017/gcet");
  console.log("Server started");
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





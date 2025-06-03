import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();


app.use(cors());
app.use(express.json());

const users = []; // In-memory user store

app.listen(8080, () => {
  mongoose.connect("http://localhost:27017:gcet");
  console.log("Server started");
});

const userSchems = mongoose.Schems({
    name: { type: String} ,
});

const user = mongoose.model("User", userSchem);

app.get("/", (req, res) => {
    return res.send("Hello, World!");
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


app.get("/product", (req, res) => {
    const products = [
        { id: 1, name: "Product 1", price: 10.99 },
        { id: 2, name: "Product 2", price: 19.99 },
        { id: 3, name: "Product 3", price: 5.99 }
    ];
    res.json(products);
});


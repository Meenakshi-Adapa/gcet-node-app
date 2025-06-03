import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from current directory
app.use(express.static(path.join(__dirname)));

const users = []; // In-memory user store

app.listen(8080, () => {
  mongoose.connect("mongodb://localhost:27017/gcet");
  console.log("Server started");
});



app.post("/Register",async(req,res) => {
    const {name,email,pass} = req.body
    const result = await user.insertOne({name,email,pass});
    return res.json(result);
});

app.post("/Login",async(req,res) => {
    const {email,pass} = req.body
    const result = await user.findOne({email,pass});
    if(!result) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    else{
        return res.json({ message: "Login successful", user: result });
    }
    return res.json(result);
});



app.get("/products", async (req, res) => {
    const result = await Product.find();
    return res.json(result);
});

// Serve index.html as landing page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
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





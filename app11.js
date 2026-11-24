
const express = require("express");
const mongoose = require("mongoose");

const app11 = express();

app11.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/ProductDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Product Schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
});

const Product = mongoose.model("Product", productSchema);

// CREATE
app11.post("/products", async (req, res) => {
    const product = await Product.create(req.body);
    res.json(product);
});

// READ
app11.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// READ SINGLE
app11.get("/products/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
});

// UPDATE
app11.put("/products/:id", async (req, res) => {
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    );
    res.json(product);
});

// DELETE
app11.delete("/products/:id", async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
});

app11.listen(3000, () => {
    console.log("Server running on port 3000");
});

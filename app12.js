
const express = require("express");
const app12 = express();

app12.use(express.json());
app12.use(express.static("public"));

let products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 1500 }
];

let orders = [];

// Get products
app12.get("/products", (req, res) => {
    res.json(products);
});

// Add product - Seller
app12.post("/products", (req, res) => {
    const product = {
        id: Date.now(),
        name: req.body.name,
        price: Number(req.body.price)
    };

    products.push(product);
    res.json(product);
});

// Edit product - Seller
app12.put("/products/:id", (req, res) => {
    let p = products.find(x => x.id == req.params.id);

    if (!p) return res.status(404).json({ message: "Not found" });

    p.name = req.body.name;
    p.price = Number(req.body.price);

    res.json(p);
});

// Place order
app12.post("/orders", (req, res) => {
    let order = {
        id: Date.now(),
        items: req.body.items,
        status: "Successful (Demo)"
    };

    orders.push(order);
    res.json(order);
});

// Show orders
app12.get("/orders", (req, res) => {
    res.json(orders);
});

app12.listen(3000, () => {
    console.log("E-commerce server running on port 3000");
});


const express = require("express");
const app8 = express();

app8.set("view engine", "ejs");
app8.use(express.urlencoded({ extended: true }));

app8.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

app8.get("/about", (req, res) => {
    res.send("About Us Page");
});

app8.get("/contact", (req, res) => {
    res.send("Contact Page");
});

app8.get("/student", (req, res) => {
    res.render("student", { name: "Aditri" });
});

app8.post("/submit", (req, res) => {
    res.send("Form submitted successfully!");
});

app8.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

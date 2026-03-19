const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: "Rice", price: 50 },
  { id: 2, name: "Milk", price: 25 },
  { id: 3, name: "Bread", price: 30 }
];

// Get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// Place order
app.post("/order", (req, res) => {
  const order = req.body;
  res.json({ message: "Order placed successfully!", order });
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Backend running on http://localhost:5000");
});

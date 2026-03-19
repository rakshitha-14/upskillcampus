import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(res => setProducts(res.data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const placeOrder = () => {
    axios.post("http://localhost:5000/order", { cart })
      .then(res => alert(res.data.message));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Grocery Delivery App</h1>

      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>
          {p.name} - ₹{p.price}
          <button onClick={() => addToCart(p)}>Add</button>
        </div>
      ))}

      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}

      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}

export default App;

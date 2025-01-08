import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item}{" "}
              <Button
                variant="danger"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
      )}
      <Button variant="success">Proceed to Checkout</Button>
    </div>
  );
};

export default Cart;

import React, { useContext } from "react";
import { CartContext } from "../../../src/cartContext/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart } =
    useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * parseFloat(item.price),
    0
  );

  if (cartItems.length === 0) {
    return <h2 className="cart-empty">Your cart is empty.</h2>;
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img
            src={`http://localhost:3000${item.image}`}
            alt={item.name}
            className="cart-item-img"
          />
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <div className="cart-item-actions">
              <button onClick={() => decrementQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => incrementQuantity(item.id)}>+</button>
            </div>
            <p>Subtotal: ₹{(item.quantity * item.price).toFixed(2)}</p>
            <button
              className="cart-remove"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="cart-total">
        <h2>Total: ₹{totalPrice.toFixed(2)}</h2>
        <button className="cart-checkout">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;

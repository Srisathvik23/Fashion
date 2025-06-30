// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [popupMessage, setPopupMessage] = useState(null);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
    setPopupMessage("Item added to cart!");

    setTimeout(() => setPopupMessage(null), 2000);
  };

  const removeFromCart = () => {
    setCartCount(prev => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, removeFromCart, popupMessage }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

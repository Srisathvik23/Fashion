import React from "react";
import "./App.css";
import { BrowserRouter as Main } from "react-router-dom";
import ApplicationRoutes from "../src/routes/index";
import { CartProvider } from "./contextapi/cartContext.js";

function App() {
  return (
    <Main>
      <CartProvider>
        <ApplicationRoutes />
      </CartProvider>
    </Main>
  );
}

export default App;

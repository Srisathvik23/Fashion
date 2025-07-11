import React from "react";
import Layout from "../layout";
import ScrollToTop from "../routes/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import Home from "../containers/Home/Home";
import Men from "../containers/Men/Men";
import Women from "../containers/Women/Women";
import Login from "../containers/Login/Login";
import Signup from "../containers/Signup/Signup";
import MenProduct from "../containers/Men/MenProducts/MenProduct";
import WomenProduct from "../containers/Women/WomenProducts/WomenProduct";
import Cart from "../containers/Cart/Cart";
import Wishlist from "../containers/Wishlist";
import Verify from "../containers/verify/verifyOTP";

const index = () => {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verifyOTP" element={<Verify />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menproduct/:id" element={<MenProduct />} />
        <Route path="/womenproduct/:id" element={<WomenProduct />} />
        <Route path="/wishlist" element={<Wishlist />} />
        
      </Routes>
    </Layout>
  );
};

export default index;

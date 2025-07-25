import React from "react";
import Layout from "../layout";
import ScrollToTop from "../routes/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import Home from "../containers/Home/Home";
import Men from "../containers/Men/Men";
import Women from "../containers/Women/Women";
import Kids from "../containers/Kids/Kids";
import Footwear from "../containers/Footwear/Footwear";
import Accessories from "../containers/Accessories/Accessories";
import Beauty from "../containers/Beauty/Beauty";
import Login from "../containers/Login/Login";
import Signup from "../containers/Signup/Signup";
import Product from "../containers/Men/menProductDetails/Product";
import Productt from "../containers/Women/womenProductDetails/Product";

const index = () => {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/footwear" element={<Footwear />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<Product />} />
        {/* <Route path="/productt/:id" element={<Productt />} /> */}
      </Routes>
    </Layout>
  );
};

export default index;

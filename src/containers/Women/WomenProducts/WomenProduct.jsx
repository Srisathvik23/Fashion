import React from "react";
import { getProductById } from "../../../services/womenProductAPI";
import ProductDetails from "../../../components/ProductDetails/ProductDetails";

const WomenProduct = () => {
  return <ProductDetails fetchProductApi={getProductById} title="Women" />;
};

export default WomenProduct;

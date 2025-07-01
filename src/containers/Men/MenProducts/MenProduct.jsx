import React from "react";
import { getProductById } from "../../../services/menProductAPI";
import ProductDetails from "../../../components/ProductDetails/ProductDetails";

const MenProduct = () => {
  return <ProductDetails fetchProductApi={getProductById} title="Men" />;
};

export default MenProduct;

import React from "react";
import { getAllProducts } from "../../services/womenProductAPI";
import ProductList from "../../components/ProductList/ProductList";

const Women = () => {
  return (
    <ProductList
      title="WOMEN"
      fetchProductsApi={getAllProducts}
      navigatePath="womenproduct"
    />
  );
};

export default Women;

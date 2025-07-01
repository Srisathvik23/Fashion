import React from "react";
import { getAllProducts } from "../../services/menProductAPI";
import ProductList from "../../components/ProductList/ProductList";

const Men = () => {
  return (
    <ProductList
      title="MEN"
      fetchProductsApi={getAllProducts}
      navigatePath="menproduct"
    />
  );
};

export default Men;

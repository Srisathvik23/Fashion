import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../../cartContext/CartContext";

const ProductDetails = ({ fetchProductApi, title }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetchProductApi(id);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pd-product-details">
      <div className="pd-product-details-img">
        <img src={`http://localhost:3000${product.image}`} alt={product.name} />
      </div>

      <div className="pd-product-details-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h2>₹{product.price}</h2>
        <p>Discount: {product.discount}</p>
        <p>Size: {product.size}</p>

        <div className="pd-buttons">
          <button
              className="pp-add-btn"
              onClick={() => {
                addToCart({
                  id: product._id,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                });
                setIsAdded(true);
                setTimeout(() => setIsAdded(false), 1000);
              }}
              style={{
                backgroundColor: isAdded ? "red" : "",
                color: isAdded ? "white" : "",
              }}
            >
              {isAdded ? "Added" : "Add to Cart"}
            </button>
          <button className="pd-buy-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

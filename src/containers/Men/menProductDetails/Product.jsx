import React from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import { useState } from "react";



const Product = () => {
  const [isAdded, setIsAdded] = useState(false);  

  const { id } = useParams();
  const product = productDetails.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="pp-container">
      <div className="pp-product-grid">
        {/* Product Image */}
        <div className="pp-product-image">
          <img
            src={require(`../../../assets/Men/${product.image}.png`)}
            alt={product.title}
          />
        </div>

        {/* Product Info */}
        <div className="pp-product-info">
          <h1>{product.title}</h1>
          <p className="pp-description">{product.description}</p>
          <p className="pp-price">{product.price}</p>
          <p>Discount: {product.discount}</p>
          <p>Rating: {product.rating}</p>
          <p>Availability: {product.availability}</p>

          <label htmlFor="pp-size">Select Size</label>
          <select id="pp-size">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>XL</option>
          </select>

          <div className="pp-buttons">
            <button
              className="pp-btn pp-add"
              onClick={() => {
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

            <button className="pp-btn pp-buy">Buy Now</button>
          </div>

          <a
            href={`https://wa.me/9515535052?text=I'm%20interested%20in%20this%20product:%20${product.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pp-whatsapp-link"
          >
            Chat on WhatsApp for more info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;

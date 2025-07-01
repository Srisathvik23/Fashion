import React, { useEffect, useState } from "react";
import "./MenProduct.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../../../cartContext/CartContext";

const MenProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useContext(CartContext);


  const fetchMenProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/menapi/get/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

    useEffect(() => {
    fetchMenProduct();
  }, [id]);


  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pp-container">
      <div className="pp-product-grid">
        {/* Product Image */}
        <div className="pp-product-image">
          <img
            src={`http://localhost:3000${product.image}`}
            alt={product.name}
          />
        </div>

        {/* Product Info */}
        <div className="pp-product-info">
          <h1>{product.name}</h1>
          <p className="pp-description">{product.description}</p>
          <p className="pp-price">{product.price}</p>
          <p>Discount: {product.discount}</p>

          <label htmlFor="pp-size">Select Size</label>
          {/* <select id="pp-size">{product.size}
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>  
            <option>XL</option>
          </select> */}
          <p>{product.size}</p>

          <div className="pp-buttons">
            <button
              className="pp-btn pp-add"
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

            <button className="pp-btn pp-buy">Buy Now</button>
          </div>

          <a
            href={`https://wa.me/9515535052?text=I'm%20interested%20in%20this%20product:%20${product.name}`}
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

export default MenProduct;

import React, { useEffect, useState } from "react";
import "./WomenProduct.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../../../cartContext/CartContext";



const WomenProduct = () => {
  const { id } = useParams();
  const [productt, setProduct] = useState(null);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useContext(CartContext);


  const fetchWomenProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/womenapi/get/${id}`);
      setProduct(res.data);
      console.log("gvctvduycuwdvyb")
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };


  useEffect(() => {
    fetchWomenProduct();
  }, [id]);

  

  if (!productt) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pp-container">
      <div className="pp-product-grid">
        {/* Product Image */}
        <div className="pp-product-image">
          <img
            src={`http://localhost:3000${productt.image}`}
            alt={productt.name}
          />
        </div>

        {/* Product Info */}
        <div className="pp-product-info">
          <h1>{productt.title}</h1>
          <p className="pp-description">{productt.description}</p>
          <p className="pp-price">{productt.price}</p>
          <p>Discount: {productt.discount}</p>
          {/* <p>Rating: {product.rating}</p> */}
          {/* <p>Availability: {product.availability}</p> */}

          <label htmlFor="pp-size">Select Size</label>
          {/* <select id="pp-size">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>XL</option>
          </select> */}
          <p>{productt.size}</p>

          <div className="pp-buttons">
            <button
              className="pp-btn pp-add"
              onClick={() => {
                addToCart({
                  id: productt._id,
                  name: productt.name,
                  price: productt.price,
                  image: productt.image,
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
            href={`https://wa.me/919999999999?text=I'm%20interested%20in%20this%20product:%20${productt.title}`}
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

export default WomenProduct;

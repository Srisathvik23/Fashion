import React, { useEffect, useState } from "react";
import { getWishlist } from "../services/wishlistAPI";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const data = await getWishlist();
        setWishlist(data);
      } catch (err) {
        console.error("Error loading wishlist", err);
      }
    };
    fetchWishlist();
  }, []);

  const goToProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="wishlist-page">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No products in your wishlist.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((product) => (
            <div
              key={product._id}
              className="wishlist-item"
              onClick={() => goToProduct(product._id)}
            >
              <img
                src={`http://localhost:3000${product.image}`}
                alt={product.name}
              />
              <h4>{product.name}</h4>
              <p>₹{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

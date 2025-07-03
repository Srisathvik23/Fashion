import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { CartContext } from "../../cartContext/CartContext";
import {
  addToWishlist,
  removeFromWishlist,
  getWishlist,
} from "../../services/wishlistAPI";

const ProductDetails = ({ fetchProductApi }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isAdded, setIsAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const { addToCart } = useContext(CartContext);

  // ✅ fetchWishlist function (moved outside handleWishlist)
  const fetchWishlist = async () => {
    try {
      const res = await getWishlist();
      return res;
    } catch (err) {
      console.error("Error fetching wishlist:", err);
      return [];
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetchProductApi(id);
        setProduct(res.data);

        const wishlist = await fetchWishlist();
        const isInWishlist = wishlist.some((p) => p._id === res.data._id);
        setWishlisted(isInWishlist);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  const handleWishlist = async () => {
    try {
      if (wishlisted) {
        await removeFromWishlist(product._id);
        setWishlisted(false);
      } else {
        await addToWishlist(product._id);
        setWishlisted(true);
      }
    } catch (err) {
      console.error("Wishlist error:", err);
    }
  };

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

          <button onClick={handleWishlist}>
            {wishlisted ? "❤️ Remove" : "🤍 Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

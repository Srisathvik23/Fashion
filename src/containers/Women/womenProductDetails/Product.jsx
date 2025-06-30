import React, { useEffect, useState } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../../../cartContext/CartContext";

// const productDetails = [
//   {
//     id: 1,
//     brand: "Levis",
//     title: "Men's 541 Blue Athletic Tapered Fit Mid Rise Jeans",
//     price: "₹1,733",
//     discount: "30% off",
//     rating: "4.2",
//     image: "wshirt1",
//     description:
//       "Levis presents the Men's 541 Blue Athletic Tapered Fit Mid Rise Jeans, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Regular Fit",
//       material: "Cotton Blend",
//       color: "Blue",
//       closure: "Button and Zip",
//       wash: "Dark Wash",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 2,
//     brand: "Puma",
//     title: "Men's Black Running Shoes",
//     price: "₹2,499",
//     discount: "20% off",
//     rating: "4.0",
//     image: "wshirt1",
//     description:
//       "Puma presents the Men's Black Running Shoes, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       type: "Running Shoes",
//       material: "Mesh and Synthetic",
//       sole: "Rubber",
//       closure: "Lace-Up",
//       occasion: "Sports",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 3,
//     brand: "Nike",
//     title: "Men's Sports T-Shirt",
//     price: "₹899",
//     discount: "25% off",
//     rating: "4.5",
//     image: "wshirt1",
//     description:
//       "Nike presents the Men's Sports T-Shirt, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Regular Fit",
//       material: "Cotton",
//       sleeve: "Half Sleeve",
//       pattern: "Printed",
//       collar: "Spread Collar",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 4,
//     brand: "Adidas",
//     title: "Men's Solid Black Joggers",
//     price: "₹1,299",
//     discount: "35% off",
//     rating: "4.1",
//     image: "wshirt1",
//     description:
//       "Adidas presents the Men's Solid Black Joggers, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Regular Fit",
//       material: "Cotton Blend",
//       waistband: "Elastic with Drawstring",
//       pockets: "2 Side Pockets",
//       pattern: "Solid",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 5,
//     brand: "Levis",
//     title: "Men's Slim Fit Casual Shirt",
//     price: "₹1,199",
//     discount: "40% off",
//     rating: "4.3",
//     image: "wshirt1",
//     description:
//       "Levis presents the Men's Slim Fit Casual Shirt, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Slim Fit",
//       material: "Cotton",
//       sleeve: "Half Sleeve",
//       pattern: "Printed",
//       collar: "Spread Collar",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 6,
//     brand: "US Polo",
//     title: "Men's Polo Collar T-Shirt",
//     price: "₹1,499",
//     discount: "15% off",
//     rating: "4.0",
//     image: "wshirt1",
//     description:
//       "US Polo presents the Men's Polo Collar T-Shirt, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Regular Fit",
//       material: "Cotton",
//       sleeve: "Half Sleeve",
//       pattern: "Printed",
//       collar: "Spread Collar",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 7,
//     brand: "Roadster",
//     title: "Men's Casual Brown Jacket",
//     price: "₹2,999",
//     discount: "50% off",
//     rating: "4.6",
//     image: "wshirt1",
//     description:
//       "Roadster presents the Men's Casual Brown Jacket, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       material: "Polyester",
//       fit: "Regular Fit",
//       sleeve: "Full Sleeve",
//       closure: "Zip",
//       occasion: "Casual",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 8,
//     brand: "H&M",
//     title: "Men's White Cotton Shirt",
//     price: "₹1,099",
//     discount: "20% off",
//     rating: "4.4",
//     image: "wshirt1",
//     description:
//       "H&M presents the Men's White Cotton Shirt, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Regular Fit",
//       material: "Cotton",
//       sleeve: "Half Sleeve",
//       pattern: "Printed",
//       collar: "Spread Collar",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 9,
//     brand: "Levis",
//     title: "Men's Blue Denim Jacket",
//     price: "₹3,499",
//     discount: "30% off",
//     rating: "4.2",
//     image: "wshirt1",
//     description:
//       "Levis presents the Men's Blue Denim Jacket, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       material: "Denim",
//       fit: "Regular Fit",
//       sleeve: "Full Sleeve",
//       closure: "Zip",
//       occasion: "Casual",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 10,
//     brand: "Zara",
//     title: "Men's Slim Fit Trousers",
//     price: "₹2,199",
//     discount: "35% off",
//     rating: "4.1",
//     image: "wshirt1",
//     description:
//       "Zara presents the Men's Slim Fit Trousers, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Slim Fit",
//       material: "Cotton Blend",
//       waistband: "Elastic with Drawstring",
//       pockets: "2 Side Pockets",
//       pattern: "Solid",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 11,
//     brand: "Levis",
//     title: "Men's 541 Blue Athletic Tapered Fit Mid Rise Jeans",
//     price: "₹1,733",
//     discount: "30% off",
//     rating: "4.2",
//     image: "wshirt1",
//     description:
//       "Levis presents the Men's 541 Blue Athletic Tapered Fit Mid Rise Jeans, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Regular Fit",
//       material: "Cotton Blend",
//       color: "Blue",
//       closure: "Button and Zip",
//       wash: "Dark Wash",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 12,
//     brand: "Puma",
//     title: "Men's Black Running Shoes",
//     price: "₹2,499",
//     discount: "20% off",
//     rating: "4.0",
//     image: "wshirt1",
//     description:
//       "Puma presents the Men's Black Running Shoes, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       type: "Running Shoes",
//       material: "Mesh and Synthetic",
//       sole: "Rubber",
//       closure: "Lace-Up",
//       occasion: "Sports",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 13,
//     brand: "Nike",
//     title: "Men's Sports T-Shirt",
//     price: "₹899",
//     discount: "25% off",
//     rating: "4.5",
//     image: "wshirt1",
//     description:
//       "Nike presents the Men's Sports T-Shirt, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Regular Fit",
//       material: "Cotton",
//       sleeve: "Half Sleeve",
//       pattern: "Printed",
//       collar: "Spread Collar",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 14,
//     brand: "Adidas",
//     title: "Men's Solid Black Joggers",
//     price: "₹1,299",
//     discount: "35% off",
//     rating: "4.1",
//     image: "wshirt1",
//     description:
//       "Adidas presents the Men's Solid Black Joggers, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Regular Fit",
//       material: "Cotton Blend",
//       waistband: "Elastic with Drawstring",
//       pockets: "2 Side Pockets",
//       pattern: "Solid",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 15,
//     brand: "Levis",
//     title: "Men's Slim Fit Casual Shirt",
//     price: "₹1,199",
//     discount: "40% off",
//     rating: "4.3",
//     image: "wshirt1",
//     description:
//       "Levis presents the Men's Slim Fit Casual Shirt, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Slim Fit",
//       material: "Cotton",
//       sleeve: "Half Sleeve",
//       pattern: "Printed",
//       collar: "Spread Collar",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 16,
//     brand: "US Polo",
//     title: "Men's Polo Collar T-Shirt",
//     price: "₹1,499",
//     discount: "15% off",
//     rating: "4.0",
//     image: "wshirt1",
//     description:
//       "US Polo presents the Men's Polo Collar T-Shirt, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Regular Fit",
//       material: "Cotton",
//       sleeve: "Half Sleeve",
//       pattern: "Printed",
//       collar: "Spread Collar",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 17,
//     brand: "Roadster",
//     title: "Men's Casual Brown Jacket",
//     price: "₹2,999",
//     discount: "50% off",
//     rating: "4.6",
//     image: "wshirt1",
//     description:
//       "Roadster presents the Men's Casual Brown Jacket, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       material: "Polyester",
//       fit: "Regular Fit",
//       sleeve: "Full Sleeve",
//       closure: "Zip",
//       occasion: "Casual",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 18,
//     brand: "H&M",
//     title: "Men's White Cotton Shirt",
//     price: "₹1,099",
//     discount: "20% off",
//     rating: "4.4",
//     image: "wshirt1",
//     description:
//       "H&M presents the Men's White Cotton Shirt, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Regular Fit",
//       material: "Cotton",
//       sleeve: "Half Sleeve",
//       pattern: "Printed",
//       collar: "Spread Collar",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 19,
//     brand: "Levis",
//     title: "Men's Blue Denim Jacket",
//     price: "₹3,499",
//     discount: "30% off",
//     rating: "4.2",
//     image: "wshirt1",
//     description:
//       "Levis presents the Men's Blue Denim Jacket, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       material: "Denim",
//       fit: "Regular Fit",
//       sleeve: "Full Sleeve",
//       closure: "Zip",
//       occasion: "Casual",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 20,
//     brand: "Zara",
//     title: "Men's Slim Fit Trousers",
//     price: "₹2,199",
//     discount: "35% off",
//     rating: "4.1",
//     image: "wshirt1",
//     description:
//       "Zara presents the Men's Slim Fit Trousers, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Slim Fit",
//       material: "Cotton Blend",
//       waistband: "Elastic with Drawstring",
//       pockets: "2 Side Pockets",
//       pattern: "Solid",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 21,
//     brand: "Levis",
//     title: "Men's Casual Blue Shirt",
//     price: "₹1,833",
//     discount: "25% off",
//     rating: "4.0",
//     image: "wshirt1",
//     description:
//       "Levis presents the Men's Casual Blue Shirt, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Regular Fit",
//       material: "Cotton",
//       sleeve: "Half Sleeve",
//       pattern: "Printed",
//       collar: "Spread Collar",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 22,
//     brand: "Puma",
//     title: "Men's Red Training Shoes",
//     price: "₹3,299",
//     discount: "30% off",
//     rating: "4.4",
//     image: "wshirt1",
//     description:
//       "Puma presents the Men's Red Training Shoes, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       type: "Training Shoes",
//       material: "Mesh and Synthetic",
//       sole: "Rubber",
//       closure: "Lace-Up",
//       occasion: "Sports",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 23,
//     brand: "Nike",
//     title: "Men's Dry Fit Sports T-Shirt",
//     price: "₹1,099",
//     discount: "20% off",
//     rating: "4.5",
//     image: "wshirt1",
//     description:
//       "Nike presents the Men's Dry Fit Sports T-Shirt, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Regular Fit",
//       material: "Cotton",
//       sleeve: "Half Sleeve",
//       pattern: "Printed",
//       collar: "Spread Collar",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 24,
//     brand: "Adidas",
//     title: "Men's Casual Joggers",
//     price: "₹1,399",
//     discount: "30% off",
//     rating: "4.2",
//     image: "wshirt1",
//     description:
//       "Adidas presents the Men's Casual Joggers, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Regular Fit",
//       material: "Cotton Blend",
//       waistband: "Elastic with Drawstring",
//       pockets: "2 Side Pockets",
//       pattern: "Solid",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 25,
//     brand: "Levis",
//     title: "Men's Striped Polo Shirt",
//     price: "₹1,299",
//     discount: "35% off",
//     rating: "4.3",
//     image: "wshirt1",
//     description:
//       "Levis presents the Men's Striped Polo Shirt, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Regular Fit",
//       material: "Cotton",
//       sleeve: "Half Sleeve",
//       pattern: "Striped",
//       collar: "Spread Collar",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 26,
//     brand: "US Polo",
//     title: "Men's Navy Blue T-Shirt",
//     price: "₹999",
//     discount: "15% off",
//     rating: "4.1",
//     image: "wshirt1",
//     description:
//       "US Polo presents the Men's Navy Blue T-Shirt, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Regular Fit",
//       material: "Cotton",
//       sleeve: "Half Sleeve",
//       pattern: "Printed",
//       collar: "Spread Collar",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 27,
//     brand: "Roadster",
//     title: "Men's Grey Casual Jacket",
//     price: "₹3,199",
//     discount: "50% off",
//     rating: "4.6",
//     image: "wshirt1",
//     description:
//       "Roadster presents the Men's Grey Casual Jacket, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       material: "Polyester",
//       fit: "Regular Fit",
//       sleeve: "Full Sleeve",
//       closure: "Zip",
//       occasion: "Casual",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 28,
//     brand: "H&M",
//     title: "Men's Black Cotton Shirt",
//     price: "₹1,199",
//     discount: "20% off",
//     rating: "4.4",
//     image: "wshirt1",
//     description:
//       "H&M presents the Men's Black Cotton Shirt, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Regular Fit",
//       material: "Cotton",
//       sleeve: "Half Sleeve",
//       pattern: "Printed",
//       collar: "Spread Collar",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 29,
//     brand: "Levis",
//     title: "Men's Black Denim Jacket",
//     price: "₹3,699",
//     discount: "30% off",
//     rating: "4.2",
//     image: "wshirt1",
//     description:
//       "Levis presents the Men's Black Denim Jacket, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       material: "Denim",
//       fit: "Regular Fit",
//       sleeve: "Full Sleeve",
//       closure: "Zip",
//       occasion: "Casual",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 30,
//     brand: "Zara",
//     title: "Men's Formal Grey Trousers",
//     price: "₹2,499",
//     discount: "35% off",
//     rating: "4.1",
//     image: "wshirt1",
//     description:
//       "Zara presents the Men's Formal Grey Trousers, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Regular Fit",
//       material: "Cotton Blend",
//       waistband: "Elastic with Drawstring",
//       pockets: "2 Side Pockets",
//       pattern: "Solid",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 31,
//     brand: "Levis",
//     title: "Men's Classic Blue Jeans",
//     price: "₹2,099",
//     discount: "30% off",
//     rating: "4.3",
//     image: "wshirt1",
//     description:
//       "Levis presents the Men's Classic Blue Jeans, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Regular Fit",
//       material: "Cotton Blend",
//       color: "Blue",
//       closure: "Button and Zip",
//       wash: "Dark Wash",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 32,
//     brand: "Puma",
//     title: "Men's Grey Running Shoes",
//     price: "₹3,499",
//     discount: "25% off",
//     rating: "4.4",
//     image: "wshirt1",
//     description:
//       "Puma presents the Men's Grey Running Shoes, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       type: "Running Shoes",
//       material: "Mesh and Synthetic",
//       sole: "Rubber",
//       closure: "Lace-Up",
//       occasion: "Sports",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 33,
//     brand: "Nike",
//     title: "Men's Gym Tank Top",
//     price: "₹799",
//     discount: "20% off",
//     rating: "4.2",
//     image: "wshirt1",
//     description:
//       "Nike presents the Men's Gym Tank Top, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Regular Fit",
//       material: "Polyester",
//       sleeve: "Sleeveless",
//       neck: "Round Neck",
//       technology: "Dri-FIT",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 34,
//     brand: "Adidas",
//     title: "Men's Slim Fit Joggers",
//     price: "₹1,499",
//     discount: "35% off",
//     rating: "4.1",
//     image: "wshirt1",
//     description:
//       "Adidas presents the Men's Slim Fit Joggers, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Slim Fit",
//       material: "Cotton Blend",
//       waistband: "Elastic with Drawstring",
//       pockets: "2 Side Pockets",
//       pattern: "Solid",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 35,
//     brand: "Levis",
//     title: "Men's Regular Fit Shirt",
//     price: "₹1,299",
//     discount: "40% off",
//     rating: "4.3",
//     image: "wshirt1",
//     description:
//       "Levis presents the Men's Regular Fit Shirt, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Regular Fit",
//       material: "Cotton",
//       sleeve: "Half Sleeve",
//       pattern: "Printed",
//       collar: "Spread Collar",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 36,
//     brand: "US Polo",
//     title: "Men's Classic T-Shirt",
//     price: "₹1,199",
//     discount: "15% off",
//     rating: "4.0",
//     image: "wshirt1",
//     description:
//       "US Polo presents the Men's Classic T-Shirt, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Regular Fit",
//       material: "Cotton",
//       sleeve: "Half Sleeve",
//       pattern: "Printed",
//       collar: "Spread Collar",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 37,
//     brand: "Roadster",
//     title: "Men's Black Leather Jacket",
//     price: "₹4,499",
//     discount: "45% off",
//     rating: "4.7",
//     image: "wshirt1",
//     description:
//       "Roadster presents the Men's Black Leather Jacket, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       material: "Leather",
//       fit: "Regular Fit",
//       sleeve: "Full Sleeve",
//       closure: "Zip",
//       occasion: "Casual",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 38,
//     brand: "H&M",
//     title: "Men's Formal White Shirt",
//     price: "₹1,299",
//     discount: "20% off",
//     rating: "4.4",
//     image: "wshirt1",
//     description:
//       "H&M presents the Men's Formal White Shirt, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Regular Fit",
//       material: "Cotton",
//       sleeve: "Full Sleeve",
//       pattern: "Printed",
//       collar: "Spread Collar",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 39,
//     brand: "Levis",
//     title: "Men's Grey Denim Jacket",
//     price: "₹3,799",
//     discount: "30% off",
//     rating: "4.2",
//     image: "wshirt1",
//     description:
//       "Levis presents the Men's Grey Denim Jacket, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       material: "Denim",
//       fit: "Regular Fit",
//       sleeve: "Full Sleeve",
//       closure: "Zip",
//       occasion: "Casual",
//     },
//     availability: "In Stock",
//   },
//   {
//     id: 40,
//     brand: "Zara",
//     title: "Men's Slim Fit Formal Trousers",
//     price: "₹2,699",
//     discount: "35% off",
//     rating: "4.1",
//     image: "wshirt1",
//     description:
//       "Zara presents the Men's Slim Fit Formal Trousers, designed with premium quality and style. Perfect for modern men who value comfort and fashion.",
//     specifications: {
//       fit: "Slim Fit",
//       material: "Cotton Blend",
//       waistband: "Elastic with Drawstring",
//       pockets: "2 Side Pockets",
//       pattern: "Solid",
//     },
//     availability: "In Stock",
//   },
// ];

const Productt = () => {
  const { id } = useParams();
  const [productt, setProduct] = useState(null);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/get/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

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

export default Productt;

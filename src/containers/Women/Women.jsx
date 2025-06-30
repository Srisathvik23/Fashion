import React, { useEffect, useState } from "react";
import "../Women/Women.css";
// import wshirt1 from "../../assets/Women/wshirt1.png";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../services/womenProductAPI";

const Women = () => {
  const navigate = useNavigate();
  const [womenProducts, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState("featured");

  // const womensCollection = [
  //   {
  //     id: 1,
  //     brand: "Levis",
  //     title: "Men's 541 Blue Athletic Tapered Fit Mid Rise Jeans",
  //     price: "₹1,733",
  //     discount: "30% off",
  //     rating: "4.2",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 2,
  //     brand: "Puma",
  //     title: "Men's Black Running Shoes",
  //     price: "₹2,499",
  //     discount: "20% off",
  //     rating: "4.0",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 3,
  //     brand: "Nike",
  //     title: "Men's Sports T-Shirt",
  //     price: "₹899",
  //     discount: "25% off",
  //     rating: "4.5",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 4,
  //     brand: "Adidas",
  //     title: "Men's Solid Black Joggers",
  //     price: "₹1,299",
  //     discount: "35% off",
  //     rating: "4.1",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 5,
  //     brand: "Levis",
  //     title: "Men's Slim Fit Casual Shirt",
  //     price: "₹1,199",
  //     discount: "40% off",
  //     rating: "4.3",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 6,
  //     brand: "US Polo",
  //     title: "Men's Polo Collar T-Shirt",
  //     price: "₹1,499",
  //     discount: "15% off",
  //     rating: "4.0",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 7,
  //     brand: "Roadster",
  //     title: "Men's Casual Brown Jacket",
  //     price: "₹2,999",
  //     discount: "50% off",
  //     rating: "4.6",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 8,
  //     brand: "H&M",
  //     title: "Men's White Cotton Shirt",
  //     price: "₹1,099",
  //     discount: "20% off",
  //     rating: "4.4",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 9,
  //     brand: "Levis",
  //     title: "Men's Blue Denim Jacket",
  //     price: "₹3,499",
  //     discount: "30% off",
  //     rating: "4.2",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 10,
  //     brand: "Zara",
  //     title: "Men's Slim Fit Trousers",
  //     price: "₹2,199",
  //     discount: "35% off",
  //     rating: "4.1",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 11,
  //     brand: "Levis",
  //     title: "Men's 541 Blue Athletic Tapered Fit Mid Rise Jeans",
  //     price: "₹1,733",
  //     discount: "30% off",
  //     rating: "4.2",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 12,
  //     brand: "Puma",
  //     title: "Men's Black Running Shoes",
  //     price: "₹2,499",
  //     discount: "20% off",
  //     rating: "4.0",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 13,
  //     brand: "Nike",
  //     title: "Men's Sports T-Shirt",
  //     price: "₹899",
  //     discount: "25% off",
  //     rating: "4.5",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 14,
  //     brand: "Adidas",
  //     title: "Men's Solid Black Joggers",
  //     price: "₹1,299",
  //     discount: "35% off",
  //     rating: "4.1",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 15,
  //     brand: "Levis",
  //     title: "Men's Slim Fit Casual Shirt",
  //     price: "₹1,199",
  //     discount: "40% off",
  //     rating: "4.3",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 16,
  //     brand: "US Polo",
  //     title: "Men's Polo Collar T-Shirt",
  //     price: "₹1,499",
  //     discount: "15% off",
  //     rating: "4.0",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 17,
  //     brand: "Roadster",
  //     title: "Men's Casual Brown Jacket",
  //     price: "₹2,999",
  //     discount: "50% off",
  //     rating: "4.6",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 18,
  //     brand: "H&M",
  //     title: "Men's White Cotton Shirt",
  //     price: "₹1,099",
  //     discount: "20% off",
  //     rating: "4.4",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 19,
  //     brand: "Levis",
  //     title: "Men's Blue Denim Jacket",
  //     price: "₹3,499",
  //     discount: "30% off",
  //     rating: "4.2",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 20,
  //     brand: "Zara",
  //     title: "Men's Slim Fit Trousers",
  //     price: "₹2,199",
  //     discount: "35% off",
  //     rating: "4.1",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 21,
  //     brand: "Levis",
  //     title: "Men's Casual Blue Shirt",
  //     price: "₹1,833",
  //     discount: "25% off",
  //     rating: "4.0",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 22,
  //     brand: "Puma",
  //     title: "Men's Red Training Shoes",
  //     price: "₹3,299",
  //     discount: "30% off",
  //     rating: "4.4",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 23,
  //     brand: "Nike",
  //     title: "Men's Dry Fit Sports T-Shirt",
  //     price: "₹1,099",
  //     discount: "20% off",
  //     rating: "4.5",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 24,
  //     brand: "Adidas",
  //     title: "Men's Casual Joggers",
  //     price: "₹1,399",
  //     discount: "30% off",
  //     rating: "4.2",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 25,
  //     brand: "Levis",
  //     title: "Men's Striped Polo Shirt",
  //     price: "₹1,299",
  //     discount: "35% off",
  //     rating: "4.3",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 26,
  //     brand: "US Polo",
  //     title: "Men's Navy Blue T-Shirt",
  //     price: "₹999",
  //     discount: "15% off",
  //     rating: "4.1",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 27,
  //     brand: "Roadster",
  //     title: "Men's Grey Casual Jacket",
  //     price: "₹3,199",
  //     discount: "50% off",
  //     rating: "4.6",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 28,
  //     brand: "H&M",
  //     title: "Men's Black Cotton Shirt",
  //     price: "₹1,199",
  //     discount: "20% off",
  //     rating: "4.4",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 29,
  //     brand: "Levis",
  //     title: "Men's Black Denim Jacket",
  //     price: "₹3,699",
  //     discount: "30% off",
  //     rating: "4.2",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 30,
  //     brand: "Zara",
  //     title: "Men's Formal Grey Trousers",
  //     price: "₹2,499",
  //     discount: "35% off",
  //     rating: "4.1",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 31,
  //     brand: "Levis",
  //     title: "Men's Classic Blue Jeans",
  //     price: "₹2,099",
  //     discount: "30% off",
  //     rating: "4.3",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 32,
  //     brand: "Puma",
  //     title: "Men's Grey Running Shoes",
  //     price: "₹3,499",
  //     discount: "25% off",
  //     rating: "4.4",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 33,
  //     brand: "Nike",
  //     title: "Men's Gym Tank Top",
  //     price: "₹799",
  //     discount: "20% off",
  //     rating: "4.2",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 34,
  //     brand: "Adidas",
  //     title: "Men's Slim Fit Joggers",
  //     price: "₹1,499",
  //     discount: "35% off",
  //     rating: "4.1",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 35,
  //     brand: "Levis",
  //     title: "Men's Regular Fit Shirt",
  //     price: "₹1,299",
  //     discount: "40% off",
  //     rating: "4.3",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 36,
  //     brand: "US Polo",
  //     title: "Men's Classic T-Shirt",
  //     price: "₹1,199",
  //     discount: "15% off",
  //     rating: "4.0",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 37,
  //     brand: "Roadster",
  //     title: "Men's Black Leather Jacket",
  //     price: "₹4,499",
  //     discount: "45% off",
  //     rating: "4.7",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 38,
  //     brand: "H&M",
  //     title: "Men's Formal White Shirt",
  //     price: "₹1,299",
  //     discount: "20% off",
  //     rating: "4.4",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 39,
  //     brand: "Levis",
  //     title: "Men's Grey Denim Jacket",
  //     price: "₹3,799",
  //     discount: "30% off",
  //     rating: "4.2",
  //     image: wshirt1,
  //   },
  //   {
  //     id: 40,
  //     brand: "Zara",
  //     title: "Men's Slim Fit Formal Trousers",
  //     price: "₹2,699",
  //     discount: "35% off",
  //     rating: "4.1",
  //     image: wshirt1,
  //   },
  // ];

  // Fetch Products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const processedData = womenProducts
    .filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "lowToHigh") {
        return parseFloat(a.price) - parseFloat(b.price);
      } else if (sortOption === "highToLow") {
        return parseFloat(b.price) - parseFloat(a.price);
      }
      return 0;
    });

  return (
    <div className="main-layout">
      {/* Filter Section */}
      <section className="women-1">
        <button>Filters</button>
        <p>WOMEN</p>
        <select
          name="sorting"
          id="sorting"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="featured">Featured</option>
          <option value="lowtohigh">Low to High</option>
          <option value="hightolow">High to Low</option>
          <option value="popularity">Popularity</option>
        </select>
      </section>

      <div className="content-area">
        <input
          type="text"
          placeholder="type search here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-box"
        />

        <ul className="women-container">
          {processedData.length > 0 ? (
            processedData.map((item) => (
              <li
                key={item.id}
                className="women-item"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <img
                  src={`http://localhost:3000${item.image}`}
                  alt={item.title}
                />
                <h3>{item.name}</h3>
                <h6>{item.description}</h6>
                <p>
                  {item.price} <span>{item.discount}</span>{" "}
                </p>
              </li>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Women;

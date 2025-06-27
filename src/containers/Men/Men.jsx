import React, { useEffect, useState } from "react";
import "../Men/Men.css";
import mshirt1 from "../../assets/Men/mshirt1.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getAllProducts } from "../../services/menProductAPI";

const Men = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState("featured");

  // ------------------------------------------------------------------------------

  // API INTEGRATION

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(response.data);
      console.log(response.data, "jdcytdgcyuhdb");
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // ------------------------------------------------------------------------------
  const processedData = products
    .filter(
      (item) =>
        item.brand?.toLowerCase().includes(query.toLowerCase()) ||
        item.title?.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "lowToHigh") {
        return parseFloat(a.price) - parseFloat(b.price);
      } else if (sortOption === "highToLow") {
        return parseFloat(b.price) - parseFloat(a.price);
      } else if (sortOption === "popularity") {
        return parseFloat(b.rating) - parseFloat(a.rating);
      }
      return 0;
    });

  return (
    <div className="main-layout">
      {/* Filter Section */}
      <section className="men-1">
        <button>Filters</button>
        <p>MEN</p>
        <select
          name="sorting"
          id="sorting"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="featured ">Featured</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
          <option value="popularity">Popularity</option>
        </select>
      </section>

      {/* Search & Product List */}
      <div className="content-area">
        <input
          type="text"
          placeholder="Type to search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-box"
        />

        <ul className="men-container">
          {products.length > 0 ? (
            products.map((item) => (
              <li key={item._id} className="men-item" onClick={() => navigate(`/product/${item.id}`)}>
                <img
                  src={`http://localhost:3000${item.image}`}
                  alt={item.title}
                />
                <h3>{item.brand}</h3>
                <h6>{item.title}</h6>
                <p>Rating: {item.rating}</p>
                <p>
                  {item.price} <span>{item.discount}</span>
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

export default Men;

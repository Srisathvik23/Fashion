import React, { useEffect, useState } from "react";
import "../Women/Women.css";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../services/womenProductAPI";

const Women = () => {
  const navigate = useNavigate();
  const [womenProducts, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState("featured");


 

  const fetchWomenProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

   // Fetch Products
  useEffect(() => {
    fetchWomenProducts();
  }, []);

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
          <option value="featured">Popularity</option>
          <option value="lowtohigh">Low to High</option>
          <option value="hightolow">High to Low</option>
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
                onClick={() => navigate(`/womenproduct/${item._id}`)}
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

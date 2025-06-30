import React, { useEffect, useState } from "react";
import "../Men/Men.css";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../services/menProductAPI";

const Men = () => {
  const navigate = useNavigate();
  const [menProducts, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState("featured");

  const fetchMenProducts = async () => {
    try {
      const response = await getAllProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Fetch Products
  useEffect(() => {
    fetchMenProducts();
  }, []);

  const processedData = menProducts
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
      <section className="men-1">
        <button>Filters</button>
        <p>MEN</p>
        <select
          name="sorting"
          id="sorting"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="featured">Popularity</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
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
          {processedData.length > 0 ? (
            processedData.map((item) => (
              <li
                key={item._id}
                className="men-item"
                onClick={() => navigate(`/menproduct/${item._id}`)}
              >
                <img
                  src={`http://localhost:3000${item.image}`}
                  alt={item.name}
                />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>
                  ₹{item.price} <span>{item.discount}</span>
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

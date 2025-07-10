import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";

const ProductList = ({ title, fetchProductsApi, navigatePath }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState("featured");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchProductsApi();
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchData();
  }, []);

  const processedData = products
    .filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      //  || item.description.toLowerCase().includes(query.toLowerCase())
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
    <div className="pl-main-layout">
      <section className="pl-filter-section">
        <button>Filters</button>
        <p>{title}</p>
        <select
          name="sorting"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="featured">Popularity</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </section>

      <div className="pl-content-area">
        <input
          type="text"
          placeholder="Search here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-search-box"
        />

        <ul className="pl-product-container">
          {processedData.length > 0 ? (
            processedData.map((item) => (
              <li
                key={item._id}
                className="pl-product-item"
                onClick={() => navigate(`/${navigatePath}/${item._id}`)}
              >
                <img
                  src={`http://localhost:3000${item.image}`}
                  alt={item.name}
                />
                <h3>{item.name}</h3>
                <h6>{item.description}</h6>
                <p>
                  ₹{item.price}{" "}
                  {item.discount && <span>{item.discount} OFF</span>}
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

export default ProductList;

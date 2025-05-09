import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

const SeasonalCollections = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); // Sorting state

  useEffect(() => {
    axios.get("http://localhost:4001/seasonalcollection/get/list")
      .then((response) => {
        setItems(response?.data?.collectionlist);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Filter items based on search input
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort items based on price
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.price - b.price;
    } else if (sortOrder === "highToLow") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
      <div className="seasonal-title">
        <h1>~~~ Seasonal Collections ~~~ </h1>
        <h3>Explore our curated seasonal collections for the latest trends and styles.</h3>
      </div>

      {/* Search and Filter */}
      <div className="filter-container" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Search seasonal items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        {/* Sort by Price Dropdown */}
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="sort-dropdown">
          <option value="">Sort by Price</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>

      {/* Display Products */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        {sortedItems.length > 0 ? (
          sortedItems.map((item, index) => (
            <Card
              key={index}
              image={item.icon}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          ))
        ) : (
          <p style={{ fontSize: "18px", fontWeight: "bold", color: "#888" }}>No item matched</p>
        )}
      </div>
    </div>
  );
};

export default SeasonalCollections;

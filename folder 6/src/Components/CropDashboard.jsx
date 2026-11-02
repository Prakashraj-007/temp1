import React, { useState, useEffect } from "react";
import CropList from "./CropList";

function CropDashboard({ initialCrops = [] }) {
  const [query, setQuery] = useState("");
  const [filteredCrops, setFilteredCrops] = useState(initialCrops);

  useEffect(function () {
    var q = query.toLowerCase();

    var result = initialCrops.filter(function (crop) {
      return crop.name.toLowerCase().includes(q);
    });

    setFilteredCrops(result);
  }, [query, initialCrops]);

  function handleSearch(event) {
    setQuery(event.target.value);
  }

  return (
    <div>
      <label htmlFor="crop-search">Search by Crop Name</label>

      <input
        id="crop-search"
        type="text"
        placeholder="Search crops..."
        value={query}
        onChange={handleSearch}
      />

      <CropList crops={filteredCrops} />
    </div>
  );
}

export default CropDashboard;
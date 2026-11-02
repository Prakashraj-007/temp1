
import React from "react";
import "./App.css";
import CropDashboard from "./Components/CropDashboard";

function App() {
  var initialCrops = [
    { name: "Tomato", type: "Vegetables", status: "Growing" },
    { name: "Apple", type: "Fruits", status: "Planted" },
    { name: "Wheat", type: "Grains", status: "Harvested" },
    { name: "Carrot", type: "Vegetables", status: "Growing" },
    { name: "Banana", type: "Fruits", status: "Growing" }
  ];

  return (
    <div className="App">
      <h1>Crop Management System</h1>
      <CropDashboard initialCrops={initialCrops} />
    </div>
  );
}

export default App;

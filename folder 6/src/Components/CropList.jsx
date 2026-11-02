import React from "react";

function CropList({ crops = [] }) {
  return (
    <ul>
      {crops.map(function (crop, index) {
        return (
          <li key={index}>
            {crop.name} - {crop.type} ({crop.status})
          </li>
        );
      })}
    </ul>
  );
}

export default CropList;
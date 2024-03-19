import React, { useState, useEffect } from "react";
import "./Checkbox.css";

const Checkbox = ({ checkboxOptions }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (option, index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else if (selectedItems.length < 2) {
      setSelectedItems([...selectedItems, index]);
    }
  };

  return (
    <div className="checkbox">
      <span className="label">{"Select your preferred units"}</span>
      {checkboxOptions.map((option, index) => (
        <div className="checkbox-item" key={index}>
          <input
            type="checkbox"
            value={option}
            checked={selectedItems.includes(index)}
            onChange={() => handleCheckboxChange(option, index)}
          />
          <label>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;

import React, { useState, useEffect } from "react";
import "./Checkbox.css";

const Checkbox = ({ checkboxOptions, onChange, name}) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (option, index) => {
    const selectedItem = {
      name: name,
      value: option,
      id: index + 1, // Assuming id starts from 1, adjust this accordingly
    };
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    }
    else if (selectedItems.length < 2) {
      setSelectedItems([...selectedItems, index]);
     
    }
    
    // onChange(selectedItem); 
  };

  return (
    <div className="checkbox">
      <span className="label">{"Select your preferred units"}</span>
      {checkboxOptions.map((option, index) => (
        <div className="checkbox-item" key={index}>
          <input
            type="checkbox"
            value={option}
            name={name}
            checked={selectedItems.includes(index)}
            onChange={() => handleCheckboxChange(option, index)}
            onClick={onChange}
          />
          <label>{option}</label>
        </div>
      ))}
      {selectedItems.length >= 2 && (
        <p className="errorMessage">You can only select two items</p>
      )}
    </div>
  );
};

export default Checkbox;

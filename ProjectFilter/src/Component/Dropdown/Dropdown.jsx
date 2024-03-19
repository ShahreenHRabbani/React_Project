import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.css"; // Ensure to create this CSS file

const SearchableDropdown = ({  options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFiltere] = useState(options);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setFiltere(
      options.filter((option) =>
        option.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, options]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setSearch("");
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <span className="label">{"Select your area"}</span>
      <div className="header" onClick={() => setIsOpen(!isOpen)}>  
        <span className={`arrow ${isOpen ? "open" : ""}`}></span>
      </div>
      {isOpen && (
        <div className="menu">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search"
          />
          <ul className="list">
            {filter.map((option, index) => (
              <li
                key={index}
                className="item"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;

import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.css"; // Ensure to create this CSS file

const SearchableDropdown = ({ dropdownOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFiltere] = useState(dropdownOptions);
  const [selectedItem, setselectedItem] = useState(null);
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
      dropdownOptions.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, dropdownOptions]);

  const handleOptionClick = (item) => {
    setselectedItem(item);
    setIsOpen(false);
    setSearch("");
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <span className="label">{"Select your area"}</span>

      {/* <span className={`arrow ${isOpen ? "open" : ""}`}></span> */}
      <input
        type="text"
        placeholder="Search..."
        value={selectedItem || search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
        onClick={() => setIsOpen(!isOpen)}/>

      {isOpen && (
        <div className="menu">
          <ul className="list">
            {filter.map((item, index) => (
              <li
                key={index}
                className="item"
                onClick={() => handleOptionClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;

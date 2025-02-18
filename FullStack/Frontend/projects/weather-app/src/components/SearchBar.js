// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onCityChange }) => {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchClick = () => {
    onCityChange(city);
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      <input
        type="text"
        placeholder="Enter the city name"
        value={city}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded focus:outline-none"
      />
      <button
        onClick={handleSearchClick}
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

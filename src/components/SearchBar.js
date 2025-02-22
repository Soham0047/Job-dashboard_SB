// src/components/SearchBar.js
import React from 'react';

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <input 
      type="text"
      placeholder="Search by title or company..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="search-bar"
    />
  );
}

export default SearchBar;

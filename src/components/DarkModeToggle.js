// src/components/DarkModeToggle.js
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function DarkModeToggle({ darkMode, setDarkMode }) {
  const handleToggle = () => setDarkMode(!darkMode);

  return (
    <div className="toggle-container">
      <FaSun className="toggle-icon sun" />
      <label className="toggle-switch">
        <input 
          type="checkbox" 
          checked={darkMode} 
          onChange={handleToggle} 
        />
        <span className="slider"></span>
      </label>
      <FaMoon className="toggle-icon moon" />
    </div>
  );
}

export default DarkModeToggle;

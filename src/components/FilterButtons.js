// src/components/FilterButtons.js
import React from 'react';

const statuses = ["All", "Applied", "Interviewing", "Rejected", "Offer Received"];

function FilterButtons({ setFilterStatus }) {
  return (
    <div className="filter-buttons">
      {statuses.map(status => (
        <button 
          key={status} 
          onClick={() => setFilterStatus(status === "All" ? "" : status)}
        >
          {status}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;

// src/components/JobCard.js
import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const statuses = ["Applied", "Interviewing", "Rejected", "Offer Received"];

function JobCard({ application, updateApplication, deleteApplication }) {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(application.status);

  const handleStatusChange = (e) => setSelectedStatus(e.target.value);

  const handleStatusUpdate = () => {
    updateApplication(application.id, { status: selectedStatus });
    setIsEditing(false);
  };

  return (
    <div className="job-card">
      <h2>{application.title}</h2>
      <p>{application.company}</p>
      <p>
        {isEditing ? (
          <select 
            value={selectedStatus} 
            onChange={handleStatusChange} 
            onBlur={handleStatusUpdate}
            autoFocus
          >
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        ) : (
          <span className="status">
            {application.status}
          </span>
        )}
      </p>
      <p>Date Applied: {new Date(application.date_applied).toLocaleDateString()}</p>
      <div className="actions">
        <button className="edit-btn" onClick={() => setIsEditing(true)}>
          <FaEdit />
        </button>
        <button className="delete-btn" onClick={() => deleteApplication(application.id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default JobCard;

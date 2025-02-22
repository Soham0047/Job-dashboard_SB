// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import SearchBar from './SearchBar';
import FilterButtons from './FilterButtons';
import Pagination from './Pagination';
import { motion, AnimatePresence } from 'framer-motion';

function Dashboard({ applications, setApplications }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc' for newest first, 'asc' for oldest first
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Items per page

  // Updating functions for applications
  const updateApplication = (id, updatedData) => {
    const updatedApps = applications.map(app =>
      app.id === id ? { ...app, ...updatedData } : app
    );
    setApplications(updatedApps);
  };

  const deleteApplication = (id) => {
    const updatedApps = applications.filter(app => app.id !== id);
    setApplications(updatedApps);
  };

  // Filtering applications based on search and status
  const filteredApplications = applications.filter(app => {
    const matchesSearch =
      app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus ? app.status === filterStatus : true;
    return matchesSearch && matchesStatus;
  });

  // Sorting applications by date applied according to sortOrder
  const sortedApplications = filteredApplications.sort((a, b) => {
    if (sortOrder === 'desc') {
      return new Date(b.date_applied) - new Date(a.date_applied);
    } else {
      return new Date(a.date_applied) - new Date(b.date_applied);
    }
  });

  // Pagination calculations
  const totalPages = Math.ceil(sortedApplications.length / itemsPerPage);
  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs = sortedApplications.slice(indexOfFirstJob, indexOfLastJob);

  // When page changes scroll to top
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reseting page to 1 when filtering or sorting changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filterStatus, sortOrder]);

  return (
    <div className="dashboard">
      <div className="controls">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <FilterButtons setFilterStatus={setFilterStatus} />
        {/* Sorting Dropdown */}
        <div className="sort-container">
          <label htmlFor="sortOrder">Sort by Date: </label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="desc">Newest First</option>
            <option value="asc">Oldest First</option>
          </select>
        </div>
      </div>
      <div className="job-list">
        <AnimatePresence>
          {currentJobs.map(app => (
            <motion.div 
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <JobCard
                application={app}
                updateApplication={updateApplication}
                deleteApplication={deleteApplication}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <Pagination 
         currentPage={currentPage} 
         totalPages={totalPages} 
         onPageChange={handlePageChange} 
      />
    </div>
  );
}

export default Dashboard;

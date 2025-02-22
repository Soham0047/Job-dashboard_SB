// src/App.js
import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

function App() {
  const [applications, setApplications] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Loading from local storage if available
    const storedApplications = localStorage.getItem('applications');
    if (storedApplications) {
      setApplications(JSON.parse(storedApplications));
    } else {
      // Fetch from our mock JSON file
      fetch('/data/applications.json')
        .then(response => response.json())
        .then(data => {
          setApplications(data);
          localStorage.setItem('applications', JSON.stringify(data));
        });
    }
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem('applications');
    if (storedData && JSON.parse(storedData).length > 0) {
      setApplications(JSON.parse(storedData));
    } else {
      fetch('/data/applications.json')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setApplications(data);
          localStorage.setItem('applications', JSON.stringify(data));
        })
        .catch(error => {
          console.error('Fetch error:', error);
        });
    }
  }, []);

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <header>
        <h1>Job Applications Dashboard</h1>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
      <Dashboard applications={applications} setApplications={setApplications} />
    </div>
  );
}

export default App;

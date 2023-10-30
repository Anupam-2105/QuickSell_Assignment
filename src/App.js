import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import './App.css';
import { fetchApi } from './actions/api'; // Import the fetchApi function

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedGrouping, setSelectedGrouping] = useState('status');
  const [selectedOrdering, setSelectedOrdering] = useState('users');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Use the fetchApi function from api.jsx to fetch data
  useEffect(() => {
    fetchApi(setTickets, setUsers);
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="App">
      <div className="app-container">
        <Navbar
          selectedGrouping={selectedGrouping}
          setSelectedGrouping={setSelectedGrouping}
          selectedOrdering={selectedOrdering}
          setSelectedOrdering={setSelectedOrdering}
          users={users}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          dropdownRef={dropdownRef}
        />
        <Dashboard
          users={users}
          tickets={tickets}
          selectedGrouping={selectedGrouping}
          selectedOrdering={selectedOrdering}
        />
      </div>
    </div>
  );
}

export default App;

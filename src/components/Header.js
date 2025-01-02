import React, { useState } from 'react';
import './Header.scss'; 
import { IoIosSearch } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { LuBellDot } from "react-icons/lu";
import user from '../images/user.png';
import { FaBars } from "react-icons/fa"; 

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="app-container">
      <div className="app-header">
      <input type="checkbox" role="button" aria-label="Display the menu" className="menu" />
        <div className="overview-section">
          <span className="overview-text">Overview</span>
        </div>
        <div className="user-actions">
          <div className="search-container">
            <IoIosSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search for something"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <button className="settings-button">
            <SlSettings />
          </button>
          <button className="notifications-button">
            <LuBellDot />
          </button>
          <div className="user-profile">
            <img src={user} alt="User Profile" /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
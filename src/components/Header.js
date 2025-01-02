import React, { useState } from 'react';
import './Header.scss'; 
import { IoIosSearch } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { LuBellDot } from "react-icons/lu";
import user from '../images/user.png';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <div className="overview-section">
          <span className="overview-text">Overview</span>
        </div>
        <div className="search-container">
          <IoIosSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for something"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="user-actions">
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
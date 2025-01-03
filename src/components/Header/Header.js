import React, { useState, useRef } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { LuBellDot } from "react-icons/lu";
import user from '../../images/user.png';
import menuItems from '../Shared/menuItems/menuItems'; // Import menuItems


function Header({ activeIndex, handleItemClick }) {
  const [searchTerm, setSearchTerm] = useState('');
  const menuToggleRef = useRef(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLinkClick = (index) => {
    handleItemClick(index);
    if (menuToggleRef.current) {
      menuToggleRef.current.checked = false; // Uncheck the checkbox
    }
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <input type="checkbox" id="menuToggle" ref={menuToggleRef} role="button" aria-label="Display the menu" className="menu" />
        <nav className="nav-menu">
        <ul>
        {menuItems.map((item) => (
          <Link to={item.to} onClick={() => handleLinkClick(item.index)}>
            <li key={item.index} className={activeIndex === item.index ? 'active' : ''}>
              {item.icon} {item.label}
            </li>
          </Link>
        ))}
      </ul>
        </nav>
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
          <Link to={menuItems[menuItems.length - 1].to} onClick={() => handleLinkClick(menuItems[menuItems.length - 1].index)}>
            <SlSettings />
          </Link>
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
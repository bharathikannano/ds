import React from 'react';
import { Link } from 'react-router-dom';
import menuItems from './menuItems'; //Import menuItems
import './Sidebar.scss';

const Sidebar = ({ activeIndex, handleItemClick }) => {
  return (
    <div className="sidebar">
      <h2>Soar Task</h2>
      <ul>
        {menuItems.map((item) => (
          <Link to={item.to} onClick={() => handleItemClick(item.index)}>
            <li key={item.index} className={activeIndex === item.index ? 'active' : ''}>
              {item.icon} {item.label}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { MdManageAccounts } from 'react-icons/md';
import { GrMoney } from 'react-icons/gr';
import { ImCreditCard } from 'react-icons/im';
import { GiReceiveMoney, GiAutoRepair } from 'react-icons/gi';
import { VscLightbulbSparkle } from 'react-icons/vsc';
import { SlSettings } from 'react-icons/sl';
import './Sidebar.scss';

const Sidebar = ({ activeIndex, handleItemClick }) => {
  const menuItems = [
    { index: 0, to: "/", icon: <AiFillHome />, label: "Dashboard" },
    { index: 1, to: "/transactions", icon: <FaMoneyBillTransfer />, label: "Transactions" },
    { index: 2, to: "/accounts", icon: <MdManageAccounts />, label: "Accounts" },
    { index: 3, to: "/investments", icon: <GrMoney />, label: "Investments" },
    { index: 4, to: "/credit-cards", icon: <ImCreditCard />, label: "Credit Cards" },
    { index: 5, to: "/loans", icon: <GiReceiveMoney />, label: "Loans" },
    { index: 6, to: "/services", icon: <GiAutoRepair />, label: "Services" },
    { index: 7, to: "/privileges", icon: <VscLightbulbSparkle />, label: "My Privileges" },
    { index: 8, to: "/settings", icon: <SlSettings />, label: "Setting" },
  ];

  return (
    <div className="sidebar">
      <h2>Soar Task</h2>
      <ul>
        {menuItems.map((item) => (
           <Link to={item.to} onClick={() => handleItemClick(item.index)}>
          <li
            key={item.index}
            className={activeIndex === item.index ? 'active' : ''}>
              {item.icon} {item.label}
          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
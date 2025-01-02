import React, { useState } from 'react';
import { AiFillHome } from "react-icons/ai";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { ImCreditCard } from "react-icons/im";
import { GiReceiveMoney, GiAutoRepair } from "react-icons/gi";
import { VscLightbulbSparkle } from "react-icons/vsc";
import { SlSettings } from "react-icons/sl";
import './Sidebar.scss';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="sidebar">
      <h2>Soar Task</h2>
      <ul>
        <li className={activeIndex === 0 ? 'active' : ''} onClick={() => handleItemClick(0)}>
          <AiFillHome /> Dashboard
        </li>
        <li className={activeIndex === 1 ? 'active' : ''} onClick={() => handleItemClick(1)}>
          <FaMoneyBillTransfer /> Transactions
        </li>
        <li className={activeIndex === 2 ? 'active' : ''} onClick={() => handleItemClick(2)}>
          <MdManageAccounts /> Accounts
        </li>
        <li className={activeIndex === 3 ? 'active' : ''} onClick={() => handleItemClick(3)}>
          <GrMoney /> Investments
        </li>
        <li className={activeIndex === 4 ? 'active' : ''} onClick={() => handleItemClick(4)}>
          <ImCreditCard /> Credit Cards
        </li>
        <li className={activeIndex === 5 ? 'active' : ''} onClick={() => handleItemClick(5)}>
          <GiReceiveMoney /> Loans
        </li>
        <li className={activeIndex === 6 ? 'active' : ''} onClick={() => handleItemClick(6)}>
          <GiAutoRepair /> Services
        </li>
        <li className={activeIndex === 7 ? 'active' : ''} onClick={() => handleItemClick(7)}>
          <VscLightbulbSparkle /> My Privileges
        </li>
        <li className={activeIndex === 8 ? 'active' : ''} onClick={() => handleItemClick(8)}>
          <SlSettings /> Setting
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
import React from 'react';
import './MoneyTransfer.scss';
import { PiTelegramLogo } from "react-icons/pi";

const MoneyTransfer = () => {
  return (
    <div className="transfer-container">
      <div className="amount-input">
        <span>Write Amount</span>
        <input type="number" value="525.50" disabled />
      </div>
      <button className="send-button">
        <span>Send</span>
        <PiTelegramLogo size={24} />
      </button>
    </div>
  );
};

export default MoneyTransfer;
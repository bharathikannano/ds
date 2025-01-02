import React from 'react';
import './RecentTransaction.scss'; // Import the CSS file for styling
import { color } from 'chart.js/helpers';
import { RiExchangeDollarFill } from "react-icons/ri";
import { CiCreditCard1 } from "react-icons/ci";
import { SlPaypal } from "react-icons/sl";


const transactions = [
  {
    icon: RiExchangeDollarFill,
    description: 'Deposit from my Card',
    date: '28 January 2021',
    amount: -850,
    color: '#FFF5D9',
    iconColor: '#FFBB38',
  },
  {
    icon: SlPaypal,
    description: 'Deposit Paypal',
    date: '25 January 2021',
    amount: 2500,
    color: '#E7EDFF',
    iconColor: '#396AFF',
  },
  {
    icon: CiCreditCard1,
    description: 'Jemi Wilson',
    date: '21 January 2021',
    amount: 5400,
    color: '#DCFAF8',
    iconColor: '#16DBCC',
  },
];

function RecentTransaction() {
  return (
    <div className="recent-transaction-container">
      <h2>Recent Transaction</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index} className="transaction-item">
            <div className="icon-container" style={{ backgroundColor: transaction.color }}>
            <transaction.icon style={{ fontSize: '24px', color: transaction.iconColor }}/>
            </div>
            <div className="transaction-details">
              <p>{transaction.description}</p>
              <span>{transaction.date}</span>
            </div>
            <div className={`amount ${transaction.amount > 0 ? 'positive' : 'negative'}`}>
              <span>{transaction.amount > 0 ? '+' : '-'}${Math.abs(transaction.amount)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentTransaction;
import React from "react";
import WeeklyActivityChart from "./WeeklyActivityChart";
import ExpensePieChart from "./ExpensePieChart";
import "./Dashboard.scss";
import Card from "./Card";
import RecentTransaction from './RecentTransaction';
import QuickTransfer from "./QuickTransfer";
import BalanceHistoryChart from "./BalanceHistoryChart";

const Dashboard = () => {
  return (
    <div className="dashboard">

      <div className="cards-container">
      <Card theam="dark"/>
      <Card theam="light"/>
      <RecentTransaction />
      </div>

      <div className="stats-section">
        <div className="weekly-activity">
          <WeeklyActivityChart />
        </div>
        <div className="expense-statistics">
          <h3>Expense Statistics</h3>
          <ExpensePieChart />
        </div>
      </div>
      <div className="Quick-balance-section">
        <div className="transfer-section">
          <h3>Quick Transfer</h3>
          <QuickTransfer />
        </div>

        <div className="balance-history">
          <h3>Balance History</h3>
          <BalanceHistoryChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
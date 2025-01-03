import React from "react";
import WeeklyActivityChart from "../WeeklyActivityChart/WeeklyActivityChart";
import ExpensePieChart from "../ExpensePieChart/ExpensePieChart";
import "./Dashboard.scss";
import Card from "../Card/Card";
import RecentTransaction from '../RecentTransaction/RecentTransaction';
import QuickTransfer from "../QuickTransfer/QuickTransfer";
import BalanceHistoryChart from "../BalanceHistoryChart/BalanceHistoryChart";

const Dashboard = () => {
  return (
    <div className="dashboard">

      <div className="cards-container">
        <div className="cards-header">
          <Card theam="dark"/>
          <Card theam="light"/>
        </div>
      <RecentTransaction />
      </div>

      <div className="stats-section">
        <div className="weekly-activity">
        <h3 className="pad-margin-zero">Weekly Activity</h3>
          <WeeklyActivityChart />
        </div>
        <div className="expense-statistics">
          <h3 className="pad-margin-zero">Expense Statistics</h3>
          <ExpensePieChart />
        </div>
      </div>
      <div className="Quick-balance-section">
        <div className="transfer-section">
          <h3 className="pad-margin-zero">Quick Transfer</h3>
          <QuickTransfer />
        </div>

        <div className="balance-history">
          <h3 className="pad-margin-zero">Balance History</h3>
          <BalanceHistoryChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
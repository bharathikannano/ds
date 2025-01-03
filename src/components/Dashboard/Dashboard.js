import React from "react";
import "./Dashboard.scss";
import WeeklyActivityChart from "../WeeklyActivityChart/WeeklyActivityChart";
import ExpensePieChart from "../ExpensePieChart/ExpensePieChart";
import QuickTransfer from "../QuickTransfer/QuickTransfer";
import BalanceHistoryChart from "../BalanceHistoryChart/BalanceHistoryChart";
import RecentTransaction from "../RecentTransaction/RecentTransaction";
import Card from "../Card/Card";

const Dashboard = () => {
    return (
      <div className="dashboard-container">
        <div className="section">
          <h2 className="section-heading">My Cards</h2>
          <div className="card-all">
            <Card theam={'dark'}/>
          </div>
        </div>

        <div className="section">
          <h2 className="text-right">See All</h2>
          <div className="card-all">
            <Card theam={'light'}/>
          </div>
        </div>
  
        <div className="section">
          <h2 className="section-heading">Recent Transactions</h2>
          <div className="card">
            <RecentTransaction />
          </div>
        </div>
  
        <div className="section weekly-activity">
          <h2 className="section-heading">Weekly Activity</h2>
          <div className="card weekly-activity-chart">
          <WeeklyActivityChart />
          </div>
        </div>
  
        <div className="section">
          <h2 className="section-heading">Expense Statistics</h2>
          <div className="card expense-pie-chart">
            <ExpensePieChart />
          </div>
        </div>
  
        <div className="section quick-transfer-section">
          <h2 className="section-heading">Quick Transfer</h2>
            <QuickTransfer />
        </div>
  
        {/* Balance History Section */}
        <div className="section balance-history">
          <h2 className="section-heading">Balance History</h2>
          <div className="card">
            <BalanceHistoryChart />
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
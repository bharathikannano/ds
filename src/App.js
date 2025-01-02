import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import SettingComponent from "./components/Setting/Setting";
import NotFound from "./components/NotFound";
import "./App.scss";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Router>
      <div className="app">
        <Sidebar activeIndex={activeIndex} handleItemClick={handleItemClick} />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<SettingComponent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
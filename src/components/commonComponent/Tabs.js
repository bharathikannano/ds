import React, { useState } from "react";
import "./Tabs.scss";
import ProfileForm from "../Setting/ProfileForm";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Edit Profile", content: <ProfileForm /> },
    { id: "tab2", label: "Preferences", content: <h3>Preferences Content</h3> },
    { id: "tab3", label: "Security", content: <h3>Security Content</h3> },
  ];

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab) =>
          activeTab === tab.id ? (
            <div key={tab.id} className="content">
              {tab.content}
            </div>
          ) : null
        )}
      </div>
      <div className="active-tab-content">
        {activeTabContent}
      </div>
    </div>
  );
};

export default Tabs;

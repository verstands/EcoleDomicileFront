// components/Tabs.js
import React from "react";

interface Tab {
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <>
      <div className="flex gap-2 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md ${activeTab === tab.label ? "bg-gray-200" : "bg-white"}`}
            onClick={() => onTabChange(tab.label)}
          >
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab, index) => (
        <div key={index} className={activeTab === tab.label ? "block" : "hidden"}>
          {tab.content}
        </div>
      ))}
    </>
  );
};

export default Tabs;
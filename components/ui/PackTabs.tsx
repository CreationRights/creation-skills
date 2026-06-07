"use client";

import { useState } from "react";

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export default function PackTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.id || "");

  return (
    <div className="spd-tabs">
      <div className="spd-tabs__nav">
        <div className="spd-tabs__nav-inner">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`spd-tabs__btn${active === tab.id ? " spd-tabs__btn--active" : ""}`}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="spd-tabs__content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`spd-tabs__panel${active === tab.id ? " spd-tabs__panel--active" : ""}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

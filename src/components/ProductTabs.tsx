"use client";

import { useState } from "react";

type Tab = {
  id: string;
  label: string;
  title: string;
  bullets: string[];
};

const tabs: Tab[] = [
  {
    id: "referrals",
    label: "Referrals",
    title: "Closed-loop referrals",
    bullets: [
      "Send referrals to your trusted provider partners with the information they need to accept and action the request.",
      "Track whether referrals are received, accepted, scheduled, completed and documented.",
      "Reduce manual follow-up by giving care teams a shared view of referral status.",
    ],
  },
  {
    id: "schedules",
    label: "Schedules",
    title: "See what is happening across your providers",
    bullets: [
      "Stay aligned on scheduled, changed and completed visits.",
      "Reduce email overload between Approved Providers and Associated Providers.",
      "Reduce last-minute schedule reconciliations.",
    ],
  },
  {
    id: "documentation",
    label: "Documentation",
    title: "Clinical notes kept in sync",
    bullets: [
      "Match completed services to the right authorisations.",
      "Move clinical documentation to the right system automatically.",
      "Reduce billing leakage from services that were completed but not captured.",
    ],
  },
];

function TabPreview({ label }: { label: string }) {
  return (
    <div
      aria-hidden="true"
      className="flex aspect-[4/3] w-full items-center justify-center rounded-xl border border-[#e0dcd3] bg-[#ebe6dc] shadow-[0_12px_32px_-16px_rgba(0,0,0,0.2)]"
    >
      <div className="text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1a7a52]/15">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6 text-[#1a7a52]"
            aria-hidden="true"
          >
            <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M3 9h18M8 4V6M16 4V6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="font-sans text-sm font-medium text-[#8a8578]">{label}</p>
      </div>
    </div>
  );
}

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const currentTab = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <div className="mt-14">
      <div
        role="tablist"
        aria-label="Product capabilities"
        className="flex flex-wrap gap-x-8 gap-y-2 border-b border-[#ddd8cc]"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`relative -mb-px pb-4 font-sans text-sm font-medium transition-colors md:text-base ${
                isActive ? "text-[#2a2a2a]" : "text-[#8a8578] hover:text-[#5c5c5c]"
              }`}
            >
              {tab.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#1a7a52]" />
              )}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${currentTab.id}`}
        aria-labelledby={`tab-${currentTab.id}`}
        className="pt-12"
      >
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="text-left">
            <h3 className="font-sans text-2xl font-semibold tracking-tight text-[#2a2a2a] md:text-3xl">
              {currentTab.title}
            </h3>
            <ul className="mt-6 list-disc space-y-3 pl-5 font-sans text-base font-light leading-relaxed text-[#5c5c5c] md:text-lg">
              {currentTab.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>

          <TabPreview label={`${currentTab.label} preview`} />
        </div>
      </div>
    </div>
  );
}

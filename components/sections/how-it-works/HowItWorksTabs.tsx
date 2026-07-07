"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { HOW_IT_WORKS_CONTENT } from "@/constants/content";
import CustomerFlowVisual from "./CustomerFlowVisual";
import RecipientFlowVisual from "./RecipientFlowVisual";


type TabId = typeof HOW_IT_WORKS_CONTENT.tabs[number]["id"];

const VISUALS = {
  customers: <CustomerFlowVisual />,
  recipients: <RecipientFlowVisual />,
} satisfies Record<TabId, React.ReactNode>;




export default function HowItWorksTabs() {
  const [activeTab, setActiveTab] = useState<TabId>(HOW_IT_WORKS_CONTENT.tabs[0].id);

  const currentTab = HOW_IT_WORKS_CONTENT.tabs.find((t) => t.id === activeTab)!;

  return (
    <div>
      {/* Tab nav */}
      <div className="flex justify-center mb-12">
        <div className="flex gap-2 bg-[var(--bg-subtle)] border border-[var(--border)] rounded-[14px] p-[6px]">
          {HOW_IT_WORKS_CONTENT.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={cn(
                "px-6 py-[10px] rounded-[10px] text-[14px] font-semibold transition-all duration-250",
                activeTab === tab.id
                  ? "bg-[var(--brand-blue)] text-white shadow-[0_2px_10px_rgba(0,108,223,0.3)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--border)]"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div
        role="tabpanel"
        className="grid lg:grid-cols-2 gap-12 items-start"
      >
        {/* Steps list */}
        <ol className="flex flex-col gap-1 list-none" aria-label="Delivery steps">
          {currentTab.steps.map((step, i) => (
            <React.Fragment key={step.title}>
              <li className="flex gap-5 p-5 rounded-[14px] transition-all duration-200 hover:bg-[var(--bg-subtle)] hover:translate-x-1 group cursor-default">
                <div className="shrink-0">
                  <div className="w-9 h-9 rounded-full bg-[var(--brand-blue)] text-white flex items-center justify-center font-display text-[14px] font-bold">
                    {i + 1}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[16px] text-[var(--text-primary)] mb-[6px]">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-[var(--text-muted)] leading-[1.6]">
                    {step.desc}
                  </p>
                </div>
              </li>
              {/* Connector line between steps */}
              {i < currentTab.steps.length - 1 && (
                <div className="w-px h-6 bg-[var(--border)] ml-[38px]" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </ol>

        {/* Visual */}
        <div className="hidden lg:flex items-center justify-center bg-[var(--bg-subtle)] border border-[var(--border)] rounded-[20px] overflow-hidden aspect-square">
          {VISUALS[activeTab]}
        </div>
      </div>
    </div>
  );
}
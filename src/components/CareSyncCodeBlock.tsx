"use client";

import { useEffect, useState } from "react";

const lines = [
  "{",
  '  "referral_id": "ref_8f2a91",',
  '  "status": "completed",',
  '  "approved_provider": "Northside Care",',
  '  "associated_provider": "Community Physio",',
  '  "visit_scheduled": "2026-06-09T09:00:00",',
  '  "visit_documented": "2026-06-09T10:15:00",',
  '  "approval_matched": true,',
  '  "billing_ready": true',
  "}",
];

const highlightLines = [2, 3, 6, 7, 8, 9];

export default function CareSyncCodeBlock() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lineInterval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % highlightLines.length);
    }, 2200);

    const cursorInterval = window.setInterval(() => {
      setCursorVisible((visible) => !visible);
    }, 530);

    return () => {
      window.clearInterval(lineInterval);
      window.clearInterval(cursorInterval);
    };
  }, []);

  const highlightedLine = highlightLines[activeIndex];

  return (
    <div className="relative w-full">
      <div className="code-block-panel overflow-hidden rounded-xl border border-[#e0e0e0] bg-[#1e1e1e] shadow-[0_16px_48px_-16px_rgba(0,0,0,0.45)]">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-xs text-[#888]">care-sync.json</span>
        </div>

        <div className="overflow-x-auto p-5 font-mono text-xs leading-relaxed md:text-sm">
          {lines.map((line, index) => {
            const isHighlighted = index === highlightedLine;

            return (
              <div
                key={line}
                className={`code-line -mx-2 flex items-start gap-4 rounded-md px-2 py-0.5 transition-colors duration-500 ${
                  isHighlighted ? "bg-[#1e9b6e]/25" : ""
                }`}
              >
                <code
                  className={`min-w-0 flex-1 whitespace-pre transition-colors duration-500 ${
                    isHighlighted ? "text-[#f0fdf4]" : "text-[#d4d4d4]"
                  }`}
                >
                  {line}
                  {isHighlighted && (
                    <span
                      aria-hidden="true"
                      className={`ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[2px] bg-[#6ee7a8] ${
                        cursorVisible ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  )}
                </code>
                <span
                  className={`shrink-0 select-none text-right transition-colors duration-500 ${
                    isHighlighted ? "text-[#6ee7a8]" : "text-[#555]"
                  }`}
                >
                  {index + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

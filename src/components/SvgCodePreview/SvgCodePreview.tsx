"use client";

import { DemoButton } from "@/components/DemoButton/DemoButton";
import SyntaxHighlighter from "@/components/SyntaxHighlighter/SyntaxHighlighter";
import clsx from "clsx";
import { useState } from "react";

interface SvgCodePreviewProps {
  code: string;
  collapsible?: boolean;
  className?: string;
}

export const SvgCodePreview: React.FC<SvgCodePreviewProps> = ({
  className = "",
  code,
  collapsible = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(!collapsible);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className="flex w-full flex-col items-center gap-y-2">
      <div
        className={clsx(
          `relative isolate mt-4 w-full rounded bg-gray-900`,
          className,
        )}
      >
        <div
          className={clsx(
            "overflow-hidden",
            isExpanded ? "" : "h-32 mask-b-from-50% mask-b-to-90%",
          )}
        >
          <SyntaxHighlighter>
            <code className="language-svg">{code}</code>
          </SyntaxHighlighter>
        </div>
      </div>

      {collapsible && (
        <DemoButton
          className="px-1 text-xs"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Hide" : "Show"} Code
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={clsx("transition-transform", isExpanded && "rotate-180")}
          >
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </DemoButton>
      )}
    </div>
  );
};

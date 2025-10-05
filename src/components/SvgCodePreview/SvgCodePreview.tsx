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

  return (
    <div className="flex w-full flex-col items-center gap-y-2">
      <div
        className={clsx(
          `relative isolate mt-4 w-full bg-neutral-950`,
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
            <code className="language-svg">
              {code +
                // TODO: Fix this newline hack
                `
`}
            </code>
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
            className={clsx("transition-transform", isExpanded && "rotate-180")}
            fill="none"
            height="14"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="14"
          >
            <polyline points="6,9 12,15 18,9" />
          </svg>
        </DemoButton>
      )}
    </div>
  );
};

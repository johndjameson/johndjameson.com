"use client";

import { useState, useId } from "react";
import { DemoButton } from "../DemoButton/DemoButton";
import { SvgCodePreview } from "../SvgCodePreview/SvgCodePreview";

export const LuminanceToAlphaDemo: React.FC = () => {
  const [filterEnabled, setFilterEnabled] = useState(true);
  const filterId = useId().replace(/\W/g, "");

  return (
    <div className="rounded-lg bg-gray-950 p-6">
      <svg
        className="sr-only"
        aria-hidden="true"
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={filterId}>
            <feColorMatrix type="luminanceToAlpha" />
          </filter>
        </defs>
      </svg>

      <div
        className="mb-6 rounded-lg p-8"
        style={{
          background:
            "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)",
        }}
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div
            className="flex aspect-square items-center justify-center rounded-lg bg-black text-sm font-bold text-white"
            style={{
              filter: filterEnabled ? `url(#${filterId})` : "none",
            }}
          >
            Black
          </div>
          <div
            className="flex aspect-square items-center justify-center rounded-lg bg-gray-600 text-sm font-bold text-white"
            style={{
              filter: filterEnabled ? `url(#${filterId})` : "none",
            }}
          >
            Gray
          </div>
          <div
            className="flex aspect-square items-center justify-center rounded-lg bg-white text-sm font-bold text-black"
            style={{
              filter: filterEnabled ? `url(#${filterId})` : "none",
            }}
          >
            White
          </div>
          <div
            className="flex aspect-square items-center justify-center rounded-lg bg-linear-to-br/oklch from-red-500 via-yellow-500 to-blue-500 text-sm font-bold text-white shadow-lg"
            style={{
              filter: filterEnabled ? `url(#${filterId})` : "none",
            }}
          >
            Color
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <DemoButton
          onClick={() => setFilterEnabled(!filterEnabled)}
          variant="default"
        >
          {filterEnabled ? "Disable Filter" : "Enable Filter"}
        </DemoButton>
      </div>

      <SvgCodePreview
        code={`<feColorMatrix
  type="luminanceToAlpha"
/>`}
      />
    </div>
  );
};

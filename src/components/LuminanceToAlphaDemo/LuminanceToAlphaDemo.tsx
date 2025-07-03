"use client";

import { useState, useId } from "react";
import { DemoButton } from "../DemoButton/DemoButton";
import { SvgCodePreview } from "../SvgCodePreview/SvgCodePreview";
import { clsx } from "clsx";

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

      <div className="bg-checkered mb-6 rounded-lg bg-gray-300 p-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div
            className="flex aspect-square items-center justify-center rounded-lg bg-white text-sm font-bold text-black"
            style={{
              filter: filterEnabled ? `url(#${filterId})` : "none",
            }}
          >
            White
          </div>
          <div
            className={clsx(
              "flex aspect-square items-center justify-center rounded-lg will-change-[filter]",
              "bg-linear-to-br from-white to-black",
              "text-sm font-bold text-white",
            )}
            style={{
              filter: filterEnabled ? `url(#${filterId})` : "none",
            }}
          >
            White/Black
          </div>
          <div
            className="flex aspect-square items-center justify-center rounded-lg bg-linear-to-br/oklch from-pink-500 to-blue-500 text-sm font-bold text-white shadow-lg"
            style={{
              filter: filterEnabled ? `url(#${filterId})` : "none",
            }}
          >
            Color
          </div>
          <img
            alt=""
            className="aspect-square rounded-lg bg-gray-300 will-change-[filter]"
            height="150"
            src="https://fastly.picsum.photos/id/574/300/300.jpg?hmac=D8e1xkNmWFV7sZNtVa8nLzgusD4LendI-0RSMXM86wk"
            style={{
              filter: filterEnabled ? `url(#${filterId})` : "none",
            }}
            width="150"
          />
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

      <SvgCodePreview code={`<feColorMatrix type="luminanceToAlpha" />`} />
    </div>
  );
};

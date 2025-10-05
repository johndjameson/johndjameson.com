"use client";

import { useState, useId } from "react";
import { DemoButton } from "../DemoButton/DemoButton";
import { SvgCodePreview } from "../SvgCodePreview/SvgCodePreview";
import { clsx } from "clsx";

export const LuminanceToAlphaDemo: React.FC = () => {
  const [filterEnabled, setFilterEnabled] = useState(true);
  const filterId = useId().replace(/\W/g, "");

  return (
    <div className="bg-neutral-950 p-6">
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

      <div className="bg-checkered mb-6 bg-neutral-300 p-4 [content-visibility:auto]">
        <div
          className="grid grid-cols-2 gap-4 will-change-[filter] md:grid-cols-4"
          style={{
            filter: filterEnabled ? `url(#${filterId})` : "none",
          }}
        >
          <div className="flex aspect-square items-center justify-center bg-white text-sm font-bold text-neutral-950">
            White
          </div>
          <div
            className={clsx(
              "flex aspect-square items-center justify-center",
              "bg-linear-to-br from-white to-black",
              "text-sm font-bold text-neutral-50",
            )}
          >
            White/Black
          </div>
          <div className="flex aspect-square items-center justify-center bg-linear-to-br/oklch from-pink-500 to-blue-500 text-sm font-bold text-neutral-50 shadow-lg">
            Color
          </div>
          <img
            alt=""
            className="aspect-square bg-neutral-300"
            height="150"
            src="https://fastly.picsum.photos/id/574/300/300.jpg?hmac=D8e1xkNmWFV7sZNtVa8nLzgusD4LendI-0RSMXM86wk"
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

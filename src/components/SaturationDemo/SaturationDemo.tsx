"use client";

import { useState, useId } from "react";
import { Range } from "../Range/Range";
import { DemoButton } from "../DemoButton/DemoButton";
import { SvgCodePreview } from "../SvgCodePreview/SvgCodePreview";

export const SaturationDemo: React.FC = () => {
  const [saturation, setSaturation] = useState(1);
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
            <feColorMatrix type="saturate" values={saturation.toString()} />
          </filter>
        </defs>
      </svg>

      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div
          className="aspect-square rounded-lg bg-red-500"
          style={{
            filter: filterEnabled ? `url(#${filterId})` : "none",
          }}
        />
        <div
          className="aspect-square rounded-lg bg-green-500"
          style={{
            filter: filterEnabled ? `url(#${filterId})` : "none",
          }}
        />
        <div
          className="aspect-square rounded-lg bg-blue-500"
          style={{
            filter: filterEnabled ? `url(#${filterId})` : "none",
          }}
        />
        <div
          className="aspect-square rounded-lg bg-linear-to-br/oklch from-yellow-500 to-orange-500"
          style={{
            filter: filterEnabled ? `url(#${filterId})` : "none",
          }}
        />
      </div>

      <div className="mb-4">
        <Range
          id="saturation"
          label={`Saturation: ${saturation.toFixed(1)}`}
          min={0}
          max={2}
          step={0.1}
          value={saturation}
          onChange={(e) => setSaturation(parseFloat(e.target.value))}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <DemoButton onClick={() => setSaturation(1)} variant="reset">
          Reset
        </DemoButton>
        <DemoButton
          onClick={() => setFilterEnabled(!filterEnabled)}
          variant="default"
        >
          {filterEnabled ? "Disable Filter" : "Enable Filter"}
        </DemoButton>
      </div>

      <SvgCodePreview
        code={`<feColorMatrix
  type="saturate"
  values="${saturation}"
/>`}
      />
    </div>
  );
};

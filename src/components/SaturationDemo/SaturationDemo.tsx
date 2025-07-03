"use client";

import { useState, useId } from "react";
import { Range } from "../Range/Range";
import { SvgCodePreview } from "../SvgCodePreview/SvgCodePreview";

export const SaturationDemo: React.FC = () => {
  const [saturation, setSaturation] = useState(1);
  const filterId = useId().replace(/\W/g, "");
  const filterUrl = `url(#${filterId})`;

  return (
    <div className="rounded-lg bg-gray-950 p-6">
      <svg className="sr-only" aria-hidden="true" width="0" height="0">
        <defs>
          <filter id={filterId}>
            <feColorMatrix type="saturate" values={saturation.toString()} />
          </filter>
        </defs>
      </svg>

      <div
        className="mb-6 grid h-32 grid-cols-2 gap-4 rounded-lg bg-linear-to-r/longer from-red-500 to-red-500 md:grid-cols-4"
        style={{ filter: filterUrl }}
      />

      <div className="mb-4">
        <Range
          id="saturation"
          label={`Saturation: ${saturation.toFixed(1)}`}
          min={0}
          max={2}
          step={0.1}
          value={saturation}
          onChange={(e) => setSaturation(e.target.valueAsNumber)}
        />
      </div>

      <SvgCodePreview
        code={`<feColorMatrix type="saturate" values="${saturation}" />`}
      />
    </div>
  );
};

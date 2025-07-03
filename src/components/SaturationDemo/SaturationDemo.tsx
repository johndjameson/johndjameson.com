"use client";

import { useState, useId } from "react";
import { Range } from "../Range/Range";
import { SvgCodePreview } from "../SvgCodePreview/SvgCodePreview";

export const SaturationDemo: React.FC = () => {
  const [saturation, setSaturation] = useState(1);
  const filterId = useId().replace(/\W/g, "");

  return (
    <div className="rounded-lg bg-gray-950 p-6">
      <svg className="sr-only" aria-hidden="true" width="0" height="0">
        <defs>
          <filter id={filterId}>
            <feColorMatrix type="saturate" values={saturation.toString()} />
          </filter>
        </defs>
      </svg>

      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div
          className="aspect-square rounded-lg bg-red-500"
          style={{ filter: `url(#${filterId})` }}
        />
        <div
          className="aspect-square rounded-lg bg-green-500"
          style={{ filter: `url(#${filterId})` }}
        />
        <div
          className="aspect-square rounded-lg bg-blue-500"
          style={{ filter: `url(#${filterId})` }}
        />
        <div
          className="aspect-square rounded-lg bg-linear-to-br/oklch from-yellow-500 to-orange-500"
          style={{ filter: `url(#${filterId})` }}
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

      <SvgCodePreview
        code={`<feColorMatrix type="saturate" values="${saturation}" />`}
      />
    </div>
  );
};

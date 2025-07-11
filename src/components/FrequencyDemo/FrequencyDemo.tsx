"use client";

import { useState, useId } from "react";
import { Range } from "../Range/Range";
import { SvgCodePreview } from "../SvgCodePreview/SvgCodePreview";
import { TurbulenceFilter } from "../TurbulenceFilter/TurbulenceFilter";

export const FrequencyDemo: React.FC = () => {
  const [baseFrequency, setBaseFrequency] = useState(0.1);
  const filterId = useId().replace(/\W/g, "");
  const filterUrl = `url(#${filterId})`;

  const frequencies = [0.01, 0.05, 0.1, 0.2, 0.4];

  return (
    <div className="rounded-xl bg-gray-950 p-6">
      <TurbulenceFilter
        id={filterId}
        baseFrequency={baseFrequency}
        numOctaves={2}
        seed={3}
      />

      <div className="mb-6">
        <div className="mb-4">
          <h3 className="mb-3 text-lg font-medium text-gray-200">
            Frequency Comparison
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {frequencies.map((freq) => (
              <div key={freq} className="text-center">
                <div
                  className="aspect-square rounded-lg bg-white will-change-[filter] [content-visibility:auto]"
                  style={{
                    filter: `url(#frequency-${freq.toString().replace('.', '')})`,
                  }}
                />
                <p className="mt-2 text-sm text-gray-400">{freq}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="mb-3 text-lg font-medium text-gray-200">
            Interactive Frequency
          </h3>
          <div
            className="aspect-[2/1] rounded-lg bg-white will-change-[filter] [content-visibility:auto]"
            style={{ filter: filterUrl }}
          />
        </div>
      </div>

      <div className="mb-4">
        <Range
          id="baseFrequency"
          label={`Base Frequency: ${baseFrequency.toFixed(3)}`}
          min={0.01}
          max={0.5}
          step={0.01}
          value={baseFrequency}
          onChange={(e) => setBaseFrequency(e.target.valueAsNumber)}
        />
      </div>

      <SvgCodePreview
        code={`<feTurbulence baseFrequency="${baseFrequency}" />`}
      />

      {/* Hidden filters for comparison grid */}
      {frequencies.map((freq) => (
        <TurbulenceFilter
          key={freq}
          id={`frequency-${freq.toString().replace('.', '')}`}
          baseFrequency={freq}
          numOctaves={2}
          seed={3}
        />
      ))}
    </div>
  );
};
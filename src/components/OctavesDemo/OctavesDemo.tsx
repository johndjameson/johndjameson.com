"use client";

import { useState, useId } from "react";
import { Range } from "../Range/Range";
import { SvgCodePreview } from "../SvgCodePreview/SvgCodePreview";
import { TurbulenceFilter } from "../TurbulenceFilter/TurbulenceFilter";

export const OctavesDemo: React.FC = () => {
  const [numOctaves, setNumOctaves] = useState(3);
  const filterId = useId().replace(/\W/g, "");
  const filterUrl = `url(#${filterId})`;

  const octaveValues = [1, 2, 3, 4, 5];

  return (
    <div className="rounded-xl bg-gray-950 p-6">
      <TurbulenceFilter
        id={filterId}
        baseFrequency={0.08}
        numOctaves={numOctaves}
        seed={4}
      />

      <div className="mb-6">
        <div className="mb-4">
          <h3 className="mb-3 text-lg font-medium text-gray-200">
            Octaves Comparison
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {octaveValues.map((octaves) => (
              <div key={octaves} className="text-center">
                <div
                  className="aspect-square rounded-lg bg-white will-change-[filter] [content-visibility:auto]"
                  style={{
                    filter: `url(#octaves-${octaves})`,
                  }}
                />
                <p className="mt-2 text-sm text-gray-400">{octaves} octave{octaves > 1 ? 's' : ''}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="mb-3 text-lg font-medium text-gray-200">
            Interactive Octaves
          </h3>
          <div
            className="aspect-[2/1] rounded-lg bg-white will-change-[filter] [content-visibility:auto]"
            style={{ filter: filterUrl }}
          />
        </div>
      </div>

      <div className="mb-4">
        <Range
          id="numOctaves"
          label={`Number of Octaves: ${numOctaves}`}
          min={1}
          max={6}
          step={1}
          value={numOctaves}
          onChange={(e) => setNumOctaves(e.target.valueAsNumber)}
        />
      </div>

      <SvgCodePreview
        code={`<feTurbulence 
  baseFrequency="0.08"
  numOctaves="${numOctaves}" 
/>`}
      />

      {/* Hidden filters for comparison grid */}
      {octaveValues.map((octaves) => (
        <TurbulenceFilter
          key={octaves}
          id={`octaves-${octaves}`}
          baseFrequency={0.08}
          numOctaves={octaves}
          seed={4}
        />
      ))}
    </div>
  );
};
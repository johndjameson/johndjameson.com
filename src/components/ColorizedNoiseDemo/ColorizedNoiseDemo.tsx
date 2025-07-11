"use client";

import { useState, useId } from "react";
import { DemoButton } from "../DemoButton/DemoButton";
import { SvgCodePreview } from "../SvgCodePreview/SvgCodePreview";
import { TurbulenceFilter } from "../TurbulenceFilter/TurbulenceFilter";

const colorPresets = [
  {
    name: "Grayscale",
    matrix: "1 0 0 0 0  1 0 0 0 0  1 0 0 0 0  0 0 0 1 0",
    description: "Original noise",
  },
  {
    name: "Blue Marble",
    matrix: "0 0 0 0 0.2  0 0 0 0 0.4  0 0 0 0 0.8  0 0 0 1 0",
    description: "Deep ocean blues",
  },
  {
    name: "Fire",
    matrix: "0 0 0 0 0.8  0 0 0 0 0.3  0 0 0 0 0.1  0 0 0 1 0",
    description: "Fiery reds and oranges",
  },
  {
    name: "Forest",
    matrix: "0 0 0 0 0.1  0 0 0 0 0.6  0 0 0 0 0.2  0 0 0 1 0",
    description: "Natural greens",
  },
  {
    name: "Purple Haze",
    matrix: "0 0 0 0 0.5  0 0 0 0 0.2  0 0 0 0 0.7  0 0 0 1 0",
    description: "Mystical purples",
  },
];

export const ColorizedNoiseDemo: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState(colorPresets[1]);
  const filterId = useId().replace(/\W/g, "");
  const filterUrl = `url(#${filterId})`;

  return (
    <div className="rounded-xl bg-gray-950 p-6">
      <TurbulenceFilter
        id={filterId}
        baseFrequency={0.08}
        numOctaves={4}
        seed={7}
      >
        <feColorMatrix
          in="turbulence"
          type="matrix"
          values={selectedPreset.matrix}
        />
      </TurbulenceFilter>

      <div className="mb-6">
        <div className="mb-4">
          <h3 className="mb-3 text-lg font-medium text-gray-200">
            Color Variations
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {colorPresets.map((preset, index) => (
              <div key={preset.name} className="text-center">
                <div
                  className="aspect-square rounded-lg bg-white will-change-[filter] [content-visibility:auto] cursor-pointer border-2 border-transparent hover:border-gray-400 transition-colors"
                  style={{
                    filter: `url(#color-preset-${index})`,
                  }}
                  onClick={() => setSelectedPreset(preset)}
                />
                <p className="mt-2 text-xs font-medium text-gray-300">{preset.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="mb-3 text-lg font-medium text-gray-200">
            Selected: {selectedPreset.name}
          </h3>
          <p className="mb-3 text-sm text-gray-400">{selectedPreset.description}</p>
          <div
            className="aspect-[2/1] rounded-lg bg-white will-change-[filter] [content-visibility:auto]"
            style={{ filter: filterUrl }}
          />
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {colorPresets.map((preset) => (
          <DemoButton
            key={preset.name}
            onClick={() => setSelectedPreset(preset)}
            variant={selectedPreset.name === preset.name ? "reset" : "default"}
          >
            {preset.name}
          </DemoButton>
        ))}
      </div>

      <SvgCodePreview
        code={`<feTurbulence
  baseFrequency="0.08"
  numOctaves="4"
  type="fractalNoise"
  seed="7"
  result="turbulence"
/>
<feColorMatrix
  in="turbulence"
  type="matrix"
  values="${selectedPreset.matrix}"
/>`}
      />

      {/* Hidden filters for color variations */}
      {colorPresets.map((preset, index) => (
        <TurbulenceFilter
          key={preset.name}
          id={`color-preset-${index}`}
          baseFrequency={0.08}
          numOctaves={4}
          seed={7}
        >
          <feColorMatrix
            in="turbulence"
            type="matrix"
            values={preset.matrix}
          />
        </TurbulenceFilter>
      ))}
    </div>
  );
};
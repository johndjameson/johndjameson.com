"use client";

import { useState, useId } from "react";
import { Range } from "../Range/Range";
import { DemoButton } from "../DemoButton/DemoButton";
import { SvgCodePreview } from "../SvgCodePreview/SvgCodePreview";
import { TurbulenceFilter } from "../TurbulenceFilter/TurbulenceFilter";

const displacementPresets = [
  {
    name: "None",
    scale: 0,
    baseFrequency: 0.02,
    description: "Original image",
  },
  {
    name: "Water Ripple",
    scale: 15,
    baseFrequency: 0.02,
    description: "Gentle water-like distortion",
  },
  {
    name: "Heat Haze",
    scale: 8,
    baseFrequency: 0.15,
    description: "Fine distortion like heat waves",
  },
  {
    name: "Strong Warp",
    scale: 40,
    baseFrequency: 0.05,
    description: "Heavy distortion effect",
  },
];

export const DisplacementDemo: React.FC = () => {
  const [scale, setScale] = useState(15);
  const [baseFrequency, setBaseFrequency] = useState(0.02);
  const filterId = useId().replace(/\W/g, "");
  const filterUrl = `url(#${filterId})`;

  const handlePresetClick = (preset: (typeof displacementPresets)[0]) => {
    setScale(preset.scale);
    setBaseFrequency(preset.baseFrequency);
  };

  return (
    <div className="rounded-xl bg-gray-950 p-6">
      <TurbulenceFilter
        id={filterId}
        baseFrequency={baseFrequency}
        numOctaves={2}
        seed={1}
      >
        <feDisplacementMap
          in="SourceGraphic"
          in2="turbulence"
          scale={scale}
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </TurbulenceFilter>

      <div className="mb-6">
        <div className="mb-4">
          <h3 className="mb-3 text-lg font-medium text-gray-200">
            Displacement Effects
          </h3>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {displacementPresets.map((preset, index) => (
              <div key={preset.name} className="text-center">
                <div
                  className="relative aspect-square cursor-pointer overflow-hidden rounded-lg border-2 border-transparent bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 transition-colors will-change-[filter] [content-visibility:auto] hover:border-gray-400"
                  style={{
                    filter: `url(#displacement-preset-${index})`,
                  }}
                  onClick={() => handlePresetClick(preset)}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-white opacity-90" />
                  </div>
                </div>
                <p className="mt-2 text-xs font-medium text-gray-300">
                  {preset.name}
                </p>
                <p className="text-xs text-gray-500">{preset.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="mb-3 text-lg font-medium text-gray-200">
            Interactive Displacement
          </h3>
          <div
            className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 will-change-[filter] [content-visibility:auto]"
            style={{ filter: filterUrl }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-6 w-6 rounded-full bg-white opacity-90" />
                <div className="h-6 w-6 rounded-full bg-white opacity-90" />
                <div className="h-6 w-6 rounded-full bg-white opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        <Range
          id="scale"
          label={`Displacement Scale: ${scale}`}
          min={0}
          max={50}
          step={1}
          value={scale}
          onChange={(e) => setScale(e.target.valueAsNumber)}
        />
        <Range
          id="baseFrequency"
          label={`Base Frequency: ${baseFrequency.toFixed(3)}`}
          min={0.01}
          max={0.2}
          step={0.01}
          value={baseFrequency}
          onChange={(e) => setBaseFrequency(e.target.valueAsNumber)}
        />
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {displacementPresets.map((preset) => (
          <DemoButton
            key={preset.name}
            onClick={() => handlePresetClick(preset)}
            variant={preset.name === "None" ? "reset" : "default"}
          >
            {preset.name}
          </DemoButton>
        ))}
      </div>

      <SvgCodePreview
        code={`<feTurbulence
  baseFrequency="${baseFrequency}"
  numOctaves="2"
  type="fractalNoise"
  seed="1"
  result="noise"
/>
<feDisplacementMap
  in="SourceGraphic"
  in2="noise"
  scale="${scale}"
  xChannelSelector="R"
  yChannelSelector="G"
/>`}
      />

      {/* Hidden filters for displacement presets */}
      {displacementPresets.map((preset, index) => (
        <TurbulenceFilter
          key={preset.name}
          id={`displacement-preset-${index}`}
          baseFrequency={preset.baseFrequency}
          numOctaves={2}
          seed={1}
        >
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale={preset.scale}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </TurbulenceFilter>
      ))}
    </div>
  );
};

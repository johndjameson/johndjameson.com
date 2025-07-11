"use client";

import { useState, useId } from "react";
import { Range } from "../Range/Range";
import { DemoButton } from "../DemoButton/DemoButton";
import { SvgCodePreview } from "../SvgCodePreview/SvgCodePreview";
import { TurbulenceFilter } from "../TurbulenceFilter/TurbulenceFilter";

const presets = [
  {
    name: "Default",
    baseFrequency: 0.1,
    numOctaves: 3,
    type: "fractalNoise" as const,
    seed: 2,
  },
  {
    name: "Clouds",
    baseFrequency: 0.05,
    numOctaves: 4,
    type: "fractalNoise" as const,
    seed: 5,
  },
  {
    name: "Fine Texture",
    baseFrequency: 0.3,
    numOctaves: 2,
    type: "fractalNoise" as const,
    seed: 1,
  },
  {
    name: "Chaotic",
    baseFrequency: 0.15,
    numOctaves: 3,
    type: "turbulence" as const,
    seed: 8,
  },
];

export const TurbulenceDemo: React.FC = () => {
  const [baseFrequency, setBaseFrequency] = useState(0.1);
  const [numOctaves, setNumOctaves] = useState(3);
  const [type, setType] = useState<"fractalNoise" | "turbulence">(
    "fractalNoise",
  );
  const [seed, setSeed] = useState(2);
  const filterId = useId().replace(/\W/g, "");
  const filterUrl = `url(#${filterId})`;

  const handlePresetClick = (preset: (typeof presets)[0]) => {
    setBaseFrequency(preset.baseFrequency);
    setNumOctaves(preset.numOctaves);
    setType(preset.type);
    setSeed(preset.seed);
  };

  return (
    <div className="rounded-xl bg-gray-950 p-6">
      <TurbulenceFilter
        id={filterId}
        baseFrequency={baseFrequency}
        numOctaves={numOctaves}
        type={type}
        seed={seed}
      />

      <div
        className="mb-6 aspect-[2/1] rounded-lg bg-white will-change-[filter] [content-visibility:auto]"
        style={{ filter: filterUrl }}
      />

      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        <Range
          id="baseFrequency"
          label={`Base Frequency: ${baseFrequency.toFixed(3)}`}
          min={0.01}
          max={0.5}
          step={0.01}
          value={baseFrequency}
          onChange={(e) => setBaseFrequency(e.target.valueAsNumber)}
        />
        <Range
          id="numOctaves"
          label={`Octaves: ${numOctaves}`}
          min={1}
          max={6}
          step={1}
          value={numOctaves}
          onChange={(e) => setNumOctaves(e.target.valueAsNumber)}
        />
        <Range
          id="seed"
          label={`Seed: ${seed}`}
          min={1}
          max={20}
          step={1}
          value={seed}
          onChange={(e) => setSeed(e.target.valueAsNumber)}
        />
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-300">Type</label>
          <div className="flex gap-2">
            <DemoButton
              onClick={() => setType("fractalNoise")}
              variant={type === "fractalNoise" ? "reset" : "default"}
            >
              Fractal
            </DemoButton>
            <DemoButton
              onClick={() => setType("turbulence")}
              variant={type === "turbulence" ? "reset" : "default"}
            >
              Turbulence
            </DemoButton>
          </div>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {presets.map((preset) => (
          <DemoButton
            key={preset.name}
            onClick={() => handlePresetClick(preset)}
            variant={preset.name === "Default" ? "reset" : "default"}
          >
            {preset.name}
          </DemoButton>
        ))}
      </div>

      <SvgCodePreview
        code={`<feTurbulence
  baseFrequency="${baseFrequency}"
  numOctaves="${numOctaves}"
  type="${type}"
  seed="${seed}"
/>`}
      />
    </div>
  );
};

"use client";

import { useState, useId } from "react";
import { Range } from "../Range/Range";
import { DemoButton } from "@/components/DemoButton/DemoButton";
import { ChromaticAberrationFilter } from "@/components/ChromaticAberrationFilter/ChromaticAberrationFilter";

interface ChromaticAberrationDemoProps {
  text: string;
  initialRedOffset?: number;
  initialBlueOffset?: number;
  initialIntensity?: number;
}

export default function ChromaticAberrationDemo({
  initialBlueOffset = -2,
  initialIntensity = 1,
  initialRedOffset = 2,
  text,
}: ChromaticAberrationDemoProps) {
  const [redOffset, setRedOffset] = useState(initialRedOffset);
  const [blueOffset, setBlueOffset] = useState(initialBlueOffset);
  const [intensity, setIntensity] = useState(initialIntensity);
  const filterId = useId();

  const presets = [
    { name: "Faded", red: 1, blue: -1, intensity: 0.6 },
    { name: "Retro", red: 3, blue: -3, intensity: 1.2 },
    { name: "Heavy Glitch", red: 5, blue: -5, intensity: 1.4 },
    { name: "Reset", red: 0, blue: -0, intensity: 1 },
  ] as const;

  const applyPreset = (preset: (typeof presets)[number]) => {
    setRedOffset(preset.red);
    setBlueOffset(preset.blue);
    setIntensity(preset.intensity);
  };

  return (
    <div className="border p-6 rounded-lg bg-gray-950">
      <div className="mb-6 @container/demo">
        <ChromaticAberrationFilter
          id={`chromatic-aberration-${filterId}`}
          redX={redOffset}
          redY={0}
          blueX={blueOffset}
          blueY={0}
          intensity={intensity}
        />

        <p
          className="text-gray-50 text-center text-[12cqw] font-extrabold leading-[1.15]"
          style={{ filter: `url(#chromatic-aberration-${filterId})` }}
        >
          {text}
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Range
            id="red-offset"
            label={`Red Offset: ${redOffset}px`}
            min={-10}
            max={10}
            step={0.5}
            value={redOffset}
            onChange={(e) => setRedOffset(Number.parseFloat(e.target.value))}
          />

          <Range
            id="blue-offset"
            label={`Blue Offset: ${blueOffset}px`}
            min={-10}
            max={10}
            step={0.5}
            value={blueOffset}
            onChange={(e) => setBlueOffset(Number.parseFloat(e.target.value))}
          />

          <Range
            id="intensity"
            label={`Intensity: ${Math.round(intensity * 100)}%`}
            min={0}
            max={1.5}
            step={0.1}
            value={intensity}
            onChange={(e) => setIntensity(Number.parseFloat(e.target.value))}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {presets.map((preset) => (
            <DemoButton
              key={preset.name}
              onClick={() => applyPreset(preset)}
              type="button"
              variant={preset.name === "Reset" ? "reset" : "default"}
            >
              {preset.name}
            </DemoButton>
          ))}
        </div>
      </div>
    </div>
  );
}

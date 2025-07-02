"use client";

import { useState } from "react";
import { Range } from "../Range/Range";
import { DemoButton } from "@/components/DemoButton/DemoButton";
import { ChromaticAberrationFilter } from "@/components/ChromaticAberrationFilter/ChromaticAberrationFilter";

export default function ChromaticShapesDemo() {
  const [redOffset, setRedOffset] = useState(5);
  const [blueOffset, setBlueOffset] = useState(-5);
  const [redBlueBlur, setRedBlueBlur] = useState(2);

  const presets = [
    { name: "Faded", red: 1, blue: -1, redBlueBlur: 0.5 },
    { name: "Retro", red: 3, blue: -3, redBlueBlur: 1 },
    { name: "Lo-fi", red: 5, blue: -5, redBlueBlur: 2 },
    { name: "Harsh", red: 4, blue: -4, redBlueBlur: 0 },
    { name: "Reset", red: 0, blue: 0, redBlueBlur: 0 },
  ] as const;

  const applyPreset = (preset: (typeof presets)[number]) => {
    setRedOffset(preset.red);
    setBlueOffset(preset.blue);
    setRedBlueBlur(preset.redBlueBlur);
  };

  return (
    <div className="rounded-lg bg-gray-950 p-6">
      <div className="flex justify-center">
        <ChromaticAberrationFilter
          id="chromatic-shapes"
          redX={redOffset}
          blueBlur={redBlueBlur}
          redBlur={redBlueBlur}
          blueX={blueOffset}
        />
        <svg
          className="h-auto max-w-full will-change-[filter]"
          height="280"
          style={{ filter: "url(#chromatic-shapes)" }}
          viewBox="0 0 400 280"
          width="400"
        >
          <title>Shapes</title>
          <circle cx="80" cy="80" r="40" fill="orange" />
          <rect x="160" y="40" width="80" height="80" fill="yellow" />
          {/* Triangle */}
          <polygon points="320,40 280,120 360,120" fill="purple" />
          {/* Star */}
          <polygon
            points="80,200 85,185 100,185 88,175 93,160 80,170 67,160 72,175 60,185 75,185"
            fill="#ccc"
          />
          {/* Diamond */}
          <polygon points="200,160 240,200 200,240 160,200" fill="magenta" />
          {/* Hexagon */}
          <polygon
            points="320,180 340,160 360,180 360,220 340,240 320,240 300,220 300,180"
            fill="cyan"
          />
        </svg>
      </div>

      <div className="grid gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Range
            id="red-offset"
            label={`Red Offset: ${redOffset}px`}
            min={-10}
            max={10}
            step={0.5}
            value={redOffset}
            onChange={(e) => setRedOffset(e.target.valueAsNumber)}
          />

          <Range
            id="blue-offset"
            label={`Blue Offset: ${blueOffset}px`}
            min={-10}
            max={10}
            step={0.5}
            value={blueOffset}
            onChange={(e) => setBlueOffset(e.target.valueAsNumber)}
          />

          <Range
            id="redBlueBlur"
            label={`Red/Blue Blur: ${redBlueBlur}`}
            min={0}
            max={5}
            step={1}
            value={redBlueBlur}
            onChange={(e) => setRedBlueBlur(e.target.valueAsNumber)}
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

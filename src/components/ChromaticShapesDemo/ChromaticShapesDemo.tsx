"use client";

import { useState } from "react";
import { Range } from "../Range/Range";
import { XYPad } from "@/components/XYPad/XYPad";
import { DemoButton } from "@/components/DemoButton/DemoButton";
import { ChromaticAberrationFilter } from "@/components/ChromaticAberrationFilter/ChromaticAberrationFilter";

interface ChromaticShapesDemoProps {
  initialRedOffset?: number;
  initialBlueOffset?: number;
  initialAlpha?: number;
}

export default function ChromaticShapesDemo({
  initialRedOffset = 3,
  initialBlueOffset = -3,
  initialAlpha = 1,
}: ChromaticShapesDemoProps) {
  const [redOffset, setRedOffset] = useState(initialRedOffset);
  const [blueOffset, setBlueOffset] = useState(initialBlueOffset);
  const [alpha, setAlpha] = useState(initialAlpha);

  const presets = [
    { name: "Classic", red: 3, blue: -3, alpha: 1 },
    { name: "Heavy", red: 6, blue: -6, alpha: 1.2 },
    { name: "Subtle", red: 1, blue: -1, alpha: 0.7 },
    { name: "Asymmetric", red: 4, blue: -2, alpha: 0.9 },
  ];

  const applyPreset = (preset: (typeof presets)[0]) => {
    setRedOffset(preset.red);
    setBlueOffset(preset.blue);
    setAlpha(preset.alpha);
  };

  const reset = () => {
    setRedOffset(initialRedOffset);
    setBlueOffset(initialBlueOffset);
    setAlpha(initialAlpha);
  };

  return (
    <div className="bg-gray-950 rounded-lg p-6">
      <div className="flex justify-center">
        <ChromaticAberrationFilter
          id="chromatic-shapes"
          redX={redOffset}
          blueX={blueOffset}
          alpha={alpha}
        />
        <svg
          className="max-w-full h-auto"
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Range
            id="red-shapes"
            label={`Red Offset: ${redOffset}px`}
            min={-25}
            max={25}
            step={0.5}
            value={redOffset}
            onChange={(e) => setRedOffset(Number(e.target.value))}
          />

          <Range
            id="blue-shapes"
            label={`Blue Offset: ${blueOffset}px`}
            min={-25}
            max={25}
            step={0.5}
            value={blueOffset}
            onChange={(e) => setBlueOffset(Number(e.target.value))}
          />

          <Range
            id="alpha-shapes"
            label={`Alpha: ${alpha}`}
            min={0}
            max={2}
            step={0.1}
            value={alpha}
            onChange={(e) => setAlpha(Number(e.target.value))}
          />
        </div>

        <div className="flex flex-wrap gap-2 items-start">
          {presets.map((preset) => (
            <DemoButton
              key={preset.name}
              onClick={() => applyPreset(preset)}
              type="button"
            >
              {preset.name}
            </DemoButton>
          ))}
          <DemoButton onClick={reset} type="reset" variant="reset">
            Reset
          </DemoButton>
        </div>
      </div>
    </div>
  );
}

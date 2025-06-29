"use client";

import { useState } from "react";
import { Range } from "../Range/Range";
import { XYPad } from "@/components/XYPad/XYPad";
import { DemoButton } from "@/components/DemoButton/DemoButton";
import { ChromaticAberrationFilter } from "@/components/ChromaticAberrationFilter/ChromaticAberrationFilter";

interface ChromaticShapesDemoProps {
  initialRedOffset?: number;
  initialBlueOffset?: number;
  initialIntensity?: number;
}

export default function ChromaticShapesDemo({
  initialRedOffset = 3,
  initialBlueOffset = -3,
  initialIntensity = 1,
}: ChromaticShapesDemoProps) {
  const [redOffset, setRedOffset] = useState(initialRedOffset);
  const [redOffsetY, setRedOffsetY] = useState(initialRedOffset);
  const [blueOffset, setBlueOffset] = useState(initialBlueOffset);
  const [blueOffsetY, setBlueOffsetY] = useState(initialBlueOffset);
  const [intensity, setIntensity] = useState(initialIntensity);

  const presets = [
    { name: "Classic", red: 3, blue: -3, intensity: 1 },
    { name: "Heavy", red: 6, blue: -6, intensity: 1.2 },
    { name: "Subtle", red: 1, blue: -1, intensity: 0.7 },
    { name: "Asymmetric", red: 4, blue: -2, intensity: 0.9 },
  ];

  const applyPreset = (preset: (typeof presets)[0]) => {
    setRedOffset(preset.red);
    setBlueOffset(preset.blue);
    setIntensity(preset.intensity);
  };

  const reset = () => {
    setRedOffset(initialRedOffset);
    setBlueOffset(initialBlueOffset);
    setIntensity(initialIntensity);
  };

  return (
    <div className="bg-gray-950 rounded-lg p-6">
      <div className="flex justify-center">
        <ChromaticAberrationFilter
          id="chromatic-shapes"
          redX={redOffset}
          redY={redOffsetY}
          blueX={blueOffset}
          blueY={blueOffsetY}
          intensity={intensity}
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

      <div className="flex max-sm:flex-col justify-start items-start gap-4">
        <div className="flex gap-x-4">
          <div className="grid gap-y-2">
            <p className="block text-sm font-medium text-gray-300">
              Red Offset
            </p>
            <XYPad
              className="shrink-0"
              xValueLabel={`${redOffset.toFixed(1)}px`}
              yValueLabel={`${redOffsetY.toFixed(1)}px`}
              onValueChange={(x, y) => {
                setRedOffset(x / 2 - 25);
                setRedOffsetY(-y / 2 + 25);
              }}
            />
          </div>
          <div className="grid gap-y-2">
            <p className="block text-sm font-medium text-gray-300">
              Blue Offset
            </p>
            <XYPad
              className="shrink-0"
              xValueLabel={`${blueOffset.toFixed(1)}px`}
              yValueLabel={`${blueOffsetY.toFixed(1)}px`}
              onValueChange={(x, y) => {
                setBlueOffset(x / 2 - 25);
                setBlueOffsetY(-y / 2 + 25);
              }}
            />
          </div>
        </div>

        <div className="grid w-full items-start gap-y-4">
          <Range
            id="intensity-shapes"
            label={`Intensity: ${intensity.toFixed(1)}`}
            min={0}
            max={2}
            step={0.1}
            value={intensity}
            onChange={(e) => setIntensity(Number(e.target.value))}
          />

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
    </div>
  );
}

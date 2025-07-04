"use client";

import { useState, useId } from "react";
import { Range } from "../Range/Range";
import { DemoButton } from "@/components/DemoButton/DemoButton";
import { ChromaticAberrationFilter } from "@/components/ChromaticAberrationFilter/ChromaticAberrationFilter";

export default function ChromaticAberrationDemo() {
  const [redOffset, setRedOffset] = useState(5);
  const [blueOffset, setBlueOffset] = useState(-5);
  const [redBlueBlur, setRedBlueBlur] = useState(2);

  // Safari doesn’t support special characters in referenced IDs
  const filterId = `chromatic-aberration-${useId().replace(/\W/g, "")}`;

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
    <div className="grid gap-y-6 rounded-xl border bg-gray-950 p-6">
      <div className="@container/demo">
        <ChromaticAberrationFilter
          id={`chromatic-aberration-${filterId}`}
          redX={redOffset}
          blueBlur={redBlueBlur}
          redBlur={redBlueBlur}
          blueX={blueOffset}
        />

        <p
          className="text-center text-[12cqw] leading-[1.15] font-extrabold text-gray-50 will-change-[filter]"
          style={{ filter: `url(#chromatic-aberration-${filterId})` }}
        >
          TRY IT OUT ⚙️⬇️
        </p>
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
            id="redBlueBlur"
            label={`Red/Blue Blur: ${redBlueBlur}`}
            min={0}
            max={5}
            step={1}
            value={redBlueBlur}
            onChange={(e) => setRedBlueBlur(Number.parseFloat(e.target.value))}
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

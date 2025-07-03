"use client";

import { useState, useId } from "react";
import { Range } from "../Range/Range";
import { DemoButton } from "../DemoButton/DemoButton";
import { SvgCodePreview } from "../SvgCodePreview/SvgCodePreview";

export const HueRotateDemo: React.FC = () => {
  const [hueRotate, setHueRotate] = useState(0);
  const filterId = useId().replace(/\W/g, "");
  const filterUrl = `url(#${filterId})`;

  const presets = [
    { name: "0° (Default)", value: 0 },
    { name: "90°", value: 90 },
    { name: "180°", value: 180 },
    { name: "270°", value: 270 },
    { name: "360°", value: 360 },
  ];

  return (
    <div className="rounded-lg bg-gray-950 p-6">
      <svg
        className="sr-only"
        aria-hidden="true"
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={filterId}>
            <feColorMatrix type="hueRotate" values={hueRotate.toString()} />
          </filter>
        </defs>
      </svg>

      <div
        className="mb-6 grid h-32 grid-cols-2 gap-4 rounded-lg bg-linear-to-r/longer from-red-500 to-red-500 md:grid-cols-4"
        style={{ filter: filterUrl }}
      />

      <div className="mb-4">
        <Range
          id="hue-rotate"
          label={`Hue Rotation: ${hueRotate}°`}
          min={0}
          max={360}
          step={1}
          value={hueRotate}
          onChange={(e) => setHueRotate(e.target.valueAsNumber)}
        />
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {presets.map((preset) => (
          <DemoButton
            key={preset.name}
            onClick={() => setHueRotate(preset.value)}
            variant={preset.name.includes("Default") ? "reset" : "default"}
          >
            {preset.name}
          </DemoButton>
        ))}
      </div>

      <SvgCodePreview
        code={`<feColorMatrix type="hueRotate" values="${hueRotate}" />`}
      />
    </div>
  );
};

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
    <div className="bg-neutral-950 p-6">
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
        className="mb-6 flex gap-x-4 will-change-[filter] [content-visibility:auto]"
        style={{ filter: filterUrl }}
      >
        <div className="grid grow grid-cols-2 gap-4 bg-linear-to-r/longer from-red-500 to-red-500 md:grid-cols-4" />
        <img
          alt=""
          className="aspect-square bg-neutral-300"
          height="150"
          src="https://fastly.picsum.photos/id/674/300/300.jpg?hmac=VfiUNKIvgDHvUHdYMaz7o1kmDNEFCRNm7ng9EA_W5DE"
          width="150"
        />
      </div>

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

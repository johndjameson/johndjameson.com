"use client";

import { useState, useId } from "react";
import { Range } from "../Range/Range";
import { SvgCodePreview } from "../SvgCodePreview/SvgCodePreview";

export const SaturationDemo: React.FC = () => {
  const [saturation, setSaturation] = useState(1);
  const filterId = useId().replace(/\W/g, "");
  const filterUrl = `url(#${filterId})`;

  return (
    <div className="rounded-xl bg-gray-950 p-6">
      <svg className="sr-only" aria-hidden="true" width="0" height="0">
        <defs>
          <filter id={filterId}>
            <feColorMatrix type="saturate" values={saturation.toString()} />
          </filter>
        </defs>
      </svg>

      <div
        className="mb-6 flex gap-x-4 will-change-[filter] [content-visibility:auto]"
        style={{ filter: filterUrl }}
      >
        <div className="grid grow grid-cols-2 gap-4 rounded-lg bg-linear-to-r/longer from-red-500 to-red-500 md:grid-cols-4" />
        <img
          alt=""
          className="aspect-square rounded-lg bg-gray-300"
          height="150"
          src="https://fastly.picsum.photos/id/849/300/300.jpg?hmac=3LuuFM213tFx8cCevmOt7FgxtSVGXMcgW4BQQn4clHU"
          width="150"
        />
      </div>

      <div className="mb-4">
        <Range
          id="saturation"
          label={`Saturation: ${saturation.toFixed(1)}`}
          min={0}
          max={2}
          step={0.1}
          value={saturation}
          onChange={(e) => setSaturation(e.target.valueAsNumber)}
        />
      </div>

      <SvgCodePreview
        code={`<feColorMatrix type="saturate" values="${saturation}" />`}
      />
    </div>
  );
};

"use client";

import { useState, useId } from "react";
import { ColorMatrixFilter } from "../ColorMatrixFilter/ColorMatrixFilter";
import { DemoButton } from "../DemoButton/DemoButton";
import { SvgCodePreview } from "../SvgCodePreview/SvgCodePreview";

const presets = [
  {
    name: "Default",
    matrix: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  },
  {
    name: "Vintage",
    matrix: [
      0.6, 0.3, 0.1, 0, 0.1, 0.2, 0.6, 0.2, 0, 0.1, 0.1, 0.2, 0.5, 0, 0.1, 0, 0,
      0, 1, 0,
    ],
  },
  {
    name: "High Contrast",
    matrix: [
      1.2, 0, 0, 0, -0.1, 0, 1.2, 0, 0, -0.1, 0, 0, 1.2, 0, -0.1, 0, 0, 0, 1, 0,
    ],
  },
  {
    name: "Invert",
    matrix: [-1, 0, 0, 0, 1, 0, -1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, 1, 0],
  },
];

export const ColorMatrixDemo: React.FC = () => {
  const [matrix, setMatrix] = useState(presets[0].matrix);
  const filterId = useId().replace(/\W/g, "");
  const filterUrl = `url(#${filterId})`;

  const handlePresetClick = (presetMatrix: number[]) => {
    setMatrix([...presetMatrix]);
  };

  return (
    <div className="rounded-lg bg-gray-950 p-6">
      <ColorMatrixFilter matrix={matrix} filterId={filterId} />

      <div className="mb-6 grid grid-cols-2 gap-x-6">
        <div className="flex aspect-square gap-y-4 sm:flex-col">
          <div className="grid grid-cols-3 gap-x-4 max-sm:hidden">
            <div
              className="aspect-square rounded-lg bg-linear-to-br/oklch from-red-500 to-red-800 will-change-[filter]"
              style={{ filter: filterUrl }}
            />
            <div
              className="aspect-square rounded-lg bg-linear-to-br/oklch from-green-500 to-green-800 will-change-[filter]"
              style={{ filter: filterUrl }}
            />
            <div
              className="aspect-square rounded-lg bg-linear-to-br/oklch from-blue-500 to-blue-800 will-change-[filter]"
              style={{ filter: filterUrl }}
            />
          </div>
          <div
            className="grow rounded-lg bg-linear-to-br/longer from-[red] to-[red] will-change-[filter]"
            style={{ filter: filterUrl }}
          />
        </div>
        <img
          alt=""
          className="aspect-square rounded-lg bg-gray-300 will-change-[filter]"
          height={400}
          src="https://fastly.picsum.photos/id/511/800/800.jpg?hmac=CJTcQacWVMv2en9Vbro7yBAwnO-umVB_f8k6JaULo4Y"
          style={{ filter: filterUrl }}
          width={400}
        />
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {presets.map((preset) => (
          <DemoButton
            key={preset.name}
            onClick={() => handlePresetClick(preset.matrix)}
            variant={preset.name === "Default" ? "reset" : "default"}
          >
            {preset.name}
          </DemoButton>
        ))}
      </div>

      <SvgCodePreview
        code={`<feColorMatrix type="matrix" values="
  ${matrix.slice(0, 5).join(" ")}
  ${matrix.slice(5, 10).join(" ")}
  ${matrix.slice(10, 15).join(" ")}
  ${matrix.slice(15, 20).join(" ")}
" />`}
      />
    </div>
  );
};

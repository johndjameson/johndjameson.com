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
    name: "Grayscale",
    matrix: [
      0.299, 0.587, 0.114, 0, 0, 0.299, 0.587, 0.114, 0, 0, 0.299, 0.587, 0.114,
      0, 0, 0, 0, 0, 1, 0,
    ],
  },
  {
    name: "Sepia",
    matrix: [
      0.393, 0.769, 0.189, 0, 0, 0.349, 0.686, 0.168, 0, 0, 0.272, 0.534, 0.131,
      0, 0, 0, 0, 0, 1, 0,
    ],
  },
  {
    name: "Invert",
    matrix: [-1, 0, 0, 0, 1, 0, -1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, 1, 0],
  },
  {
    name: "High Contrast",
    matrix: [
      2, 0, 0, 0, -0.5, 0, 2, 0, 0, -0.5, 0, 0, 2, 0, -0.5, 0, 0, 0, 1, 0,
    ],
  },
];

export const ColorMatrixDemo: React.FC = () => {
  const [matrix, setMatrix] = useState(presets[0].matrix);
  const [filterEnabled, setFilterEnabled] = useState(true);
  const filterId = useId().replace(/\W/g, "");

  const handlePresetClick = (presetMatrix: number[]) => {
    setMatrix([...presetMatrix]);
  };

  return (
    <div className="rounded-lg bg-gray-950 p-6">
      <ColorMatrixFilter matrix={matrix} filterId={filterId} />

      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div
          className="flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-800 p-8 text-center text-4xl font-bold text-white shadow-lg md:text-5xl"
          style={{
            filter: filterEnabled ? `url(#${filterId})` : "none",
          }}
        >
          Color Matrix
        </div>
        <div
          className="aspect-video rounded-lg bg-linear-to-br/oklch from-red-500 to-purple-500"
          style={{
            filter: filterEnabled ? `url(#${filterId})` : "none",
          }}
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
        code={`<feColorMatrix
  type="matrix"
  values="${matrix.slice(0, 5).join(" ")}
         ${matrix.slice(5, 10).join(" ")}
         ${matrix.slice(10, 15).join(" ")}
         ${matrix.slice(15, 20).join(" ")}"
/>`}
      />
    </div>
  );
};

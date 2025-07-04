"use client";

import { useState, useId } from "react";
import { ColorMatrixFilter } from "../ColorMatrixFilter/ColorMatrixFilter";
import { Range } from "../Range/Range";
import { DemoButton } from "../DemoButton/DemoButton";
import { SvgCodePreview } from "../SvgCodePreview/SvgCodePreview";

const DEFAULT_MATRIX = [
  1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
];

const presets = [
  {
    name: "Default",
    matrix: DEFAULT_MATRIX,
    variant: "reset" as const,
  },
  {
    name: "Red Only",
    matrix: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    variant: "default" as const,
  },
  {
    name: "Green Only",
    matrix: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    variant: "default" as const,
  },
  {
    name: "Blue Only",
    matrix: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    variant: "default" as const,
  },
];

const matrixLabels = [
  ["R × R In", "R × G In", "R × B In", "R × A In", "R+"],
  ["G × R In", "G × G In", "G × B In", "G × A In", "G+"],
  ["B × R In", "B × G In", "B × B In", "B × A In", "B+"],
  ["A × R In", "A × G In", "A × B In", "A × A In", "A+"],
];

export const ColorMatrixControls: React.FC = () => {
  const [matrix, setMatrix] = useState(DEFAULT_MATRIX);
  const [filterEnabled, setFilterEnabled] = useState(true);
  const filterId = useId().replace(/\W/g, "");

  const updateMatrixValue = (index: number, value: number) => {
    const newMatrix = [...matrix];
    newMatrix[index] = value;
    setMatrix(newMatrix);
  };

  const handlePresetClick = (presetMatrix: number[]) => {
    setFilterEnabled(true);
    setMatrix([...presetMatrix]);
  };

  return (
    <div className="rounded-xl bg-gray-950 p-6">
      <ColorMatrixFilter matrix={matrix} filterId={filterId} />

      <div className="bg-checkered mb-6 flex justify-center overflow-hidden rounded-lg bg-gray-300 [content-visibility:auto]">
        <div
          className="h-32 w-full bg-linear-to-r/longer from-red-500 to-red-500 will-change-[filter]"
          style={{
            filter: filterEnabled ? `url(#${filterId})` : "none",
          }}
        />
      </div>

      <div className="mb-6 grid grid-cols-5 gap-2 text-xs">
        {matrix.map((value, index) => {
          const row = Math.floor(index / 5);
          const col = index % 5;
          const label = matrixLabels[row]?.[col] || `${row}-${col}`;
          const isOffset = col === 4;

          return (
            <Range
              key={`matrix-${index}`}
              id={`matrix-${index}`}
              label={label}
              min={isOffset ? -1 : -2}
              max={isOffset ? 1 : 2}
              step={0.1}
              value={value}
              onChange={(e) => updateMatrixValue(index, e.target.valueAsNumber)}
              className="text-xs"
            />
          );
        })}
      </div>

      <div className="flex flex-wrap gap-2">
        {presets.map((preset) => (
          <DemoButton
            key={preset.name}
            onClick={() => handlePresetClick(preset.matrix)}
            variant={preset.variant}
          >
            {preset.name}
          </DemoButton>
        ))}
        <DemoButton
          onClick={() => setFilterEnabled(!filterEnabled)}
          variant="default"
        >
          {filterEnabled ? "Disable Filter" : "Enable Filter"}
        </DemoButton>
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

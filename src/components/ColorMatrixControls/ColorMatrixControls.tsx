"use client";

import { useState, useId } from "react";
import { ColorMatrixFilter } from "../ColorMatrixFilter/ColorMatrixFilter";
import { Range } from "../Range/Range";
import { DemoButton } from "../DemoButton/DemoButton";
import { SvgCodePreview } from "../SvgCodePreview/SvgCodePreview";

const DEFAULT_MATRIX = [
  1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
];

const matrixLabels = [
  ["R×R", "R×G", "R×B", "R×A", "R+"],
  ["G×R", "G×G", "G×B", "G×A", "G+"],
  ["B×R", "B×G", "B×B", "B×A", "B+"],
  ["A×R", "A×G", "A×B", "A×A", "A+"],
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

  const resetMatrix = () => {
    setMatrix([...DEFAULT_MATRIX]);
  };

  return (
    <div className="rounded-lg bg-gray-950 p-6">
      <ColorMatrixFilter matrix={matrix} filterId={filterId} />

      <div className="mb-6 flex justify-center">
        <div
          className="h-32 w-full rounded-lg bg-linear-to-r/longer from-red-500 to-red-500"
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
        <DemoButton onClick={resetMatrix} variant="reset">
          Default
        </DemoButton>
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

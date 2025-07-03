"use client";

import { useId } from "react";

interface ColorMatrixFilterProps {
  matrix: number[];
  filterId?: string;
}

export const ColorMatrixFilter: React.FC<ColorMatrixFilterProps> = ({
  matrix,
  filterId,
}) => {
  const defaultId = useId().replace(/\W/g, "");
  const id = filterId ?? `color-matrix-${defaultId}`;

  const matrixValues = matrix.join(" ");

  return (
    <svg className="sr-only" aria-hidden="true" width="0" height="0">
      <defs>
        <filter id={id}>
          <feColorMatrix type="matrix" values={matrixValues} />
        </filter>
      </defs>
    </svg>
  );
};

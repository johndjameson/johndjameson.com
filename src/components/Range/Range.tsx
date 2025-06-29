"use client";

import { forwardRef } from "react";
import clsx from "clsx";

interface RangeProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  className?: string;
  label: string;
  max: number;
  min: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  step?: number;
  value: number;
}

export const Range = forwardRef<HTMLInputElement, RangeProps>(
  (
    {
      className,
      id,
      label,
      max,
      min,
      onChange,
      step = 0.5,
      value,
      ...forwardProps
    },
    ref,
  ) => {
    return (
      <div className={clsx("flex flex-col gap-2", className)}>
        <label className="block text-sm font-medium text-gray-300" htmlFor={id}>
          {label}
        </label>
        <input
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700 accent-gray-100"
          id={id}
          max={max}
          min={min}
          onChange={onChange}
          ref={ref}
          step={step}
          type="range"
          value={value}
          {...forwardProps}
        />
      </div>
    );
  },
);

Range.displayName = "Range";

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
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
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

        <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #525252;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
        }

        input[type="range"]::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #525252;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
        }
      `}</style>
      </div>
    );
  },
);

Range.displayName = "Range";

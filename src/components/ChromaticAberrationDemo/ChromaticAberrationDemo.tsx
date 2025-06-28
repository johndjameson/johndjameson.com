"use client";

import { useState, useId } from "react";
import { Range } from "../Range/Range";
import { DemoButton } from "@/components/DemoButton/DemoButton";

interface ChromaticAberrationDemoProps {
  text?: string;
  initialRedOffset?: number;
  initialBlueOffset?: number;
  initialIntensity?: number;
}

export default function ChromaticAberrationDemo({
  initialBlueOffset = -2,
  initialIntensity = 1,
  initialRedOffset = 2,
  text = "Chromatic Aberration",
}: ChromaticAberrationDemoProps) {
  const [redOffset, setRedOffset] = useState(initialRedOffset);
  const [blueOffset, setBlueOffset] = useState(initialBlueOffset);
  const [intensity, setIntensity] = useState(initialIntensity);
  const filterId = useId();

  return (
    <div className="border p-6 rounded-lg bg-gray-950">
      <div className="mb-6 @container/demo">
        <svg
          aria-hidden="true"
          className="sr-only"
          height="1"
          viewBox="0 0 1 1"
        >
          <defs>
            <filter id={`chromatic-aberration-${filterId}`}>
              <feOffset in="SourceGraphic" dx={redOffset} dy="0" result="red" />
              <feColorMatrix
                in="red"
                type="matrix"
                values={`${intensity} 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0`}
                result="redChannel"
              />

              <feOffset in="SourceGraphic" dx="0" dy="0" result="green" />
              <feColorMatrix
                in="green"
                type="matrix"
                values={`0 0 0 0 0 0 ${intensity} 0 0 0 0 0 0 0 0 0 0 0 1 0`}
                result="greenChannel"
              />

              <feOffset
                in="SourceGraphic"
                dx={blueOffset}
                dy="0"
                result="blue"
              />
              <feColorMatrix
                in="blue"
                type="matrix"
                values={`0 0 0 0 0 0 0 0 0 0 0 0 ${intensity} 0 0 0 0 0 1 0`}
                result="blueChannel"
              />

              <feBlend
                in="redChannel"
                in2="greenChannel"
                mode="screen"
                result="redGreen"
              />
              <feBlend
                in="redGreen"
                in2="blueChannel"
                mode="screen"
                result="chromatic"
              />
            </filter>
          </defs>
        </svg>

        <p
          className="text-gray-50 text-center text-[10cqw] font-extrabold leading-[1.15]"
          style={{ filter: `url(#chromatic-aberration-${filterId})` }}
        >
          {text}
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Range
            id="red-offset"
            label={`Red Offset: ${redOffset}px`}
            min={-10}
            max={10}
            step={0.5}
            value={redOffset}
            onChange={(e) => setRedOffset(Number.parseFloat(e.target.value))}
          />

          <Range
            id="blue-offset"
            label={`Blue Offset: ${blueOffset}px`}
            min={-10}
            max={10}
            step={0.5}
            value={blueOffset}
            onChange={(e) => setBlueOffset(Number.parseFloat(e.target.value))}
          />

          <Range
            id="intensity"
            label={`Intensity: ${Math.round(intensity * 100)}%`}
            min={0}
            max={1.5}
            step={0.1}
            value={intensity}
            onChange={(e) => setIntensity(Number.parseFloat(e.target.value))}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <DemoButton
            onClick={() => {
              setRedOffset(2);
              setBlueOffset(-2);
              setIntensity(0.8);
            }}
            type="button"
          >
            Classic
          </DemoButton>
          <DemoButton
            onClick={() => {
              setRedOffset(4);
              setBlueOffset(-4);
              setIntensity(1);
            }}
            type="button"
          >
            Heavy
          </DemoButton>
          <DemoButton
            onClick={() => {
              setRedOffset(1);
              setBlueOffset(-0.5);
              setIntensity(0.6);
            }}
            type="button"
          >
            Subtle
          </DemoButton>
          <DemoButton
            onClick={() => {
              setRedOffset(0);
              setBlueOffset(0);
              setIntensity(0);
            }}
            type="button"
            variant="reset"
          >
            Reset
          </DemoButton>
        </div>
      </div>
    </div>
  );
}

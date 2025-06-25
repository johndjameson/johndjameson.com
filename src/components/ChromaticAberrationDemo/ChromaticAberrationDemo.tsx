"use client";

import { useState, useId } from "react";

interface ChromaticAberrationDemoProps {
  text?: string;
  initialRedOffset?: number;
  initialBlueOffset?: number;
  initialIntensity?: number;
}

export default function ChromaticAberrationDemo({
  text = "ABERRATION",
  initialRedOffset = 2,
  initialBlueOffset = -2,
  initialIntensity = 0.8,
}: ChromaticAberrationDemoProps) {
  const [redOffset, setRedOffset] = useState(initialRedOffset);
  const [blueOffset, setBlueOffset] = useState(initialBlueOffset);
  const [intensity, setIntensity] = useState(initialIntensity);
  const filterId = useId();

  return (
    <div className="border border-neutral-200 p-6 rounded-lg bg-neutral-50">
      <div className="mb-6">
        <svg width="100%" height="120" viewBox="0 0 400 120" className="bg-black">
          <defs>
            <filter id={`chromatic-aberration-${filterId}`}>
              <feOffset in="SourceGraphic" dx={redOffset} dy="0" result="red" />
              <feColorMatrix in="red" type="matrix" values={`${intensity} 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0`} result="redChannel" />
              
              <feOffset in="SourceGraphic" dx="0" dy="0" result="green" />
              <feColorMatrix in="green" type="matrix" values={`0 0 0 0 0 0 ${intensity} 0 0 0 0 0 0 0 0 0 0 0 1 0`} result="greenChannel" />
              
              <feOffset in="SourceGraphic" dx={blueOffset} dy="0" result="blue" />
              <feColorMatrix in="blue" type="matrix" values={`0 0 0 0 0 0 0 0 0 0 0 0 ${intensity} 0 0 0 0 0 1 0`} result="blueChannel" />
              
              <feBlend in="redChannel" in2="greenChannel" mode="screen" result="redGreen" />
              <feBlend in="redGreen" in2="blueChannel" mode="screen" result="chromatic" />
            </filter>
          </defs>
          
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="32"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fill="white"
            filter={`url(#chromatic-aberration-${filterId})`}
          >
            {text}
          </text>
        </svg>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="red-offset" className="block text-sm font-medium text-neutral-700 mb-1">
              Red Offset: {redOffset}px
            </label>
            <input
              id="red-offset"
              type="range"
              min="-10"
              max="10"
              step="0.5"
              value={redOffset}
              onChange={(e) => setRedOffset(parseFloat(e.target.value))}
              className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider-thumb-red"
            />
          </div>

          <div>
            <label htmlFor="blue-offset" className="block text-sm font-medium text-neutral-700 mb-1">
              Blue Offset: {blueOffset}px
            </label>
            <input
              id="blue-offset"
              type="range"
              min="-10"
              max="10"
              step="0.5"
              value={blueOffset}
              onChange={(e) => setBlueOffset(parseFloat(e.target.value))}
              className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider-thumb-blue"
            />
          </div>

          <div>
            <label htmlFor="intensity" className="block text-sm font-medium text-neutral-700 mb-1">
              Intensity: {Math.round(intensity * 100)}%
            </label>
            <input
              id="intensity"
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={intensity}
              onChange={(e) => setIntensity(parseFloat(e.target.value))}
              className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setRedOffset(2);
              setBlueOffset(-2);
              setIntensity(0.8);
            }}
            className="px-3 py-1 text-sm bg-neutral-200 hover:bg-neutral-300 rounded transition-colors"
          >
            Classic
          </button>
          <button
            onClick={() => {
              setRedOffset(4);
              setBlueOffset(-4);
              setIntensity(1);
            }}
            className="px-3 py-1 text-sm bg-neutral-200 hover:bg-neutral-300 rounded transition-colors"
          >
            Heavy
          </button>
          <button
            onClick={() => {
              setRedOffset(1);
              setBlueOffset(-0.5);
              setIntensity(0.6);
            }}
            className="px-3 py-1 text-sm bg-neutral-200 hover:bg-neutral-300 rounded transition-colors"
          >
            Subtle
          </button>
          <button
            onClick={() => {
              setRedOffset(0);
              setBlueOffset(0);
              setIntensity(0);
            }}
            className="px-3 py-1 text-sm bg-neutral-200 hover:bg-neutral-300 rounded transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      <style jsx>{`
        .slider-thumb-red::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #ef4444;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
        }

        .slider-thumb-blue::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
        }

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
}
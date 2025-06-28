"use client";

import clsx from "clsx";
import type React from "react";
import { useState, useRef, useEffect, useCallback } from "react";

interface Position {
  x: number;
  y: number;
}

interface XYPadProps {
  onValueChange: (x: number, y: number) => void;
  initialX?: number;
  initialY?: number;
  className?: string;
}

export const XYPad: React.FC<XYPadProps> = ({
  onValueChange,
  initialX = 64,
  initialY = 64,
  className = "",
}) => {
  const [position, setPosition] = useState<Position>({ x: 50, y: 50 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [xValue, setXValue] = useState<number>(initialX);
  const [yValue, setYValue] = useState<number>(initialY);
  const padRef = useRef<HTMLDivElement>(null);

  // Convert percentage position to MIDI values (0-127)
  const positionToMidi = useCallback(
    (percent: number): number => Math.round((percent / 100) * 127),
    [],
  );

  // Update MIDI values when position changes
  useEffect(() => {
    const newXValue = positionToMidi(position.x);
    const newYValue = positionToMidi(100 - position.y); // Invert Y for typical XY pad behavior

    setXValue(newXValue);
    setYValue(newYValue);

    // Call callback if provided
    onValueChange?.(newXValue, newYValue);
  }, [position, positionToMidi, onValueChange]);

  const getPositionFromEvent = useCallback(
    (event: MouseEvent | TouchEvent, rect: DOMRect): Position => {
      const clientX =
        "touches" in event ? event.touches[0].clientX : event.clientX;
      const clientY =
        "touches" in event ? event.touches[0].clientY : event.clientY;

      const x = Math.max(
        0,
        Math.min(100, ((clientX - rect.left) / rect.width) * 100),
      );
      const y = Math.max(
        0,
        Math.min(100, ((clientY - rect.top) / rect.height) * 100),
      );

      return { x, y };
    },
    [],
  );

  const handleStart = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      event.preventDefault();
      if (!padRef.current) return;

      const rect = padRef.current.getBoundingClientRect();
      const newPosition = getPositionFromEvent(event.nativeEvent, rect);

      setPosition(newPosition);
      setIsDragging(true);
    },
    [getPositionFromEvent],
  );

  const handleMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!isDragging || !padRef.current) return;

      event.preventDefault();
      const rect = padRef.current.getBoundingClientRect();
      const newPosition = getPositionFromEvent(event, rect);

      setPosition(newPosition);
    },
    [isDragging, getPositionFromEvent],
  );

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Add global event listeners for mouse events
  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (e: MouseEvent) => handleMove(e);
      const handleMouseUp = () => handleEnd();
      const handleTouchMove = (e: TouchEvent) => handleMove(e);
      const handleTouchEnd = () => handleEnd();

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [isDragging, handleMove, handleEnd]);

  return (
    <div
      className={clsx("flex flex-col items-center max-w-sm mx-auto", className)}
    >
      {/* XY Pad */}
      <div className="relative mb-4">
        <div
          ref={padRef}
          className="w-64 h-64 bg-black border-2 border-gray-600 relative cursor-crosshair select-none"
          onMouseDown={handleStart}
          onTouchStart={handleStart}
        >
          {/* Grid lines */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Vertical grid lines */}
            {[25, 50, 75].map((x: number) => (
              <div
                key={`v-${x}`}
                className="absolute top-0 bottom-0 border-l border-gray-700 opacity-30"
                style={{ left: `${x}%` }}
              />
            ))}
            {/* Horizontal grid lines */}
            {[25, 50, 75].map((y: number) => (
              <div
                key={`h-${y}`}
                className="absolute left-0 right-0 border-t border-gray-700 opacity-30"
                style={{ top: `${y}%` }}
              />
            ))}
          </div>

          {/* Control point */}
          <div
            className={
              "absolute w-4 h-4 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-colors shadow-lg border-2 border-white pointer-events-none"
            }
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
            }}
          />
        </div>

        {/* Axis labels and values */}
        <div className="absolute bottom-1 font-mono left-2 text-gray-400 text-sm pointer-none select-none">
          X <span className="text-white">{xValue}</span>, Y{" "}
          <span className="text-white">{yValue}</span>
        </div>
      </div>
    </div>
  );
};

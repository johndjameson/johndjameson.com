"use client";

import clsx from "clsx";
import type React from "react";
import { useState, useRef, useEffect, useCallback } from "react";

interface Position {
  x: number;
  y: number;
}

interface XYPadProps {
  className?: string;
  initialX?: number;
  initialY?: number;
  label?: string;
  onValueChange: (x: number, y: number) => void;
  xValueLabel?: string;
  yValueLabel?: string;
}

const generateGridBackgroundImage = ({
  backgroundColor = "transparent",
  lineColor,
  spacing,
}: {
  backgroundColor?: string;
  lineColor: string;
  spacing: string;
}) => {
  const template = `BACKGROUND 0%,
                    BACKGROUND calc(${spacing} - 1px),
                    ${lineColor} calc(${spacing} - 1px),
                    ${lineColor} calc(${spacing})`;

  const columns = template.replaceAll("BACKGROUND", backgroundColor);
  const rows = template.replaceAll("BACKGROUND", "transparent");

  return `repeating-linear-gradient(to bottom, ${rows}),
          repeating-linear-gradient(to right, ${columns})`;
};

export const XYPad: React.FC<XYPadProps> = ({
  className = "",
  initialX = 64,
  initialY = 64,
  onValueChange,
  xValueLabel,
  yValueLabel,
}) => {
  const [position, setPosition] = useState<Position>({ x: 50, y: 50 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [xValue, setXValue] = useState<number>(initialX);
  const [yValue, setYValue] = useState<number>(initialY);
  const padRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newXValue = Math.round(position.x);
    const newYValue = Math.round(100 - position.y);

    setXValue(newXValue);
    setYValue(newYValue);

    onValueChange?.(newXValue, newYValue);
  }, [position, onValueChange]);

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
    (event: MouseEvent | TouchEvent) => {
      if (!padRef.current) return;

      // Prevent page scrolling on touch devices
      if ('touches' in event) {
        event.preventDefault();
      }

      const rect = padRef.current.getBoundingClientRect();
      const newPosition = getPositionFromEvent(event, rect);

      setPosition(newPosition);
      setIsDragging(true);
    },
    [getPositionFromEvent],
  );

  const handleMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!isDragging || !padRef.current) return;

      const rect = padRef.current.getBoundingClientRect();
      const newPosition = getPositionFromEvent(event, rect);

      setPosition(newPosition);
    },
    [isDragging, getPositionFromEvent],
  );

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Add event listeners to the pad element and global listeners for drag events
  useEffect(() => {
    const padElement = padRef.current;
    if (!padElement) return;

    const handleMouseDown = (e: MouseEvent) => handleStart(e);
    const handleTouchStart = (e: TouchEvent) => handleStart(e);

    padElement.addEventListener("mousedown", handleMouseDown);
    padElement.addEventListener("touchstart", handleTouchStart, { passive: false });

    return () => {
      padElement.removeEventListener("mousedown", handleMouseDown);
      padElement.removeEventListener("touchstart", handleTouchStart);
    };
  }, [handleStart]);

  // Add global event listeners for drag events
  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (e: MouseEvent) => handleMove(e);
      const handleMouseUp = () => handleEnd();
      const handleTouchMove = (e: TouchEvent) => {
        e.preventDefault(); // Prevent page scrolling during drag
        handleMove(e);
      };
      const handleTouchEnd = () => handleEnd();

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove, { passive: false });
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
      className={clsx(
        "size-32 bg-black border-2 border-gray-600 relative cursor-crosshair select-none",
        className,
      )}
      style={{
        backgroundImage: generateGridBackgroundImage({
          lineColor: "var(--color-gray-800)",
          spacing: "10%",
        }),
      }}
      ref={padRef}
    >
      {/* Handle */}
      <div
        className={
          "absolute w-4 h-4 bg-gray-800 rounded-full -translate-x-1/2 -translate-y-1/2 transition-colors border-1 border-gray-50"
        }
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
        }}
      />

      {/* Labels */}
      <div className="absolute bottom-1 font-mono left-2 text-gray-400 text-xs pointer-none select-none">
        X <span className="text-white">{xValueLabel ?? xValue}</span>{" "}
        <div className="block">
          Y <span className="text-white">{yValueLabel ?? yValue}</span>
        </div>
      </div>
    </div>
  );
};

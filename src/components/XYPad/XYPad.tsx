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
  xLabel?: string;
  yLabel?: string;
  step?: number;
  largeStep?: number;
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
  label = "XY control",
  onValueChange,
  xValueLabel,
  yValueLabel,
  xLabel = "X",
  yLabel = "Y",
  step = 2,
  largeStep = 10,
}) => {
  const [position, setPosition] = useState<Position>({ x: 50, y: 50 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [xValue, setXValue] = useState<number>(initialX);
  const [yValue, setYValue] = useState<number>(initialY);
  const [liveText, setLiveText] = useState<string>("");
  const padRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const announceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Debounced live region announcements
  const announceLiveChange = useCallback(
    (x: number, y: number) => {
      if (announceTimeoutRef.current) {
        clearTimeout(announceTimeoutRef.current);
      }

      announceTimeoutRef.current = setTimeout(() => {
        setLiveText(`${xLabel} ${x}, ${yLabel} ${y}`);
      }, 300); // 300ms debounce
    },
    [xLabel, yLabel],
  );

  useEffect(() => {
    const newXValue = Math.round(position.x);
    const newYValue = Math.round(100 - position.y);

    setXValue(newXValue);
    setYValue(newYValue);

    // Announce changes to screen readers with debouncing
    announceLiveChange(newXValue, newYValue);

    onValueChange?.(newXValue, newYValue);
  }, [position, onValueChange, announceLiveChange]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (announceTimeoutRef.current) {
        clearTimeout(announceTimeoutRef.current);
      }
    };
  }, []);

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
      if ("touches" in event) {
        event.preventDefault();
      }

      const rect = padRef.current.getBoundingClientRect();
      const newPosition = getPositionFromEvent(event, rect);

      setPosition(newPosition);
      setIsDragging(true);

      // Focus the handle when clicked
      if (handleRef.current) {
        handleRef.current.focus();
      }
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

  // Handle keyboard navigation on handle
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      let newX = position.x;
      let newY = position.y;
      let stepSize = step;

      if (e.shiftKey) {
        stepSize = largeStep;
      }

      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          newY = Math.max(0, position.y - stepSize);
          break;
        case "ArrowDown":
          e.preventDefault();
          newY = Math.min(100, position.y + stepSize);
          break;
        case "ArrowLeft":
          e.preventDefault();
          newX = Math.max(0, position.x - stepSize);
          break;
        case "ArrowRight":
          e.preventDefault();
          newX = Math.min(100, position.x + stepSize);
          break;
        default:
          return;
      }

      setPosition({ x: newX, y: newY });
    },
    [position.x, position.y, step, largeStep],
  );

  // Add event listeners to the pad element and global listeners for drag events
  useEffect(() => {
    const padElement = padRef.current;
    if (!padElement) return;

    const handleMouseDown = (e: MouseEvent) => handleStart(e);
    const handleTouchStart = (e: TouchEvent) => handleStart(e);

    padElement.addEventListener("mousedown", handleMouseDown);
    padElement.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });

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
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
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
        "relative size-32 cursor-crosshair border-2 border-gray-600 bg-black select-none",
        className,
      )}
      style={{
        backgroundImage: generateGridBackgroundImage({
          lineColor: "var(--color-gray-800)",
          spacing: "10%",
        }),
      }}
      ref={padRef}
      role="application"
    >
      <p className="sr-only">
        Use arrow keys to move the handle. Hold Shift for larger steps.
      </p>

      <p id={`${label}-position`} className="sr-only">
        Current position: {xLabel} {xValue}, {yLabel} {yValue}.
      </p>

      {/* Live region for real-time announcements */}
      <div aria-live="assertive" aria-atomic="true" className="sr-only">
        {liveText}
      </div>

      {/* Handle */}
      <div
        ref={handleRef}
        className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-1 border-gray-50 bg-gray-800 transition-colors"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
        }}
        // biome-ignore lint/a11y/noNoninteractiveTabindex: role="application", behavior implemented manually
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-describedby={`${label}-position`}
        aria-label={`${label} handle`}
      />

      {/* Labels */}
      <div className="pointer-events-none absolute bottom-1 left-2 font-mono text-xs text-gray-400 select-none">
        X <span className="text-white">{xValueLabel ?? xValue}</span>{" "}
        <div className="block">
          Y <span className="text-white">{yValueLabel ?? yValue}</span>
        </div>
      </div>
    </div>
  );
};

"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface InteractiveSmileyProps {
  className?: string;
}

const MAX_MOVEMENT = 15;

export default function InteractiveSmiley({
  className = "",
}: InteractiveSmileyProps) {
  const [faceTransform, setFaceTransform] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLButtonElement>(null);
  const smileyRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isVisible) {
        updateFace(e.clientX, e.clientY);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isVisible) {
        const touch = e.touches[0];
        updateFace(touch.clientX, touch.clientY);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isVisible]);

  const handleClick = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const updateFace = useCallback((mouseX: number, mouseY: number) => {
    if (!smileyRef.current) return;

    const rect = smileyRef.current.getBoundingClientRect();
    const smileyCenterX = rect.left + rect.width / 2;
    const smileyCenterY = rect.top + rect.height / 2;

    const relativeX = mouseX - smileyCenterX;
    const relativeY = mouseY - smileyCenterY;

    const angle = Math.atan2(relativeY, relativeX);
    const distance = Math.sqrt(relativeX * relativeX + relativeY * relativeY);
    const normalizedDistance = Math.min(distance / 400, 1);

    const movementIntensity = normalizedDistance * MAX_MOVEMENT;

    const offsetX = Math.cos(angle) * movementIntensity;
    const offsetY = Math.sin(angle) * movementIntensity;

    setFaceTransform({ x: offsetX, y: offsetY });
  }, []);

  return (
    <button
      aria-label="Smiley mode"
      aria-pressed={isVisible}
      className={`inline-flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full transition-transform duration-200 hover:scale-110 ${className}`}
      onClick={handleClick}
      ref={containerRef}
      type="button"
    >
      {isVisible ? (
        <svg
          className="drop-shadow-sm"
          height={50}
          ref={smileyRef}
          viewBox="0 0 200 200"
          width={50}
        >
          <defs>
            <radialGradient id="smileyGradient" cx="0.4" cy="0.3" r="1">
              <stop offset="0%" stopColor="var(--color-yellow-200)" />
              <stop offset="100%" stopColor="var(--color-yellow-400)" />
            </radialGradient>
          </defs>
          <circle
            cx="100"
            cy="100"
            fill="url(#smileyGradient)"
            r="84"
            stroke="var(--color-orange-300)"
            strokeWidth="6"
          />
          <g
            style={{
              transform: `translate(${faceTransform.x}px, ${faceTransform.y}px)`,
            }}
          >
            <circle cx="75" cy="80" r="8" fill="var(--color-amber-900)" />
            <circle cx="125" cy="80" r="8" fill="var(--color-amber-900)" />
            <path
              d="M 70 130 Q 100 160 130 130"
              fill="none"
              stroke="var(--color-amber-900)"
              strokeLinecap="round"
              strokeWidth="6"
            />
          </g>
        </svg>
      ) : (
        <span className="text-5xl">😊</span>
      )}
    </button>
  );
}

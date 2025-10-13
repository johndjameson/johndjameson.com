"use client";

import { useState, useEffect } from "react";
import { DemoButton } from "@/components/DemoButton/DemoButton";
import clsx from "clsx";

interface Step {
  startIndex: number;
  endIndex: number;
  substring: string;
}

function generateSteps(inputString: string): Step[] {
  const steps: Step[] = [];

  for (let startIndex = 0; startIndex < inputString.length; startIndex++) {
    for (
      let endIndex = startIndex + 1;
      endIndex <= inputString.length;
      endIndex++
    ) {
      steps.push({
        startIndex,
        endIndex,
        substring: inputString.slice(startIndex, endIndex),
      });
    }
  }

  return steps;
}

export const SubstringVisualizer = () => {
  const inputString = "example";
  const steps = generateSteps(inputString);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentStep = steps[currentStepIndex];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      if (currentStepIndex < steps.length - 1) {
        setCurrentStepIndex((prev) => prev + 1);
      } else {
        setIsPlaying(false);
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [isPlaying, currentStepIndex, steps.length]);

  const handlePlayPause = () => {
    if (currentStepIndex === steps.length - 1 && !isPlaying) {
      setCurrentStepIndex(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
      setIsPlaying(false);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
      setIsPlaying(false);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setIsPlaying(false);
  };

  return (
    <div className="grid gap-y-6 border bg-neutral-950 p-6">
      {/* Visualization */}
      <div className="grid gap-y-4">
        <div className="flex justify-center gap-1 font-mono text-2xl">
          {inputString.split("").map((char, index) => (
            <div
              key={index}
              className={clsx(
                "flex h-12 w-12 items-center justify-center border-2 transition-all duration-300",
                index >= currentStep.startIndex && index < currentStep.endIndex
                  ? "scale-110 border-blue-500 bg-blue-500/20 text-blue-300"
                  : "border-neutral-700 bg-neutral-900 text-neutral-400",
              )}
            >
              {char}
            </div>
          ))}
        </div>

        {/* Pointer Labels */}
        <div className="flex justify-center gap-1">
          {inputString.split("").map((_, index) => (
            <div
              key={index}
              className="flex h-12 w-12 flex-col items-center justify-start text-xs"
            >
              {index === currentStep.startIndex && (
                <div className="font-mono text-green-400">↑ start</div>
              )}
              {index === currentStep.endIndex && (
                <div className="font-mono text-red-400">↑ end</div>
              )}
            </div>
          ))}
        </div>

        {/* Current substring display */}
        <div className="text-center">
          <div className="text-sm text-neutral-400">
            Step {currentStepIndex + 1} of {steps.length}
          </div>
          <div className="mt-2 font-mono text-xl text-neutral-100">
            substring:{" "}
            <span className="text-blue-400">
              &quot;{currentStep.substring}&quot;
            </span>
          </div>
          <div className="mt-1 font-mono text-sm text-neutral-500">
            inputString.slice({currentStep.startIndex}, {currentStep.endIndex})
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap justify-center gap-2">
        <DemoButton onClick={handlePrev} disabled={currentStepIndex === 0}>
          ← Prev
        </DemoButton>
        <DemoButton onClick={handlePlayPause}>
          {isPlaying
            ? "⏸ Pause"
            : currentStepIndex === steps.length - 1
              ? "↻ Replay"
              : "▶ Play"}
        </DemoButton>
        <DemoButton
          onClick={handleNext}
          disabled={currentStepIndex === steps.length - 1}
        >
          Next →
        </DemoButton>
        <DemoButton
          onClick={handleReset}
          variant="reset"
          disabled={currentStepIndex === 0 && !isPlaying}
        >
          Reset
        </DemoButton>
      </div>

      {/* Results list */}
      <div className="border-t border-neutral-800 pt-4">
        <div className="mb-2 text-sm text-neutral-400">
          All substrings generated:
        </div>
        <div className="flex flex-wrap gap-2">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentStepIndex(index);
                setIsPlaying(false);
              }}
              className={clsx(
                "rounded border px-2 py-1 font-mono text-xs transition-all",
                index === currentStepIndex
                  ? "border-blue-500 bg-blue-500/20 text-blue-300"
                  : "border-neutral-700 bg-neutral-900 text-neutral-400 hover:border-neutral-600",
              )}
            >
              {step.substring}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

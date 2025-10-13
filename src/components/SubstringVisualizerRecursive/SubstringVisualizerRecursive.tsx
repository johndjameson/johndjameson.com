"use client";

import { useState, useEffect } from "react";
import { DemoButton } from "@/components/DemoButton/DemoButton";
import clsx from "clsx";

interface RecursiveStep {
  depth: number;
  currentString: string;
  substringsAtThisLevel: string[];
  isGeneratingSubstrings: boolean;
  isReturning: boolean;
}

function generateRecursiveSteps(inputString: string): RecursiveStep[] {
  const steps: RecursiveStep[] = [];
  let depth = 0;

  function recurse(str: string, currentDepth: number) {
    // Step 1: Enter the function with current string
    steps.push({
      depth: currentDepth,
      currentString: str,
      substringsAtThisLevel: [],
      isGeneratingSubstrings: false,
      isReturning: false,
    });

    // Base case
    if (str.length === 0) {
      steps.push({
        depth: currentDepth,
        currentString: str,
        substringsAtThisLevel: [],
        isGeneratingSubstrings: false,
        isReturning: true,
      });
      return;
    }

    // Step 2: Generate substrings at this level
    const substringsHere: string[] = [];
    for (let endIndex = 1; endIndex <= str.length; endIndex++) {
      substringsHere.push(str.slice(0, endIndex));
    }

    steps.push({
      depth: currentDepth,
      currentString: str,
      substringsAtThisLevel: substringsHere,
      isGeneratingSubstrings: true,
      isReturning: false,
    });

    // Recursive call
    recurse(str.slice(1), currentDepth + 1);

    // Step 3: Returning from recursion
    steps.push({
      depth: currentDepth,
      currentString: str,
      substringsAtThisLevel: substringsHere,
      isGeneratingSubstrings: false,
      isReturning: true,
    });
  }

  recurse(inputString, depth);
  return steps;
}

export const SubstringVisualizerRecursive = () => {
  const inputString = "example";
  const steps = generateRecursiveSteps(inputString);
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
    }, 800);

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

  // Get all steps up to current for the call stack visualization
  const callStack = steps
    .slice(0, currentStepIndex + 1)
    .filter(
      (step, index, arr) =>
        !step.isReturning ||
        index === currentStepIndex ||
        arr
          .slice(index + 1)
          .some((s) => s.depth > step.depth && !s.isReturning),
    )
    .filter((step, index, arr) => {
      // Only show the most recent occurrence of each depth level
      const lastIndexAtDepth = arr.findLastIndex((s) => s.depth === step.depth);
      return index === lastIndexAtDepth;
    });

  return (
    <div className="grid gap-y-6 border bg-neutral-950 p-6">
      {/* Current State */}
      <div className="text-center">
        <div className="text-sm text-neutral-400">
          Step {currentStepIndex + 1} of {steps.length}
        </div>
        <div className="mt-2 font-mono text-sm text-neutral-500">
          Recursion depth: {currentStep.depth}
        </div>
      </div>

      {/* Call Stack Visualization */}
      <div className="grid gap-2">
        <div className="text-sm text-neutral-400">Call stack:</div>
        {callStack.length === 0 ? (
          <div className="border border-neutral-800 bg-neutral-900 p-4 text-center font-mono text-sm text-neutral-500">
            (empty)
          </div>
        ) : (
          <div className="grid gap-2">
            {callStack.map((step, index) => {
              const isCurrentLevel = step.depth === currentStep.depth;
              return (
                <div
                  key={index}
                  style={{ marginLeft: `${step.depth * 20}px` }}
                  className={clsx(
                    "border p-3 font-mono text-sm transition-all",
                    isCurrentLevel
                      ? "border-blue-500 bg-blue-500/10 text-blue-300"
                      : "border-neutral-700 bg-neutral-900 text-neutral-400",
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-500">
                      getAllSubstringsRecursive(
                    </span>
                    <span className="text-green-400">
                      &quot;{step.currentString}&quot;
                    </span>
                    <span className="text-neutral-500">)</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Current Operation */}
      <div className="border border-neutral-700 bg-neutral-900 p-4">
        <div className="mb-2 text-sm text-neutral-400">Current operation:</div>
        {currentStep.currentString.length === 0 ? (
          <div className="font-mono text-sm text-neutral-300">
            Base case reached: returning empty array []
          </div>
        ) : currentStep.isGeneratingSubstrings ? (
          <div className="grid gap-2">
            <div className="font-mono text-sm text-neutral-300">
              Generating substrings from &quot;{currentStep.currentString}&quot;:
            </div>
            <div className="flex flex-wrap gap-2">
              {currentStep.substringsAtThisLevel.map((substr, index) => (
                <div
                  key={index}
                  className="border border-blue-500 bg-blue-500/20 px-2 py-1 font-mono text-xs text-blue-300"
                >
                  {substr}
                </div>
              ))}
            </div>
          </div>
        ) : currentStep.isReturning ? (
          <div className="font-mono text-sm text-neutral-300">
            Returning results and combining with recursive call
          </div>
        ) : (
          <div className="font-mono text-sm text-neutral-300">
            Calling getAllSubstringsRecursive(&quot;
            {currentStep.currentString.slice(1)}&quot;)
          </div>
        )}
      </div>

      {/* String Visualization */}
      <div className="grid gap-2">
        <div className="text-sm text-neutral-400">Current string:</div>
        <div className="flex justify-center gap-1 font-mono text-2xl">
          {currentStep.currentString.length === 0 ? (
            <div className="flex h-12 items-center justify-center border-2 border-neutral-700 bg-neutral-900 px-4 text-sm text-neutral-500">
              (empty string)
            </div>
          ) : (
            currentStep.currentString.split("").map((char, index) => (
              <div
                key={index}
                className={clsx(
                  "flex h-12 w-12 items-center justify-center border-2 transition-all duration-300",
                  currentStep.isGeneratingSubstrings
                    ? "border-blue-500 bg-blue-500/20 text-blue-300"
                    : "border-neutral-700 bg-neutral-900 text-neutral-400",
                )}
              >
                {char}
              </div>
            ))
          )}
        </div>
        {currentStep.currentString.length > 0 &&
          !currentStep.isGeneratingSubstrings &&
          !currentStep.isReturning && (
            <div className="text-center font-mono text-sm text-neutral-500">
              Next: process &quot;{currentStep.currentString.slice(1)}&quot;
            </div>
          )}
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

      {/* All substrings collected so far */}
      <div className="border-t border-neutral-800 pt-4">
        <div className="mb-2 text-sm text-neutral-400">
          All substrings generated so far:
        </div>
        <div className="flex flex-wrap gap-2">
          {(() => {
            const allSubstrings = steps
              .slice(0, currentStepIndex + 1)
              .filter((step) => step.isGeneratingSubstrings)
              .flatMap((step) => step.substringsAtThisLevel);

            const previousSubstrings = steps
              .slice(0, currentStepIndex)
              .filter((step) => step.isGeneratingSubstrings)
              .flatMap((step) => step.substringsAtThisLevel);

            return allSubstrings.map((substring, index) => {
              const isNewlyAdded = index >= previousSubstrings.length;
              return (
                <div
                  key={index}
                  className={clsx(
                    "border px-2 py-1 font-mono text-xs transition-all duration-300",
                    isNewlyAdded
                      ? "border-blue-500 bg-blue-500/20 text-blue-300"
                      : "border-neutral-700 bg-neutral-900 text-neutral-400",
                  )}
                >
                  {substring}
                </div>
              );
            });
          })()}
        </div>
      </div>
    </div>
  );
};

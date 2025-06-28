"use client";

import clsx from "clsx";
import { useState } from "react";
import { Range } from "../Range/Range";
import { DemoButton } from "@/components/DemoButton/DemoButton";

import terminalStyles from "./ChromaticTerminalDemo.module.css";

interface ChromaticTerminalDemoProps {
  initialRedOffset?: number;
  initialBlueOffset?: number;
  initialIntensity?: number;
}

const terminalLines = [
  "ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL",
  "",
  "!!! WARNING: LOCKOUT IMMINENT !!!",
  "",
  "1 ATTEMPT(S) LEFT: ■",
  `0xF964 <{=<(>$$,'}' 0xFA30 ?}/+TERMS('<`,
  `0xF970 $:=:",,!SPIN 0xFA3C '**):>]<*.#T`,
  `0xF994 IRES':=,/:./ 0xFA60 [..HQ.<{[.:/H`,
  "0xFA0C *#*<.$$TRICK 0xFA78 :(||).@@=={.% >PRICE",
  `0xFA08 :*.**%$!@#[$ 0xFA84 ).FRIES:**',# >Entry denied`,
  "0xFA04 <{!:?{**_/Q. 0xFA90 ?+[))<[,,.PR1 >0/5 correct.",
  `0xFA00 +[?]}*<{'}<{ 0xFA9C CE?+//Q$-[:$% >TEXAS`,
  "0xFA0C *GQ:>TRIED%: 0xFAA8 {,*>[[{:.**=) >Entry denied",
  `0xFA08 ]#'%<")-@#%* 0xFAB4 #+**:'@<@>TRI >2/5 correct.`,
  "0xFA04 %()>=:#*%>]{ 0xFAC0 ES}[._{/>TRII >TIRES",
  `0xFA08 +?.**>'%]-*- 0xFACC E[|[TANKS:#*" >Entry denied`,
  "0xFA0C %${*`/:>/{@} 0xFAD8 <THICK:{]TRIB >2/5 correct",
  `0xFA18 SKIES|%)>,^* 0xFAE4 E**}}.<'{.*/]`,
  "0xFA24 :%=>]%**{%[. 0xFAF0 EXAS/**:[{=-[ >TERMS",
];

export default function ChromaticTerminalDemo({
  initialRedOffset = 3,
  initialBlueOffset = -3,
  initialIntensity = 1.2,
}: ChromaticTerminalDemoProps) {
  const [redOffset, setRedOffset] = useState(initialRedOffset);
  const [blueOffset, setBlueOffset] = useState(initialBlueOffset);
  const [intensity, setIntensity] = useState(initialIntensity);

  const presets = [
    { name: "Faded", red: 1, blue: -1, intensity: 0.6 },
    { name: "Retro", red: 3, blue: -3, intensity: 1.2 },
    { name: "Heavy Glitch", red: 5, blue: -5, intensity: 1.4 },
    { name: "Reset", red: 0, blue: -0, intensity: 1 },
  ] as const;

  const applyPreset = (preset: (typeof presets)[0]) => {
    setRedOffset(preset.red);
    setBlueOffset(preset.blue);
    setIntensity(preset.intensity);
  };

  const reset = () => {
    setRedOffset(initialRedOffset);
    setBlueOffset(initialBlueOffset);
    setIntensity(initialIntensity);
  };

  return (
    <div className="my-8 rounded-lg border border-gray-700 bg-gray-950 p-6">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="flex max-w-md flex-1 flex-col gap-4">
          <Range
            id="red-offset-terminal"
            label={`Red Offset: ${redOffset}px`}
            min={-6}
            max={6}
            step={0.5}
            value={redOffset}
            onChange={(e) => setRedOffset(Number(e.target.value))}
          />
          <Range
            id="blue-offset-terminal"
            label={`Blue Offset: ${blueOffset}px`}
            min={-6}
            max={6}
            step={0.5}
            value={blueOffset}
            onChange={(e) => setBlueOffset(Number(e.target.value))}
          />
          <Range
            id="intensity-terminal"
            label={`Intensity: ${intensity.toFixed(1)}`}
            min={0}
            max={2}
            step={0.1}
            value={intensity}
            onChange={(e) => setIntensity(Number(e.target.value))}
          />
        </div>
        <div className="flex flex-wrap gap-2 flex-shrink-0">
          {presets.map((preset) => (
            <DemoButton
              key={preset.name}
              onClick={() => applyPreset(preset)}
              type="button"
              variant={preset.name === "Reset" ? "reset" : "default"}
            >
              {preset.name}
            </DemoButton>
          ))}
        </div>
      </div>

      <div className="bg-green-950 @container/terminal">
        <div className="relative filter-[url('#chromatic-terminal')]">
          <div
            className={clsx(
              "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent opacity-30 pointer-events-none",
              terminalStyles.scanlines,
            )}
          />

          <div className="border-2 border-green-400 ">
            <div className="flex-1 p-5 relative">
              {terminalLines.map((line, index) => (
                <p
                  key={`${line}-${
                    // biome-ignore lint/suspicious/noArrayIndexKey: Static
                    index
                  }`}
                  className="text-green-400 whitespace-pre min-h-[1.3em] leading-[1.3] text-[2.75cqw]  font-mono"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        <svg
          aria-hidden="true"
          className="sr-only"
          height="1"
          viewBox="0 0 1 1"
          width="1"
        >
          <defs>
            <filter id="chromatic-terminal">
              <feOffset in="SourceGraphic" dx={redOffset} dy="0" result="red" />
              <feColorMatrix
                in="red"
                type="matrix"
                values={`${intensity} 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0`}
                result="redChannel"
              />

              <feOffset in="SourceGraphic" dx="0" dy="0" result="green" />
              <feColorMatrix
                in="green"
                type="matrix"
                values={`0 0 0 0 0  0 ${intensity} 0 0 0  0 0 0 0 0  0 0 0 1 0`}
                result="greenChannel"
              />

              <feOffset
                in="SourceGraphic"
                dx={blueOffset}
                dy="-1"
                result="blue"
              />
              <feColorMatrix
                in="blue"
                type="matrix"
                values={`0 0 0 0 0  0 0 0 0 0  0 0 ${intensity} 0 0  0 0 0 1 0`}
                result="blueChannel"
              />

              <feBlend
                in="redChannel"
                in2="greenChannel"
                mode="screen"
                result="redGreen"
              />
              <feBlend in="redGreen" in2="blueChannel" mode="screen" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

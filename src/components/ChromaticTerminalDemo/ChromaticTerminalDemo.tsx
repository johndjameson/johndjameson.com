"use client";

import clsx from "clsx";
import { useState } from "react";
import { Range } from "../Range/Range";
import { DemoButton } from "@/components/DemoButton/DemoButton";
import { ChromaticAberrationFilter } from "@/components/ChromaticAberrationFilter/ChromaticAberrationFilter";

import terminalStyles from "./ChromaticTerminalDemo.module.css";

interface ChromaticTerminalDemoProps {
  initialRedOffset?: number;
  initialBlueOffset?: number;
  initialAlpha?: number;
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
  initialAlpha = 1.2,
}: ChromaticTerminalDemoProps) {
  const [redOffset, setRedOffset] = useState(initialRedOffset);
  const [blueOffset, setBlueOffset] = useState(initialBlueOffset);
  const [alpha, setAlpha] = useState(initialAlpha);

  const presets = [
    { name: "Faded", red: 1, blue: -1, alpha: 0.6 },
    { name: "Retro", red: 3, blue: -3, alpha: 1.2 },
    { name: "Heavy Glitch", red: 5, blue: -5, alpha: 1.4 },
    { name: "Reset", red: 0, blue: -0, alpha: 1 },
  ] as const;

  const applyPreset = (preset: (typeof presets)[number]) => {
    setRedOffset(preset.red);
    setBlueOffset(preset.blue);
    setAlpha(preset.alpha);
  };

  return (
    <div className="my-8 rounded-lg border border-gray-700 bg-gray-950 p-6 grid gap-y-6">
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

        <ChromaticAberrationFilter
          id="chromatic-terminal"
          redX={redOffset}
          redY={0}
          blueX={blueOffset}
          blueY={-1}
          alpha={alpha}
        />
      </div>

      <div className="grid gap-y-4">
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
            id="alpha"
            label={`Alpha: ${alpha}`}
            min={0}
            max={1.5}
            step={0.1}
            value={alpha}
            onChange={(e) => setAlpha(Number.parseFloat(e.target.value))}
          />
        </div>

        <div className="flex flex-wrap gap-2">
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
    </div>
  );
}

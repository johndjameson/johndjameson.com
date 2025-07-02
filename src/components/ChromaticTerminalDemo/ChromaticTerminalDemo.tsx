"use client";

import clsx from "clsx";
import { useState } from "react";
import { Range } from "../Range/Range";
import { DemoButton } from "@/components/DemoButton/DemoButton";
import { ChromaticAberrationFilter } from "@/components/ChromaticAberrationFilter/ChromaticAberrationFilter";

import terminalStyles from "./ChromaticTerminalDemo.module.css";

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
] as const;

export default function ChromaticTerminalDemo() {
  const [redOffset, setRedOffset] = useState(3);
  const [greenOffset, setGreenOffset] = useState(0);
  const [blueOffset, setBlueOffset] = useState(3);

  const presets = [
    { name: "Retro", red: 3, green: 0, blue: -3 },
    { name: "Reset", red: 0, green: 0, blue: 0 },
  ] as const;

  const applyPreset = (preset: (typeof presets)[number]) => {
    setRedOffset(preset.red);
    setGreenOffset(preset.green);
    setBlueOffset(preset.blue);
  };

  return (
    <div className="my-8 grid gap-y-6 rounded-lg border border-gray-700 bg-gray-950 p-6">
      <ChromaticAberrationFilter
        blueX={blueOffset}
        blueY={blueOffset / 4}
        greenX={greenOffset}
        id="chromatic-terminal"
        redX={redOffset}
        redY={redOffset / 4}
      />

      <div className="@container/terminal bg-green-950">
        <div className="relative">
          <div
            className={clsx(
              "filter-[url('#chromatic-terminal')]",
              "pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent opacity-30",
              terminalStyles.scanlines,
            )}
          />

          <div className="border-2 border-green-400">
            <div className="relative flex-1 p-5 filter-[url('#chromatic-terminal')] will-change-[filter]">
              {terminalLines.map((line, index) => (
                <p
                  key={`${line}-${index}`}
                  className="min-h-[1.3em] font-mono text-[2.75cqw] leading-[1.3] whitespace-pre text-green-400"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Range
            id="red-offset"
            label={`Red Offset: ${redOffset}px`}
            min={-10}
            max={10}
            step={0.5}
            value={redOffset}
            onChange={(e) => setRedOffset(e.target.valueAsNumber)}
          />

          <Range
            id="grene-offset"
            label={`Green Offset: ${greenOffset}px`}
            min={-10}
            max={10}
            step={0.5}
            value={greenOffset}
            onChange={(e) => setGreenOffset(e.target.valueAsNumber)}
          />

          <Range
            id="blue-offset"
            label={`Blue Offset: ${blueOffset}px`}
            min={-10}
            max={10}
            step={0.5}
            value={blueOffset}
            onChange={(e) => setBlueOffset(e.target.valueAsNumber)}
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

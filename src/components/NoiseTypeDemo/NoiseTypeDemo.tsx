"use client";

import { useState, useId } from "react";
import { DemoButton } from "../DemoButton/DemoButton";
import { SvgCodePreview } from "../SvgCodePreview/SvgCodePreview";
import { TurbulenceFilter } from "../TurbulenceFilter/TurbulenceFilter";

export const NoiseTypeDemo: React.FC = () => {
  const [type, setType] = useState<"fractalNoise" | "turbulence">("fractalNoise");
  const filterId = useId().replace(/\W/g, "");
  const filterUrl = `url(#${filterId})`;

  return (
    <div className="rounded-xl bg-gray-950 p-6">
      <TurbulenceFilter
        id={filterId}
        baseFrequency={0.12}
        numOctaves={3}
        type={type}
        seed={6}
      />

      <div className="mb-6">
        <div className="mb-4">
          <h3 className="mb-3 text-lg font-medium text-gray-200">
            Side-by-Side Comparison
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="text-center">
              <div
                className="aspect-[3/2] rounded-lg bg-white will-change-[filter] [content-visibility:auto]"
                style={{ filter: "url(#fractal-comparison)" }}
              />
              <p className="mt-2 text-sm font-medium text-gray-300">fractalNoise</p>
              <p className="text-xs text-gray-400">Smooth, flowing patterns</p>
            </div>
            <div className="text-center">
              <div
                className="aspect-[3/2] rounded-lg bg-white will-change-[filter] [content-visibility:auto]"
                style={{ filter: "url(#turbulence-comparison)" }}
              />
              <p className="mt-2 text-sm font-medium text-gray-300">turbulence</p>
              <p className="text-xs text-gray-400">Sharp, chaotic patterns</p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="mb-3 text-lg font-medium text-gray-200">
            Interactive Type Switcher
          </h3>
          <div
            className="aspect-[2/1] rounded-lg bg-white will-change-[filter] [content-visibility:auto]"
            style={{ filter: filterUrl }}
          />
        </div>
      </div>

      <div className="mb-4 flex gap-2">
        <DemoButton
          onClick={() => setType("fractalNoise")}
          variant={type === "fractalNoise" ? "reset" : "default"}
        >
          fractalNoise
        </DemoButton>
        <DemoButton
          onClick={() => setType("turbulence")}
          variant={type === "turbulence" ? "reset" : "default"}
        >
          turbulence
        </DemoButton>
      </div>

      <SvgCodePreview
        code={`<feTurbulence 
  baseFrequency="0.12"
  numOctaves="3"
  type="${type}"
/>`}
      />

      {/* Hidden filters for side-by-side comparison */}
      <TurbulenceFilter
        id="fractal-comparison"
        baseFrequency={0.12}
        numOctaves={3}
        type="fractalNoise"
        seed={6}
      />
      <TurbulenceFilter
        id="turbulence-comparison"
        baseFrequency={0.12}
        numOctaves={3}
        type="turbulence"
        seed={6}
      />
    </div>
  );
};
import { clsx } from "clsx";

interface HeroProps {
  className?: string;
}

export const Hero = ({ className }: HeroProps) => {
  return (
    <div
      className={clsx("relative isolate overflow-hidden rounded", className)}
    >
      <svg className="sr-only" aria-hidden="true">
        <defs>
          <filter id="wiggle" x="0" y="0" width="100%" height="100%">
            <feTurbulence
              baseFrequency={0.01}
              numOctaves={1}
              type="fractalNoise"
              result="turbulence"
            >
              <animate
                attributeName="baseFrequency"
                dur="10s"
                repeatCount="indefinite"
                values="0.01; 0.02; 0.01"
              />
            </feTurbulence>

            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="5"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displace"
            />
            <feBlend in="displace" in2="SourceGraphic" />
          </filter>
        </defs>
      </svg>

      <img
        alt="Alternating lines of the words “John D. Jameson Front-End Engineer”"
        className={clsx(
          "bg-[#2b206d]",
          "motion-safe:filter-[url('#wiggle')] motion-safe:will-change-[filter]",
        )}
        height={600}
        width={1280}
        src="/images/hero.svg"
      />
    </div>
  );
};

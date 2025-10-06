import { clsx } from "clsx";

interface HeroProps {
  className?: string;
}

export const Hero = ({ className }: HeroProps) => {
  return (
    <div className={clsx("overflow-hidden border-8 p-2", className)}>
      <svg className="sr-only" aria-hidden="true">
        <defs>
          <filter id="hero-wiggle">
            <feTurbulence
              baseFrequency={0.02}
              numOctaves={1}
              type="fractalNoise"
              result="turbulence"
            />
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
          "[content-visibility:auto]",
          "filter-[url('#hero-wiggle')] will-change-[filter]",
        )}
        height={600}
        width={1280}
        src="/images/hero.svg"
      />
    </div>
  );
};

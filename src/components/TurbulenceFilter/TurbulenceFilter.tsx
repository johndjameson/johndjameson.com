interface TurbulenceFilterProps {
  baseFrequency?: number | string;
  id: string;
  numOctaves?: number;
  seed?: number;
  type?: "fractalNoise" | "turbulence";
  children?: React.ReactNode;
}

export const TurbulenceFilter: React.FC<TurbulenceFilterProps> = ({
  baseFrequency = 0.1,
  id,
  numOctaves = 3,
  seed = 2,
  type = "fractalNoise",
  children,
}) => (
  <svg aria-hidden="true" className="sr-only" height="0" width="0">
    <defs>
      <filter
        id={id}
        filterUnits="objectBoundingBox"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
      >
        <feTurbulence
          baseFrequency={baseFrequency}
          numOctaves={numOctaves}
          type={type}
          seed={seed}
          result="turbulence"
        />
        {children || (
          <feColorMatrix in="turbulence" type="saturate" values="0" />
        )}
      </filter>
    </defs>
  </svg>
);

interface ChromaticAberrationFilterProps {
  blueBlur?: number;
  blueX?: number;
  blueY?: number;
  greenBlur?: number;
  greenX?: number;
  greenY?: number;
  id: string;
  redBlur?: number;
  redX?: number;
  redY?: number;
}

export const ChromaticAberrationFilter: React.FC<
  ChromaticAberrationFilterProps
> = ({
  blueBlur = 0,
  blueX = 0,
  blueY = 0,
  greenBlur = 0,
  greenX = 0,
  greenY = 0,
  id,
  redBlur = 0,
  redX = 0,
  redY = 0,
}) => (
  <svg
    aria-hidden="true"
    className="sr-only"
    height="1"
    viewBox="0 0 1 1"
    width="1"
  >
    <defs>
      <filter id={id}>
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values={`1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0`}
        />
        <feOffset dx={redX} dy={redY} />
        <feGaussianBlur stdDeviation={redBlur} result="redChannel" />

        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values={`0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0`}
        />
        <feOffset dx={greenX} dy={greenY} />
        <feGaussianBlur stdDeviation={greenBlur} result="greenChannel" />

        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values={`0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0`}
        />
        <feOffset dx={blueX} dy={blueY} />
        <feGaussianBlur stdDeviation={blueBlur} result="blueChannel" />

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
);

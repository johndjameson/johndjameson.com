interface ChromaticAberrationFilterProps {
  id: string;
  redX: number;
  redY?: number;
  blueX: number;
  blueY?: number;
  alpha?: number;
}

export const ChromaticAberrationFilter: React.FC<
  ChromaticAberrationFilterProps
> = ({ blueX, blueY = 0, id, alpha = 1, redX, redY = 0 }) => (
  <svg
    aria-hidden="true"
    className="sr-only"
    height="1"
    viewBox="0 0 1 1"
    width="1"
  >
    <defs>
      <filter id={id}>
        <feOffset in="SourceGraphic" dx={redX} dy={redY} result="red" />
        <feColorMatrix
          in="red"
          type="matrix"
          values={`${alpha} 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0`}
          result="redChannel"
        />

        <feOffset in="SourceGraphic" dx="0" dy="0" result="green" />
        <feColorMatrix
          in="green"
          type="matrix"
          values={`0 0 0 0 0  0 ${alpha} 0 0 0  0 0 0 0 0  0 0 0 1 0`}
          result="greenChannel"
        />

        <feOffset in="SourceGraphic" dx={blueX} dy={blueY} result="blue" />
        <feColorMatrix
          in="blue"
          type="matrix"
          values={`0 0 0 0 0  0 0 0 0 0  0 0 ${alpha} 0 0  0 0 0 1 0`}
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
);

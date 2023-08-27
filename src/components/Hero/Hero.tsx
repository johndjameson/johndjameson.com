import { useMemo } from "react";
import heroStyles from "@/components/Hero/Hero.module.css";

type HeroProps = {
  children: string;
};

function Hero({ children }: HeroProps) {
  const memoString = useMemo(() => {
    let string = children || "Hero";

    while (string.length < 100) {
      string += ` ${string}`;
    }

    return string;
  }, [children]);

  return (
    <div aria-hidden="true" className={heroStyles.container}>
      <div className={heroStyles.content}>
        {Array.from({ length: 16 }).map((_value, index) => (
          <p
            className={heroStyles.line}
            key={index}
            style={{ translate: `${index * 3}%` }}
          >
            {memoString}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Hero;

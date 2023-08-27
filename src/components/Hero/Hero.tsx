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
        <div className={heroStyles.lines}>
          {Array.from({ length: 16 }).map((_value, index) => (
            <p
              className={heroStyles.line}
              key={index}
              style={{
                fontSize: `${(index % 2 ? 4 : 8) + Math.random() * 3}cqw`,
                translate: `${index * 3}%`,
              }}
            >
              {memoString}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;

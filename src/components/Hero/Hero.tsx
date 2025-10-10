import { clsx } from "clsx";

interface HeroProps {
  className?: string;
}

export const Hero = ({ className }: HeroProps) => {
  return (
    <div className={clsx("overflow-hidden border-8 p-2", className)}>
      <img
        alt="Alternating lines of the words “John D. Jameson Front-End Engineer”"
        className="dark:invert"
        height={600}
        width={1280}
        src="/images/hero.svg"
      />
    </div>
  );
};

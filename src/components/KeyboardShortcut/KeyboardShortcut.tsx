import { clsx } from "clsx";

export const KeyboardShortcut = (
  props: React.ComponentPropsWithoutRef<"kbd">,
) => {
  const { className, ...forwardProps } = props;

  return (
    <kbd
      {...forwardProps}
      className={clsx(
        "relative -top-[0.1em] inline-flex border bg-neutral-950 px-1 py-0.25 text-[0.85em] text-white",
        className,
      )}
    />
  );
};

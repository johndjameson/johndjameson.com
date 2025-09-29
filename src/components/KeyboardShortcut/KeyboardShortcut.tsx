import { clsx } from "clsx";

export const KeyboardShortcut = (
  props: React.ComponentPropsWithoutRef<"kbd">,
) => {
  const { className, ...forwardProps } = props;

  return (
    <kbd
      {...forwardProps}
      className={clsx(
        "rounded-md border border-[rgb(230_225_233)] px-1 py-0.5 text-[0.875em]",
        className,
      )}
    />
  );
};

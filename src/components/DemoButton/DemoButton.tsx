"use client";

import clsx from "clsx";

interface DemoButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "reset";
}

export const DemoButton: React.FC<DemoButtonProps> = ({
  className = "",
  type = "button",
  variant = "default",
  ...moreProps
}) => (
  <button
    className={clsx(
      "inline-flex cursor-pointer items-center gap-x-1 border px-4 py-2 text-sm font-medium transition-all duration-200",
      variant === "default" &&
        "border-neutral-600 bg-neutral-800 text-white hover:border-neutral-500 hover:bg-neutral-700",
      variant === "reset" &&
        "border-neutral-400 bg-neutral-200 text-neutral-800 hover:border-neutral-500 hover:bg-neutral-300",
      className,
    )}
    type={type}
    {...moreProps}
  />
);

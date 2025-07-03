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
      "inline-flex cursor-pointer items-center gap-x-1 rounded border px-4 py-2 text-sm font-medium transition-all duration-200",
      variant === "default" &&
        "border-gray-600 bg-gray-800 text-white hover:border-gray-500 hover:bg-gray-700",
      variant === "reset" &&
        "border-gray-400 bg-gray-200 text-gray-800 hover:border-gray-500 hover:bg-gray-300",
      className,
    )}
    type={type}
    {...moreProps}
  />
);

import a11yProps from "@/helpers/a11yProps";
import Link from "next/link";

import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";
import { clsx } from "clsx";
import DynamicLink from "@/components/DynamicLink/DynamicLink";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header
      className={clsx(
        "px-container-w sticky top-0 flex w-full border-b-2 border-b-black bg-neutral-50",
        "dark:border-b-neutral-50 dark:bg-black",
        className,
      )}
    >
      <nav className="flex w-full border-x-2 pl-4">
        <div
          className={clsx(
            "flex shrink-0 items-center border-r-2 border-neutral-950 py-3 pr-4",
            "md:py-4",
          )}
        >
          <Link href="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <svg
              className="size-10 dark:invert"
              height="50"
              viewBox="0 0 80 80"
              width="50"
              {...a11yProps.svg}
            >
              <path
                d="M0 0v80h80V0H0zm26.237 62.806c.746 0 1.392-.054 1.939-.162.547-.108.99-.29 1.33-.547.34-.257.609-.518.808-.783.199-.265.344-.646.435-1.143.091-.497.145-.932.162-1.305a38 38 0 0 0 .025-1.603h-4.698v-9.098h12.678c.398 2.569.597 4.864.597 6.886 0 4.607-1.077 7.984-3.232 10.13-2.154 2.146-5.502 3.219-10.043 3.219v-5.593zm16.58 0c.746 0 1.392-.054 1.939-.162.547-.108.99-.29 1.33-.547.34-.257.609-.518.808-.783.199-.265.344-.646.435-1.143.091-.497.145-.932.162-1.305a38 38 0 0 0 .025-1.603h-4.698v-9.098h12.678c.398 2.569.597 4.864.597 6.886 0 4.607-1.077 7.984-3.232 10.13-2.154 2.146-5.502 3.219-10.043 3.219v-5.593z"
                fill="var(--jdj-color-header-logo-fill)"
              />
            </svg>
          </Link>
        </div>

        <div className="flex grow flex-col">
          <div
            className={clsx(
              "flex h-6 items-center border-b-2 border-neutral-950 py-3 pl-4",
              "md:py-4",
            )}
          >
            <p className="text-xs font-bold">
              John D. Jameson | Software Engineer
            </p>
          </div>

          <div className="flex grow items-center gap-x-8 pl-4">
            <DynamicLink
              aria-label="LinkedIn"
              className="transition hover:scale-110 active:scale-105"
              href="https://www.linkedin.com/in/johndjameson"
            >
              <FaLinkedin size={24} />
            </DynamicLink>
            <DynamicLink
              aria-label="GitHub"
              className="transition hover:scale-110 active:scale-105"
              href="https://github.com/johndjameson"
            >
              <FaGithub size={24} />
            </DynamicLink>
            <DynamicLink
              aria-label="X (Twitter)"
              className="transition hover:scale-110 active:scale-105"
              href="https://x.com/johndjameson"
            >
              <FaXTwitter size={24} />
            </DynamicLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

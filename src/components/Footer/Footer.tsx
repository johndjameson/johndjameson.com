import DynamicLink from "@/components/DynamicLink/DynamicLink";
import { clsx } from "clsx";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className={clsx(
        "px-container-w bg-neutral-950 py-12",
        "md:py-16",
        "dark:bg-black",
      )}
    >
      <div
        className={clsx(
          "grid gap-x-4 border-2 border-neutral-50 bg-neutral-50 bg-clip-content p-1 text-neutral-950",
          "md:grid-cols-6",
          "dark:border-neutral-50 dark:bg-neutral-950 dark:text-neutral-50",
        )}
      >
        <div className="flex flex-col px-4 py-10 md:col-span-4 md:col-start-2 md:px-0">
          <p className="mb-8 text-sm text-pretty sm:text-lg md:text-xl">
            <strong className="font-bold">John D. Jameson</strong> is a
            front-end engineer in Austin, TX, with 12+ years of hands-on
            experience building web applications at companies ranging from
            startups to Amazon.
          </p>

          <p
            className={clsx(
              "mb-12 border-2 border-black p-6 text-center text-sm",
              "sm:text-base",
              "md:text-lg",
              "dark:border-neutral-50",
            )}
          >
            Want to reach out? Let’s connect on{" "}
            <DynamicLink
              className="group/link inline-flex items-center gap-x-1 font-medium underline underline-offset-3 transition-colors"
              href="https://www.linkedin.com/in/johndjameson"
            >
              <FaLinkedin
                className="relative transition group-hover/link:scale-110 max-sm:-top-[0.2em]"
                size={24}
              />{" "}
              <span className="self-baseline">LinkedIn</span>
            </DynamicLink>
          </p>

          <div className="flex space-x-6">
            <DynamicLink
              className="transition hover:scale-110 active:scale-105"
              href="https://www.linkedin.com/in/johndjameson"
            >
              <FaLinkedin size={32} />
            </DynamicLink>

            <a
              href="https://github.com/johndjameson"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:scale-110 active:scale-105"
              aria-label="GitHub"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://x.com/johndjameson"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:scale-110 active:scale-105"
              aria-label="X (Twitter)"
            >
              <FaXTwitter size={32} />
            </a>
          </div>
        </div>{" "}
      </div>
    </footer>
  );
}

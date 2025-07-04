import DynamicLink from "@/components/DynamicLink/DynamicLink";
import { clsx } from "clsx";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className={clsx(
        "px-container-w-narrow bg-indigo-900 py-12 text-indigo-50",
        "md:py-16",
      )}
    >
      <div className="flex flex-col md:items-center">
        <div className="mb-12 text-pretty md:text-center">
          <p className="mb-8 text-lg text-white md:text-xl">
            <strong className="font-bold">John D. Jameson</strong> is a
            front-end engineer in Austin, TX, with 12+ years of hands-on
            experience building web applications at companies ranging from
            startups to Amazon.
          </p>

          <p className="rounded-xl bg-indigo-50 px-4 py-6 text-black md:text-lg">
            Want to reach out? Let’s connect on{" "}
            <DynamicLink
              className="inline-flex gap-x-1 font-medium text-[#0a66c2] underline underline-offset-3 transition-colors"
              href="https://www.linkedin.com/in/johndjameson"
            >
              <FaLinkedin className="self-center" size={24} />{" "}
              <span className="self-baseline">LinkedIn</span>
            </DynamicLink>
            .
          </p>
        </div>

        <div className="flex space-x-6">
          <DynamicLink
            className="text-white transition-colors hover:text-indigo-400"
            href="https://www.linkedin.com/in/johndjameson"
          >
            <FaLinkedin size={32} />
          </DynamicLink>

          <a
            href="https://github.com/johndjameson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors hover:text-indigo-400"
            aria-label="GitHub"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://x.com/johndjameson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors hover:text-indigo-400"
            aria-label="X (Twitter)"
          >
            <FaXTwitter size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
}

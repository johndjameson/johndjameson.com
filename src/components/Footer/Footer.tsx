import DynamicLink from "@/components/DynamicLink/DynamicLink";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-slate-300 bg-slate-100">
      <div className="px-container-w-narrow py-12">
        <div className="flex flex-col space-y-6 md:items-center">
          <div className="mb-6 text-pretty md:text-center">
            <p className="mb-2 text-slate-700">
              John D. Jameson is a front-end engineer in Austin, TX, with 12+
              years of hands-on experience building web applications at
              companies ranging from startups to Amazon.
            </p>

            <p className="text-slate-700">
              Want to reach out? Let’s connect on{" "}
              <DynamicLink
                className="font-medium text-slate-700 underline transition-colors hover:text-slate-900"
                href="https://www.linkedin.com/in/johndjameson"
              >
                LinkedIn
              </DynamicLink>
              .
            </p>
          </div>

          <div className="flex space-x-6">
            <DynamicLink
              className="text-slate-700 transition-colors hover:text-slate-900"
              href="https://www.linkedin.com/in/johndjameson"
            >
              <FaLinkedin size={24} />
            </DynamicLink>

            <a
              href="https://github.com/johndjameson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 transition-colors hover:text-slate-900"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://x.com/johndjameson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 transition-colors hover:text-slate-900"
              aria-label="X (Twitter)"
            >
              <FaXTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";
import {
  generateBlueskyShareUrl,
  generateLinkedInShareUrl,
  generateXShareUrl,
} from "@/helpers/socialShare";
import DynamicLink from "@/components/DynamicLink/DynamicLink";
import { useMemo } from "react";
import { clsx } from "clsx";

interface SocialShareProps {
  title: string;
  href: string;
}

export function SocialShare({ href, title }: SocialShareProps) {
  const { blueskyUrl, linkedinUrl, xUrl } = useMemo(
    () => ({
      blueskyUrl: generateBlueskyShareUrl({
        href,
        text: title,
        via: "johndjameson.com",
      }),
      linkedinUrl: generateLinkedInShareUrl({ href, text: title }),
      xUrl: generateXShareUrl({
        href,
        text: title,
        via: "johndjameson",
      }),
    }),
    [href, title],
  );

  return (
    <div className="flex items-center gap-3">
      <DynamicLink
        aria-label="Share on LinkedIn"
        className={clsx(
          "flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 transition-colors",
          "hover:bg-blue-700",
        )}
        href={linkedinUrl}
      >
        <FaLinkedin className="h-5 w-5 text-white" />
      </DynamicLink>
      <DynamicLink
        aria-label="Share on X"
        className={clsx(
          "flex h-10 w-10 items-center justify-center rounded-full bg-black transition-colors",
          "hover:bg-gray-800",
        )}
        href={xUrl}
      >
        <FaXTwitter className="h-5 w-5 text-white" />
      </DynamicLink>
      <DynamicLink
        aria-label="Share on Bluesky"
        className={clsx(
          "flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 transition-colors",
          "hover:bg-sky-600",
        )}
        href={blueskyUrl}
      >
        <SiBluesky className="h-5 w-5 text-white" />
      </DynamicLink>
    </div>
  );
}

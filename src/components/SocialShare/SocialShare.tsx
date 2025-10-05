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
          "flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 transition hover:scale-110",
          "hover:bg-blue-600",
        )}
        href={linkedinUrl}
      >
        <FaLinkedin className="h-5 w-5 text-white" />
      </DynamicLink>
      <DynamicLink
        aria-label="Share on X"
        className={clsx(
          "flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 transition hover:scale-110",
        )}
        href={xUrl}
      >
        <FaXTwitter className="h-5 w-5 text-white" />
      </DynamicLink>
      <DynamicLink
        aria-label="Share on Bluesky"
        className={clsx(
          "flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 transition hover:scale-110",
          "hover:bg-sky-500",
        )}
        href={blueskyUrl}
      >
        <SiBluesky className="h-5 w-5 text-white" />
      </DynamicLink>
    </div>
  );
}

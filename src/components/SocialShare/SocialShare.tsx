import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";
import {
  generateBlueskyShareUrl,
  generateLinkedInShareUrl,
  generateXShareUrl,
} from "@/helpers/socialShare";
import DynamicLink from "@/components/DynamicLink/DynamicLink";
import { memo } from "react";
import { clsx } from "clsx";

interface SocialShareProps {
  title: string;
  href: string;
}

export const SocialShare = memo(function SocialShare({
  href,
  title,
}: SocialShareProps) {
  const sites = [
    {
      icon: FaLinkedin,
      label: "Share on LinkedIn",
      url: generateLinkedInShareUrl({ href, text: title }),
    },
    {
      icon: FaXTwitter,
      label: "Share on X",
      url: generateXShareUrl({
        href,
        text: title,
        via: "johndjameson",
      }),
    },
    {
      icon: SiBluesky,
      label: "Share on Bluesky",
      url: generateBlueskyShareUrl({
        href,
        text: title,
        via: "johndjameson.com",
      }),
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {sites.map((site) => (
        <DynamicLink
          aria-label={site.label}
          className={clsx(
            "flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 transition",
            "dark:bg-neutral-50",
            "hover:scale-110",
          )}
          key={site.url}
          href={site.url}
        >
          <site.icon
            className={clsx("h-5 w-5 text-neutral-50", "dark:text-neutral-950")}
          />
        </DynamicLink>
      ))}
    </div>
  );
});

interface BlueSkyShareParams {
  href: string;
  text: string;
  via: string;
}

interface LinkedInShareParams {
  href: string;
  text: string;
}

interface XShareParams {
  href: string;
  text: string;
  via: string;
}

export function generateBlueskyShareUrl({
  href,
  text,
  via,
}: BlueSkyShareParams): string {
  const url = new URL("https://bsky.app/intent/compose");
  url.searchParams.append("text", `${text} ${href} via @${via}`);

  return url.toString();
}

export const generateLinkedInShareUrl = ({
  href,
  text,
}: LinkedInShareParams): string => {
  const url = new URL("https://www.linkedin.com/feed/");
  url.searchParams.append("shareActive", "true");
  url.searchParams.append("shareUrl", href);
  url.searchParams.append("text", text);

  return url.toString();
};

export const generateXShareUrl = ({
  href,
  text,
  via,
}: XShareParams): string => {
  const url = new URL("https://x.com/intent/post");
  url.searchParams.append("text", text);
  url.searchParams.append("url", href);

  if (via) {
    url.searchParams.append("via", via);
  }

  return url.toString();
};

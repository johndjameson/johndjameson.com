import Link from "next/link";

const DynamicLink = (props: React.ComponentPropsWithoutRef<"a">) => {
  if (!props.href) {
    throw new Error("Link is missing an `href` attribute");
  }

  return props.href.startsWith("http") ? (
    <a {...props} rel="noopener noreferrer" target="_blank" />
  ) : (
    <Link {...props} href={props.href} />
  );
};

export default DynamicLink;

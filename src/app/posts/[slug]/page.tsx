import ChromaticAberrationDemo from "@/components/ChromaticAberrationDemo/ChromaticAberrationDemo";
import { ChromaticAberrationFilter } from "@/components/ChromaticAberrationFilter/ChromaticAberrationFilter";
import ChromaticShapesDemo from "@/components/ChromaticShapesDemo/ChromaticShapesDemo";
import ChromaticTerminalDemo from "@/components/ChromaticTerminalDemo/ChromaticTerminalDemo";
import CodePen from "@/components/CodePen/CodePen";
import DynamicLink from "@/components/DynamicLink/DynamicLink";
import { KeyboardShortcut } from "@/components/KeyboardShortcut/KeyboardShortcut";
import { SocialShare } from "@/components/SocialShare/SocialShare";
import SyntaxHighlighter from "@/components/SyntaxHighlighter/SyntaxHighlighter";
import { ColorMatrixControls } from "@/components/ColorMatrixControls/ColorMatrixControls";
import { ColorMatrixDemo } from "@/components/ColorMatrixDemo/ColorMatrixDemo";
import { HueRotateDemo } from "@/components/HueRotateDemo/HueRotateDemo";
import { LuminanceToAlphaDemo } from "@/components/LuminanceToAlphaDemo/LuminanceToAlphaDemo";
import { SaturationDemo } from "@/components/SaturationDemo/SaturationDemo";
import { clsx } from "clsx";
import { type Post, allPosts } from "contentlayer/generated";
import { format, parseISO, addHours } from "date-fns";
import type { MDXComponents } from "mdx/types";
import type { Metadata } from "next";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { CSSProperties, use } from "react";
import { FaTriangleExclamation } from "react-icons/fa6";
import slugify from "slugify";

type Heading = "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = React.ComponentPropsWithoutRef<Heading> & {
  level: Heading;
};

const Heading = (props: HeadingProps) => {
  const { level, ...forwardProps } = props;
  const { children, className } = props;
  const Tag = level;

  if (typeof children !== "string") {
    throw new Error("Heading children are not of type string");
  }

  return (
    <Tag
      {...forwardProps}
      className={clsx(
        "font-heading mt-8 mb-4 font-bold text-[rgb(107_95_232)] md:mt-12 md:mb-6",
        className,
      )}
      id={slugify(children, { lower: true })}
    />
  );
};

const mdxComponents: MDXComponents = {
  a: (props) => (
    <DynamicLink
      {...props}
      className={clsx(
        "font-medium underline transition hover:text-[rgb(223_0_151)]",
        "motion-safe:hover:filter-[url('#link-wiggle')]",
      )}
    />
  ),
  ChromaticAberrationDemo,
  ChromaticAberrationFilter,
  ChromaticShapesDemo,
  ChromaticTerminalDemo,
  ColorMatrixControls,
  ColorMatrixDemo,
  KeyboardShortcut,
  HueRotateDemo,
  LuminanceToAlphaDemo,
  SaturationDemo,
  code: (props) => {
    return (
      <code
        {...props}
        className={clsx(
          props.className,
          "rounded-md border border-[rgb(230_225_233)] px-1 py-0.5 text-[0.875em]",
        )}
      />
    );
  },
  CodePen,
  h1: () => {
    throw new Error("Don’t put an h1 in Markdown content");
  },
  h2: (props) => (
    <Heading
      {...props}
      className="text-2xl text-pretty md:text-3xl"
      level="h2"
    />
  ),
  h3: (props) => (
    <Heading
      {...props}
      className="text-xl text-pretty md:text-2xl"
      level="h3"
    />
  ),
  h4: (props) => (
    <Heading {...props} className="text-lg text-pretty md:text-xl" level="h4" />
  ),
  h5: (props) => (
    <Heading
      {...props}
      className="text-base text-pretty md:text-lg"
      level="h5"
    />
  ),
  h6: (props) => (
    <Heading
      {...props}
      className="text-sm text-pretty md:text-base"
      level="h6"
    />
  ),
  iframe: (props) => (
    <iframe {...props} className="aspect-video h-auto w-full" />
  ),
  img: ({ alt, ...forwardProps }) => (
    // biome-ignore lint/a11y/useAltText: Provided with alt attribute
    <img
      alt={alt}
      className="mx-auto block rounded-lg border border-slate-200 p-2 lg:-ml-2"
      decoding="async"
      loading="lazy"
      {...forwardProps}
    />
  ),
  li: (props) => <li {...props} className="mb-1" />,
  ol: (props) => <ol {...props} className="list-decimal pl-8 md:pl-10" />,
  p: (props) => <p {...props} className="text-pretty" />,
  // biome-ignore lint/suspicious/noExplicitAny: <pre> elements are code blocks handled by SyntaxHighlighter
  pre: SyntaxHighlighter as React.ComponentType<any>,
  ul: (props) => <ul {...props} className="list-disc pl-8 md:pl-10" />,
};

export const generateStaticParams = async () =>
  allPosts.map((post: Post) => ({ slug: post.slug }));

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const params = await props.params;
  const post = allPosts.find((post: Post) => post.slug === params.slug);

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return {
    description: post.description,
    title: `${post.title} | John D. Jameson`,
    robots: {
      index: !post.development,
    },
  } satisfies Metadata;
};

const PostLayout = (props: { params: Promise<{ slug: string }> }) => {
  const params = use(props.params);
  const post = allPosts.find((post: Post) => post.slug === params.slug);

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  const MDXContent = useMDXComponent(post.body.code);
  const postUrl = `${process.env.NEXT_PUBLIC_BASE_URL || "https://johndjameson.com"}/posts/${post.slug}`;

  return (
    <article className="px-container-w-narrow">
      <svg aria-hidden={true} className="sr-only">
        <defs>
          <filter id="post-wiggle-static">
            <feTurbulence
              baseFrequency={0.01}
              numOctaves={1}
              type="fractalNoise"
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="20"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div className={clsx("@container/post-header mt-10 mb-8", "md:mt-16")}>
        <h1
          className={clsx(
            "font-heading mb-4 text-[size:var(--post-title-size)] leading-[0.8] font-black text-pretty text-[rgb(107_95_232)]",
            "text-shadow-[0px_-2px_0_oklch(0.66_0.2_283.35),var(--post-shadow)]",
            "first-line:text-[rgb(253_64_192)] first-line:text-shadow-[0px_-2px_0_oklch(0.78_0.22_342.82),var(--post-shadow)]",
            "filter-[url('#post-wiggle-static')]",
          )}
          style={
            {
              "--post-shadow": "0px 2px 0 black",
              "--post-title-size": post.titleSize
                ? `${post.titleSize}cqw`
                : "16cqw",
            } as CSSProperties
          }
        >
          {post.title}
        </h1>
        <p className="text-sm">
          Published{" "}
          <time dateTime={post.date}>
            {format(addHours(parseISO(post.date), 6), "LLLL d, yyyy")}
          </time>
        </p>
      </div>

      {post.archived && (
        <div
          className="mb-6 flex items-center gap-x-4 rounded-xl bg-amber-100 p-5 text-pretty text-amber-950 md:gap-x-6 md:px-8 md:py-6"
          role="note"
        >
          <FaTriangleExclamation className="shrink-0" size={24} />
          <p className="text-base md:text-lg">
            This post is archived and probably super out of date. Don’t say I
            didn’t warn you!
          </p>
        </div>
      )}

      <div
        className={clsx(
          "pb-4 text-base *:mb-4",
          "sm:text-lg/[1.5]",
          "md:pb-6 md:text-xl/[1.5] md:*:mb-6",
        )}
      >
        <MDXContent components={mdxComponents} />
      </div>

      <div className={clsx("mb-12", "md:mb-16")}>
        <div
          className={clsx(
            "flex items-center justify-center gap-x-2 p-4 py-8",
            "rounded-xl",
            "bg-linear-to-br/oklch from-violet-50 to-violet-100",
          )}
        >
          <p className="font-medium text-slate-700 select-none">
            Share this post
          </p>
          <SocialShare href={postUrl} title={post.title} />
        </div>
      </div>
    </article>
  );
};

export default PostLayout;

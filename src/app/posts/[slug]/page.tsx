import ChromaticAberrationDemo from "@/components/ChromaticAberrationDemo/ChromaticAberrationDemo";
import { ChromaticAberrationFilter } from "@/components/ChromaticAberrationFilter/ChromaticAberrationFilter";
import ChromaticShapesDemo from "@/components/ChromaticShapesDemo/ChromaticShapesDemo";
import ChromaticTerminalDemo from "@/components/ChromaticTerminalDemo/ChromaticTerminalDemo";
import CodePen from "@/components/CodePen/CodePen";
import DynamicLink from "@/components/DynamicLink/DynamicLink";
import SyntaxHighlighter from "@/components/SyntaxHighlighter/SyntaxHighlighter";
import clsx from "clsx";
import { type Post, allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import type { MDXComponents } from "mdx/types";
import type { Metadata } from "next";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { use } from "react";
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
      className="font-medium text-[rgb(223_0_151)] underline transition hover:text-[rgb(170_0_115)]"
    />
  ),
  ChromaticAberrationDemo,
  ChromaticAberrationFilter,
  ChromaticShapesDemo,
  ChromaticTerminalDemo,
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
    <Heading {...props} className="text-2xl md:text-3xl" level="h2" />
  ),
  h3: (props) => (
    <Heading {...props} className="text-xl md:text-2xl" level="h3" />
  ),
  h4: (props) => (
    <Heading {...props} className="text-lg md:text-xl" level="h4" />
  ),
  h5: (props) => (
    <Heading {...props} className="text-base md:text-lg" level="h5" />
  ),
  h6: (props) => (
    <Heading {...props} className="text-sm md:text-base" level="h6" />
  ),
  iframe: (props) => (
    <iframe {...props} className="aspect-video h-auto w-full" />
  ),
  img: ({ alt, ...forwardProps }) => (
    // biome-ignore lint/a11y/useAltText: Provided with alt attribute
    <img
      alt={alt}
      className="mx-auto block"
      decoding="async"
      loading="lazy"
      {...forwardProps}
    />
  ),
  li: (props) => <li {...props} className="mb-1" />,
  ol: (props) => <ol {...props} className="list-decimal pl-8 md:pl-10" />,
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

  return (
    <article className="px-container-w-narrow">
      <div className="mt-10 mb-8">
        <h1
          className={clsx(
            "font-heading mb-4 text-5xl/[0.95] font-black text-pretty text-[rgb(107_95_232)]",
            "sm:text-5xl/[0.95]",
            "md:text-6xl/[0.95]",
            "lg:text-7xl/[0.95]",
            "first-line:text-[rgb(253_64_192)]",
          )}
        >
          {post.title}
        </h1>
        <p className="text-sm">
          Published{" "}
          <time dateTime={post.date}>
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </p>
      </div>

      <div
        className={clsx(
          "pb-20 text-base *:mb-4",
          "sm:text-lg/[1.5]",
          "md:pb-28 md:text-xl/[1.5] md:*:mb-6",
        )}
      >
        <MDXContent components={mdxComponents} />
      </div>
    </article>
  );
};

export default PostLayout;

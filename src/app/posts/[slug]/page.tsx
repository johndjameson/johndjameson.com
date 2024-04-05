import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import { useMDXComponent } from "next-contentlayer2/hooks";
import CodePen from "@/components/CodePen/CodePen";
import DynamicLink from "@/components/DynamicLink/DynamicLink";
import postStyles from "@/app/posts/[slug]/_post.module.css";
import slugify from "slugify";
import SyntaxHighlighter from "@/components/SyntaxHighlighter/SyntaxHighlighter";
import type { MDXComponents } from "mdx/types";
import clsx from "clsx";

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
        "mb-4 mt-8 font-heading font-bold  text-[rgb(107_95_232)] md:mb-6 md:mt-12",
        className,
      )}
      id={slugify(children, { lower: true })}
    />
  );
};

const mdxComponents: MDXComponents = {
  a: DynamicLink,
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
  pre: SyntaxHighlighter as any, // TODO: Fix this any
};

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slug }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return {
    description: post.description,
    title: `${post.title} | John D. Jameson`,
    robots: {
      index: !post.development,
    },
  } satisfies Metadata;
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="px-container-w-narrow">
      <div className={postStyles.container}>
        <div className="mb-8 mt-10">
          <h1 className="mb-4 text-balance font-heading text-5xl/[0.95] font-black text-[rgb(107_95_232)] first-line:text-[rgb(253_64_192)] sm:text-6xl/[0.95] md:text-7xl/[0.95] lg:text-[84px]/[0.95]">
            {post.title}
          </h1>
          <p className="text-sm">
            Published{" "}
            <time dateTime={post.date}>
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
          </p>
        </div>

        <div className={postStyles.content}>
          <MDXContent components={mdxComponents} />
        </div>
      </div>
    </article>
  );
};

export default PostLayout;

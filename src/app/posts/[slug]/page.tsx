import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import CodePen from "@/components/CodePen/CodePen";
import DynamicLink from "@/components/DynamicLink/DynamicLink";
import postStyles from "@/app/posts/[slug]/_post.module.css";
import slugify from "slugify";
import SyntaxHighlighter from "@/components/SyntaxHighlighter/SyntaxHighlighter";
import type { MDXComponents } from "mdx/types";

type Heading = "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = React.ComponentPropsWithoutRef<Heading> & {
  level: Heading;
};

const Heading = (props: HeadingProps) => {
  const { level, ...forwardProps } = props;
  const { children } = props;
  const Tag = level;

  if (typeof children !== "string") {
    throw new Error("Heading children are not of type string");
  }

  return <Tag {...forwardProps} id={slugify(children, { lower: true })} />;
};

const mdxComponents: MDXComponents = {
  a: DynamicLink,
  CodePen,
  h1: () => {
    throw new Error("Don’t put an h1 in Markdown content");
  },
  h2: (props) => <Heading {...props} level="h2" />,
  h3: (props) => <Heading {...props} level="h3" />,
  h4: (props) => <Heading {...props} level="h4" />,
  h5: (props) => <Heading {...props} level="h5" />,
  h6: (props) => <Heading {...props} level="h6" />,
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
    <article className={postStyles.cell}>
      <div className={postStyles.container}>
        <div className={postStyles.header}>
          <h1 className={postStyles.title}>{post.title}</h1>
          <p>
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

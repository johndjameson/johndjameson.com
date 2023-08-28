import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import CodePen from "@/components/CodePen/CodePen";
import postStyles from "@/app/posts/[slug]/_post.module.css";
import SyntaxHighlighter from "@/components/SyntaxHighlighter/SyntaxHighlighter";
import type { MDXComponents } from "mdx/types";

const mdxComponents: MDXComponents = {
  CodePen,
  pre: SyntaxHighlighter as any, // TODO: Fix this any
};

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return {
    description: post.description,
    title: post.title,
    robots: {
      index: !post.development,
    },
  } satisfies Metadata;
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

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

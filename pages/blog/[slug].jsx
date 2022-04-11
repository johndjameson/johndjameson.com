import CodePen from 'components/CodePen/CodePen';
import Head from 'next/head';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

function Post({ frontMatter: { title }, mdxSource }) {
  return (
    <>
      <Head>
        <title>{title} | John D. Jameson</title>
      </Head>

      <article>
        <h1>{title}</h1>
        <MDXRemote components={{ CodePen }} {...mdxSource} />
      </article>
    </>
  );
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return {
    fallback: false,
    paths,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.mdx'),
    'utf-8'
  );

  const { content, data: frontMatter } = matter(markdownWithMeta);

  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      mdxSource,
      slug,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default Post;

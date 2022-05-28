import CodePen from 'components/CodePen/CodePen';
import Container from 'components/Container/Container';
import Head from 'next/head';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

function Post({ frontMatter: { date, title }, mdxSource }) {
  return (
    <>
      <Head>
        <title>{title} | John D. Jameson</title>
      </Head>

      <Container as="article">
        <h1>{title}</h1>

        <time dateTime={date} sx={{ display: 'block' }}>
          {date}
        </time>

        <MDXRemote components={{ CodePen }} {...mdxSource} />
      </Container>
    </>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files
    .filter((filename) => ['.md', '.mdx'].includes(path.extname(filename)))
    .map((filename) => ({
      params: {
        slug: filename.replace(/\.mdx?/, ''),
      },
    }));

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
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

export default Post;

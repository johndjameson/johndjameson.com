/** @jsxImportSource theme-ui */
import CodePen from 'components/CodePen/CodePen';
import Container from 'components/Container/Container';
import Head from 'next/head';
import PreventOrphan from 'components/PreventOrphan/PreventOrphan';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { BaseStyles } from 'theme-ui';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

function Post({ frontMatter: { date, title }, mdxSource }) {
  return (
    <>
      <Head>
        <title>{title} | John D. Jameson</title>
      </Head>

      <Container
        as="article"
        sx={{
          paddingBottom: [6, 8, 10],
          paddingTop: [4, null, 6, null, 8],
        }}
        width="narrow"
      >
        <PreventOrphan
          as="h1"
          sx={{ fontSize: [5, 6, 7], fontWeight: 'bold', marginBottom: 1 }}
        >
          {title}
        </PreventOrphan>

        <p sx={{ marginBottom: 3 }}>
          Published <time dateTime={date}>{date}</time>
        </p>

        <BaseStyles>
          <MDXRemote components={{ CodePen }} {...mdxSource} />
        </BaseStyles>
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

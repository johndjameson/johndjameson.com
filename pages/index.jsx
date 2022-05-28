/** @jsxImportSource theme-ui */
import Container from 'components/Container/Container';
import Head from 'next/head';
import Hero from 'components/Hero/Hero';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

function Home({ posts }) {
  return (
    <>
      <Head>
        <title>John D. Jameson | Front-End Engineer</title>
      </Head>

      <Hero />

      <h1 className="visually-hidden">John D. Jameson, Front-End Engineer</h1>

      <Container
        sx={{ paddingBottom: [6, 8, 10], paddingTop: [4, null, 6, null, 8] }}
        width="narrow"
      >
        <h2 sx={{ fontSize: 4, fontWeight: 'semibold', marginBottom: 3 }}>
          Posts
        </h2>
        <ul>
          {posts.map((post) => (
            <li key={post.frontMatter.title} sx={{ marginBottom: 4 }}>
              <a
                href={`blog/${post.slug}`}
                sx={{
                  display: 'block',
                  fontSize: 3,
                  lineHeight: 'heading',
                  marginBottom: 1,
                  width: 'max-content',

                  '&:hover': {
                    textDecorationLine: 'underline',
                  },
                }}
              >
                {post.frontMatter.title}
              </a>
              <p>{post.frontMatter.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files
    .filter((filename) => ['.md', '.mdx'].includes(path.extname(filename)))
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join('posts', filename),
        'utf-8'
      );

      const { data: frontMatter } = matter(markdownWithMeta);

      return {
        frontMatter,
        slug: filename.replace('.mdx', ''),
      };
    })
    .sort((a, b) => {
      if (a.frontMatter.date > b.frontMatter.date) {
        return -1;
      } else if (a.frontMatter.date < b.frontMatter.date) {
        return 1;
      }

      return 0;
    });

  return {
    props: {
      posts,
    },
  };
};

export default Home;

import Head from 'next/head';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

function Home({ posts }) {
  return (
    <>
      <Head>
        <title>John D. Jameson</title>
      </Head>

      <h1 className="visually-hidden">John D. Jameson, Front-End Engineer</h1>

      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.frontMatter.title}>
            <time dateTime={post.frontMatter.date}>
              {post.frontMatter.date}
            </time>
            <a href={`blog/${post.slug}`}>{post.frontMatter.title}</a>
          </li>
        ))}
      </ul>
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

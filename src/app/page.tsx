import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

const posts = allPosts.sort((a, b) =>
  compareDesc(new Date(a.date), new Date(b.date))
);

function PostPreview(post: Post) {
  return (
    <div>
      <h2>
        <Link href={post.url}>{post.title}</Link>
      </h2>
      <time dateTime={post.date}>
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <h1>Blog</h1>
      {posts.map((post, index) => (
        <PostPreview key={index} {...post} />
      ))}
    </>
  );
}

import { allPosts, Post } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Hero from "@/components/Hero/Hero";
import homeStyles from "@/app/home.module.css";
import Link from "next/link";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";

const posts = allPosts
  .filter((post) => !post.development)
  .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

export default function Home() {
  return (
    <>
      <VisuallyHidden as="h1">
        John D. Jameson, Front-End Engineer
      </VisuallyHidden>

      <div className={homeStyles.container}>
        <div className={homeStyles.hero}>
          <Hero>John D. Jameson Front-End Engineer</Hero>
        </div>

        <h2 className={homeStyles.h2}>Posts</h2>
        {posts.map((post, index) => (
          <div className={homeStyles.post} key={index}>
            <h3 className={homeStyles.postTitle}>
              <Link className={homeStyles.postLink} href={post.url}>
                {post.title}
              </Link>
            </h3>
            <p className={homeStyles.postDescription}>{post.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

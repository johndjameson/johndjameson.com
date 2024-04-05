import { allExternalPosts, allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Hero from "@/components/Hero/Hero";
import homeStyles from "@/app/home.module.css";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";
import DynamicLink from "@/components/DynamicLink/DynamicLink";
import { publications } from "@/constants/publications";

const combinedPosts = [
  ...allPosts.filter((post) => !post.development),
  ...allExternalPosts,
].sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

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

        {combinedPosts.map((post) => {
          return (
            <div className={homeStyles.post} key={post.url}>
              {post.publication && (
                <img
                  alt={publications[post.publication].displayName}
                  className={homeStyles.publication}
                  height={30}
                  src={publications[post.publication].logo}
                  width={120}
                />
              )}
              <h3 className={homeStyles.postTitle}>
                <DynamicLink
                  className={homeStyles.postDynamicLink}
                  href={post.url}
                >
                  {post.title}
                </DynamicLink>
              </h3>
              <p className={homeStyles.postDescription}>{post.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

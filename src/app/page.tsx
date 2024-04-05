import { allExternalPosts, allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Hero from "@/components/Hero/Hero";
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

      <div className="px-[var(--layout-container-width-padding-x)] pb-28">
        <div className="mb-12 mt-6">
          <Hero>John D. Jameson Front-End Engineer</Hero>
        </div>

        <h2 className="mb-6 font-heading text-2xl font-bold text-[#6b5fe8] md:mb-8 md:text-3xl">
          Posts
        </h2>

        <div className="grid gap-y-8">
          {combinedPosts.map((post) => {
            return (
              <div
                className="pb-8 [&:not(:last-child)]:border-b-2 [&:not(:last-child)]:border-b-[#e6e1e9]"
                key={post.url}
              >
                {post.publication && (
                  <img
                    alt={publications[post.publication].displayName}
                    className="mb-2 h-[30px]"
                    height={30}
                    src={publications[post.publication].logo}
                    width={120}
                  />
                )}
                <h3 className="mb-2 font-heading text-xl font-bold md:text-2xl">
                  <DynamicLink className="hover:underline" href={post.url}>
                    {post.title}
                  </DynamicLink>
                </h3>
                <p className="md:text-xl">{post.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

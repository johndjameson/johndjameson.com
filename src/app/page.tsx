import DynamicLink from "@/components/DynamicLink/DynamicLink";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";
import { publications } from "@/constants/publications";
import { allExternalPosts, allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

const combinedPosts = [
  ...allPosts.filter((post) => !post.development && !post.archived),
  ...allExternalPosts,
].sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

export default function Home() {
  return (
    <>
      <VisuallyHidden as="h1">
        John D. Jameson, Front-End Engineer
      </VisuallyHidden>

      <div className="px-container-w pb-8 md:pb-16">
        <div className="mt-6 mb-12">
          <img
            alt="Alternating lines of the words “John D. Jameson Front-End Engineer”"
            className="rounded-md bg-[#2b206d] text-white"
            height={600}
            width={1280}
            src="/images/hero.svg"
          />
        </div>

        <h2 className="font-heading mb-6 text-2xl font-bold text-[#6b5fe8] md:mb-8 md:text-3xl">
          Posts
        </h2>

        <div className="grid gap-y-8">
          {combinedPosts.map((post) => {
            return (
              <div
                className="pb-8 not-last:border-b-2 not-last:border-b-[#e6e1e9]"
                key={post.url}
              >
                {post.publication && (
                  <img
                    alt={publications[post.publication].displayName}
                    className="mb-2 h-[30px]"
                    decoding="async"
                    height={30}
                    loading="lazy"
                    src={publications[post.publication].logo}
                    width={120}
                  />
                )}
                <h3 className="font-heading mb-2 text-xl font-bold md:text-2xl">
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

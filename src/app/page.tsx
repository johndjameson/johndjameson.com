import DynamicLink from "@/components/DynamicLink/DynamicLink";
import { Hero } from "@/components/Hero/Hero";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";
import { publications } from "@/constants/publications";
import { clsx } from "clsx";
import { allExternalPosts, allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

const combinedPosts = [
  ...allPosts.filter((post) => !post.development && !post.archived),
  ...allExternalPosts,
].sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

export default function Home() {
  const postsByYear = Object.groupBy(combinedPosts, (post) =>
    post.date.substring(0, 4),
  );

  const years: number[] = Object.keys(postsByYear)
    .map((year) => Number(year))
    .sort((a, b) => compareDesc(new Date(a), new Date(b)));

  return (
    <>
      <section className="md:px-container-w mb-12 md:mt-6">
        <VisuallyHidden as="h1">
          John D. Jameson, Front-End Engineer
        </VisuallyHidden>
        <Hero />
      </section>

      <section className="px-container-w pb-8 md:pb-16">
        <h2 className="font-heading mb-6 text-2xl font-bold md:mb-8 md:text-3xl">
          Posts
        </h2>

        <div className="grid gap-y-12 md:gap-y-8">
          {years.map((year) => (
            <div className="relative" key={year}>
              <div className="grid items-start gap-x-4 border-t-2 border-black pt-2 md:grid-cols-6 md:pt-8">
                <h2 className="col-span-1 mb-8 text-lg font-bold md:sticky md:top-24">
                  <time>{year}</time>
                </h2>

                <div className="col-span-5 grid gap-y-4 md:gap-y-8">
                  {postsByYear[year]!.map((post) => (
                    <div
                      className="border-2 border-neutral-950 px-6 py-8"
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
                      <h4 className="font-heading mb-2 text-xl font-bold md:text-2xl">
                        <DynamicLink
                          className={clsx(
                            "hover:underline",
                            "motion-safe:hover:filter-[url('#link-wiggle')]",
                          )}
                          href={post.url}
                        >
                          {post.title}
                        </DynamicLink>
                      </h4>
                      <p className="md:text-xl">{post.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

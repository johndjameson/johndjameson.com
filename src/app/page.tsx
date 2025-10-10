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

      <section className={clsx("px-container-w pb-8", "md:pb-16")}>
        <h2
          className={clsx(
            "font-heading mb-6 text-2xl font-bold",
            "md:mb-8 md:text-3xl",
          )}
        >
          Posts
        </h2>

        <div
          className={clsx(
            "grid border-neutral-950 max-md:gap-y-10",
            "md:border-t-2 md:border-b-4",
            "dark:border-neutral-50",
          )}
        >
          {years.map((year) => (
            <div
              className={clsx(
                "relative border-neutral-950 md:border-t-2",
                "dark:border-neutral-50",
              )}
              key={year}
            >
              <div className="grid items-start gap-x-4 md:grid-cols-6">
                <h2
                  className={clsx(
                    "@container",
                    "max-md:border-b-2 max-md:pb-2",
                    "md:sticky md:top-32 md:col-span-1 md:mt-20 md:mb-8",
                  )}
                >
                  <time className="font-cendra text-2xl md:text-[37cqw]/1">
                    {year}
                  </time>
                </h2>

                <div className="md:col-span-5">
                  {postsByYear[year]!.map((post) => (
                    <div
                      className={clsx(
                        "border-l-2 border-neutral-950 px-4 py-6",
                        "max-md:border-r-2 max-md:border-b-2",
                        "md:px-6 md:py-12 md:not-last:border-b-2",
                        "dark:border-neutral-50",
                      )}
                      key={post.url}
                    >
                      {post.publication && (
                        <img
                          alt={publications[post.publication].displayName}
                          className="mb-2 h-[30px] dark:invert"
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
                      <p className="mb-4 text-pretty md:text-xl">
                        {post.description}
                      </p>
                      <DynamicLink
                        aria-label={`Read ${post.title}`}
                        className={clsx(
                          "font-bold",
                          "hover:underline",
                          "motion-safe:hover:filter-[url('#link-wiggle')]",
                        )}
                        href={post.url}
                      >
                        Read More
                      </DynamicLink>
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

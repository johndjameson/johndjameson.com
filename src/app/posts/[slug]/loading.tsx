const PostLayout = () => (
  <div className="px-container-w mb-12 md:mb-16">
    <div className="mt-10 mb-8 filter-[url('#post-wiggle-static')]">
      <div className="mb-4 h-67 animate-pulse bg-neutral-300 md:mt-16" />
    </div>

    <div className="grid gap-4 md:grid-cols-6">
      <div className="md:col-span-4 md:col-start-2">
        <div className="grid gap-y-8 filter-[url('#post-wiggle-static')]">
          <div className="h-5 w-37 animate-pulse bg-neutral-300" />

          <div className="h-30 animate-pulse bg-neutral-300" />
          <div className="h-20 animate-pulse bg-neutral-300" />
          <div className="h-30 animate-pulse bg-neutral-300" />
          <div className="h-20 animate-pulse bg-neutral-300" />
          <div className="h-30 animate-pulse bg-neutral-300" />
          <div className="h-20 animate-pulse bg-neutral-300" />
        </div>
      </div>
    </div>
  </div>
);

export default PostLayout;

import { Skeleton } from "../ui/skeleton";

const AnimeBannerSkeleton = () => {
  return (
    <section
      className={`relative h-[412px] w-full max-w-7xl overflow-hidden rounded-xl bg-black/20 shadow-sm shadow-black/80 backdrop-blur-sm`}
    >
      {/* Image Skeleton */}
      <Skeleton className="h-full w-full object-cover object-center" />

      <div className="absolute bottom-0 left-0 flex w-full flex-col gap-4 p-8">
        {/* Genre Badges Skeleton */}
        <div className="flex flex-wrap items-center gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>

        {/* Title Skeleton */}
        <Skeleton className="h-10 w-3/4 sm:h-14 md:h-16" />

        {/* Studio and Info Skeleton */}
        <div className="flex max-w-[50%] flex-col gap-2">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-6 w-48" />
        </div>

        {/* Rating Skeleton */}
        <div className="flex flex-wrap items-center gap-1">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-6 w-12" />
        </div>

        {/* Action Buttons Skeleton */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Skeleton className="h-10 w-32 rounded-md" />
            <Skeleton className="h-10 w-48 rounded-md" />
          </div>

          {/* Arrow Buttons Skeleton */}
          <div className="flex flex-wrap items-center gap-4">
            <Skeleton className="h-[2.3rem] w-[2.3rem] rounded-full" />
            <Skeleton className="h-[2.3rem] w-[2.3rem] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimeBannerSkeleton;

import AnimeBannerSkeleton from "@/components/skeletons/AnimeBannerSkeleton";
import StCardSkeleton from "@/components/skeletons/StCardSkeleton";
import React from "react";

const Loader = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
      <AnimeBannerSkeleton />
      <div className="grid grid-cols-2 flex-wrap items-center gap-4 overflow-x-scroll no-scrollbar sm:grid-cols-3 xl:grid-cols-4">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <StCardSkeleton key={i} />
          ))}
      </div>
    </div>
  );
};

export default Loader;

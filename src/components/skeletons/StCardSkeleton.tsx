import React from "react";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const StCardSkeleton = () => {
  return (
    <Card className="relative h-[400px] w-full max-w-[300px] overflow-hidden border-none transition-all">
      <img
        src={"/placeholder/loader.jpg"}
        loading="lazy"
        alt="slide_image"
        className="h-full w-full object-cover object-center opacity-15"
      />
      <div className="absolute bottom-0 left-0 mx-auto h-fit w-full p-4">
        <div className="mx-auto flex w-full flex-col gap-4 border-none">
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-[40px] rounded-full bg-transparent/20 backdrop-blur-sm" />
            <Skeleton className="h-5 w-[80px] rounded-full bg-transparent/20 backdrop-blur-sm" />
          </div>
          <Skeleton className="h-6 w-[80%] bg-transparent/20 backdrop-blur-sm" />
          <Skeleton className="w-[120px] bg-transparent/20 backdrop-blur-sm" />
        </div>
      </div>
    </Card>
  );
};

export default StCardSkeleton;

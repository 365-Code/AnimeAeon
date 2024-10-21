import React from "react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ReactPlayerSkeleton() {
  return (
    <Card className="relative aspect-video w-full overflow-hidden rounded-xl border-none outline-none">
      <div className="absolute inset-0 bg-gray-900">
        {/* Pulsing animation for the main video area */}
        <div className="absolute inset-0  animate-pulse bg-gray-800" />
      </div>

      {/* Controls skeleton */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        {/* Progress bar skeleton */}
        <Skeleton className="mb-4 h-1 w-full" />

        <div className="flex items-center justify-between">
          {/* Left controls */}
          <div className="flex items-center space-x-2">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-4 w-16" />
          </div>

          {/* Right controls */}
          <div className="flex items-center space-x-2">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </div>

      {/* Center play button skeleton */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Skeleton className="h-16 w-16 rounded-full -translate-y-4 sm:translate-y-0" />
      </div>
    </Card>
  );
}

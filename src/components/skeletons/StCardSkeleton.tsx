import { ISearchResult, toAnimeTitle } from "@/utils";
import Link from "next/link";
import React from "react";

const StCardSkeleton = () => {
  return (
    <div className="animate-pulse relative bg-black/40 h-[450px] max-w-[350px] min-w-[320px] snap-start overflow-hidden rounded-xl">
      <div
        className={`absolute bg-black/50 bottom-0 left-0 z-[1] h-fit w-full space-y-1 p-4`}
      >
        <p className="no-scrollbar flex items-center gap-2 overflow-x-scroll">
          {[...Array(3)]?.map((g, i) => (
            <span
              key={i}
              style={{
                animationDelay: `${(i + 1) * 0.25}s`,
              }}
              className="text-nowrap animate-pulse rounded-full bg-white/30 w-[80px] h-6 text-sm font-medium"
            />
          ))}
        </p>
        <h2 className="max-h-[72px] overflow-hidden text-3xl">
          <div className="flex items-center w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
        </h2>
        <div className="flex items-start gap-2 justify-between">
          <div className="overflow-hidden">
            <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
              <div className="flex gap-2 items-center w-full max-w-[480px]">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              </div>
              <div className="flex gap-2 items-center w-full max-w-[440px]">
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
              </div>
              <div className="flex gap-2 items-center w-full max-w-[360px]">
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <button className="h-fit w-fit rounded-full bg-white/20 p-3 transition-all ">
            <i className="fi fi-ss-play" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StCardSkeleton;

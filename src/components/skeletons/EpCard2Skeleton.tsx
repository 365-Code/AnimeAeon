import { IRecentEpisode, toAnimeTitle } from "@/utils";
import Link from "next/link";
import React from "react";

const EpCard2Skeleton = () => {
  return (
    <div className="backdrop-blur-sm bg-black/50 shadow-inner shadow-white/10 relative max-h-[190px] min-h-[190px]  w-full overflow-hidden rounded-xl transition-all">
      <div className="h-full w-full opacity-90 group-hover/epCard:opacity-100"></div>

      <div className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-black/20 p-3 text-lg font-medium backdrop-blur-sm transition-all">
        <div className="flex items-start gap-2 overflow-hidden">
          <div
            role="status"
            className="space-y-2.5 animate-pulse overflow-hidden"
          >
            <div className="flex gap-2 items-center w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
            <div className="flex gap-2 items-center w-full">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
            </div>
            <div className="flex gap-2 items-center w-full">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
          <button className="h-fit w-fit rounded-full bg-white/20 p-3 transition-all ">
            <i className="fi fi-ss-play" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EpCard2Skeleton;

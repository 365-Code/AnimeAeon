import { IRecentEpisode, toAnimeTitle } from "@/utils";
import React from "react";

const EpisodeCardSkeleton = () => {
  return (
    <div className="cursor-pointer shadow-white">
      <div className="group/epCard ep-card-skeleton relative transition-all">
        <div className="w-[280px] h-full">
        </div>
        <div className="absolute space-y-2 bottom-0 left-0 w-full hyphens-auto p-4 bg-black/70">
          <h3 className="text-lg font-bold h-4 capitalize bg-white/30" />
            <p className="flex items-center gap-2">
              <span className="bg-white/30 flex-1 h-4" />
              <span className="h-2 w-2 rounded-full bg-white/30" />
              <span className="bg-white/30 h-4 flex-1" />
            </p>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCardSkeleton;

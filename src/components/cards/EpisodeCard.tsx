import { IRecentEpisode, toAnimeTitle } from "@/utils";
import React from "react";

const EpisodeCard = ({ anime }: { anime: IRecentEpisode }) => {
  return (
    <div className="cursor-pointer">
      <div className="group/epCard ep-card relative transition-all">
        <div className="h-full w-full">
          <img
            src={anime.image || ""}
            className="h-full w-full object-cover object-center opacity-40 transition-all group-hover/epCard:opacity-100"
            alt=""
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full hyphens-auto p-4 font-semibold transition-all group-hover/epCard:bg-black/70">
          <h3 className="text-lg font-bold capitalize text-cyan-500">
            {toAnimeTitle(anime.title)}
          </h3>
          <p className="flex items-center gap-2 text-base font-medium text-white">
            {anime.type}
            <span className="h-2 w-2 rounded-full bg-white" />
            {anime.episodeTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;

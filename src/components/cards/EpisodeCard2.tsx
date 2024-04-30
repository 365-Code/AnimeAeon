import { IRecentEpisode, toAnimeTitle } from "@/utils";
import Link from "next/link";
import React from "react";

const EpisodeCard2 = ({ anime }: { anime: IRecentEpisode }) => {

  return (
    <Link
      href={"/anime/" + anime.id + "?episode=" + anime.episodeId.replace('/', '')}
      className="group/epCard relative max-h-[190px] min-h-[190px]  w-full overflow-hidden rounded-xl transition-all"
    >
      <div className="h-full w-full opacity-90 group-hover/epCard:opacity-100">
        <img
          src={anime.image}
          alt={toAnimeTitle(anime.title)}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-black/40 p-4 text-lg font-medium backdrop-blur-sm transition-all group-hover/epCard:bg-black/50 group-hover/epCard:backdrop-blur-none">
        <div className="">
          <p>{toAnimeTitle(anime.title)}</p>
          <p className="flex items-center gap-2 text-base">
            <span>{anime.type}</span>
            <span className="min-h-2 min-w-2 rounded-full bg-white" />
            {anime.episodeTitle || "Episode " + anime.episodeNumber}
          </p>
        </div>

        <button className="rounded-full bg-black/50 p-3 text-base hover:bg-black/50">
          <i className="fi fi-ss-play" />
        </button>
      </div>
    </Link>
  );
};

export default EpisodeCard2;

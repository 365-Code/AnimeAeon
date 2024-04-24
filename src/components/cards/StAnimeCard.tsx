import { ISearchResult, toAnimeTitle } from "@/utils";
import { ITitle } from "@consumet/extensions";
import Link from "next/link";
import React from "react";

const StAnimeCard = ({ anime }: { anime: ISearchResult }) => {
  return (
    <Link href={"/anime/" + anime.id} className="h-full w-full">
      <div className="group/epCard st-anime-card h-full">
        <div className="h-full w-full">
          <img src={anime.image || ""} className="cover-img" alt="" />
        </div>
        <div className="st-anime-card-detail relative overflow-hidden group-hover/epCard:min-h-[50%] ">
          <h3 className="text-left font-semibold capitalize text-cyan-500 sm:text-2xl">
            {toAnimeTitle(anime.title as ITitle)}
          </h3>
          <p className="flex flex-wrap items-center gap-1 text-lg font-medium text-white md:text-xl">
            <span>{anime.type}</span>
            <span className="h-2 w-2 rounded-full bg-white" />
            <span>{anime.currentEpisode || anime.totalEpisodes}</span>
            <span className="h-2 w-2 rounded-full bg-white" />
            <span>{anime.status}</span>
          </p>
          <p className="no-scrollbar h-0 overflow-hidden font-normal transition-all group-hover/epCard:h-[150px] group-hover/epCard:overflow-y-scroll">
            {anime.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default StAnimeCard;

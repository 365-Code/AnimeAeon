import React from "react";
import NewCard from "../cards/NewCard";
import { IRecentEpisode, recentEpisode } from "@/utils";
import EpisodeCard2 from "../cards/EpisodeCard2";

const DisplayRecentEpisode = ({
  animeList,
}: {
  animeList: IRecentEpisode[];
}) => {
  return (
    // <div className="flex h-[70vh] w-[350px] flex-col gap-4 overflow-y-hidden rounded-xl bg-black/30 p-4 backdrop-blur-sm">
    <div className="flex flex-col gap-4 overflow-y-scroll no-scrollbar">
      {animeList.map((recentEpisode) => (
        <EpisodeCard2 key={recentEpisode.id} anime={recentEpisode} />
      ))}
    </div>
    // <div className="flex w-[350px] flex-col gap-4 overflow-y-hidden rounded-xl bg-black/30 p-4 backdrop-blur-sm">
    //   <h3 className="flex items-center gap-1 text-xl font-medium">
    //     <span>
    //       <i className="fi fi-ss-confetti text-yellow-400" />
    //     </span>
    //     <span>Recent Episodes</span>
    //   </h3>
    //   <div className=" no-scrollbar flex flex-col gap-4 overflow-y-scroll">
    //     {animeList.map((recentEpisode) => (
    //       <EpisodeCard2 key={recentEpisode.id} anime={recentEpisode} />
    //     ))}
    //   </div>
    // </div>
  );
};

export default DisplayRecentEpisode;

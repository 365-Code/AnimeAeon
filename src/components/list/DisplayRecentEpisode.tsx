import React, { useEffect, useState } from "react";
import NewCard from "../cards/NewCard";
import { IRecentEpisode, recentEpisode } from "@/utils";
import EpisodeCard2 from "../cards/EpisodeCard2";
import EpCard2Skeleton from "../skeletons/EpCard2Skeleton";

const DisplayRecentEpisode = ({
  animeList,
}: {
  animeList: IRecentEpisode[];
}) => {
  const [avl, setAvl] = useState(false);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setAvl(true);
    }, 5000);
    return () => clearTimeout(debounce);
  }, [animeList]);

  return (
    // <div className="flex h-[512px] w-[350px] flex-col gap-4 overflow-y-hidden rounded-xl bg-black/30 p-4 backdrop-blur-sm">
    <div className="flex flex-col gap-4 overflow-y-scroll no-scrollbar">
      {animeList?.map((recentEpisode) => (
        <EpisodeCard2 key={recentEpisode.id} anime={recentEpisode} />
      ))}
      {
      !avl && animeList.length == 0
        ? 
        [...Array(4)].map((x, i) => (
            <div
              key={i}
              style={{ animationDelay: `${(i + 1) * 0.25}s` }}
              className="animate-pulse"
            >
              <EpCard2Skeleton />
            </div>
          ))
        : animeList.length == 0 && (
            <h2 className="text-xl text-center p-4">No Recent Episodes</h2>
          )}
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

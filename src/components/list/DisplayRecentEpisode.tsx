import React, { useEffect, useState } from "react";
import { IRecentEpisode } from "@/utils";
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
  );
};

export default DisplayRecentEpisode;

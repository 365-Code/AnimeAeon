"use client";
import { ApiError } from "next/dist/server/api-utils";
import React, { useEffect, useState } from "react";
import EpisodeCard from "../cards/EpisodeCard";
import { IRecentEpisode, recentEpisode, recentEpisodeList } from "@/utils";
import EpisodeCardSkeleton from "../skeletons/EpisodeCardSkeleton";
import DisplayRecentEpisode from "../list/DisplayRecentEpisode";
import DisplayWatchList from "../list/DisplayWatchList";

const FetchWatchList = () => {
  const [watchList, setWatchList] = useState<IRecentEpisode[]>([]);

  const data = () => {
    const dta = localStorage.getItem("watchList");
    if (dta) {
      const list = JSON.parse(dta);
      setWatchList(list);
    }
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <section>
      {/* <DisplayRecentEpisode animeList={recentEpisodes} /> */}
      <DisplayWatchList animeEpList={watchList} />
      {/* <h2 className="heading">Recent Episodes</h2>
      <div className="no-scrollbar flex w-full gap-2 overflow-x-scroll">
        {recentEpisodes.map((anime) => (
          <EpisodeCard key={anime.id} anime={anime} />
        ))}
        {
          recentEpisodes.length == 0 && [...Array(7)].map(() => <EpisodeCardSkeleton />)
        }
      </div> */}
    </section>
  );
};

export default FetchWatchList;

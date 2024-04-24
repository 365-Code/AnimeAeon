"use client";
import { ApiError } from "next/dist/server/api-utils";
import React, { useEffect, useState } from "react";
import EpisodeCard from "../cards/EpisodeCard";
import { IRecentEpisode, recentEpisode, recentEpisodeList } from "@/utils";
import EpisodeCardSkeleton from "../skeletons/EpisodeCardSkeleton";
import DisplayRecentEpisode from "../list/DisplayRecentEpisode";

const FetchWatchList = () => {
  const [watchList, setWatchList] = useState<IRecentEpisode[]>([]);

  const data = async () => {
    try {
      const data = await fetch("/api/anilist/watchList");
      const res = await data.json();
      if (res.success) {
        setWatchList(res.results);
      }
    } catch (error) {
      if (error instanceof ApiError) throw new Error(error.message);
    }
  };

  useEffect(() => {
    // const debounce = setTimeout(() => {
    //   data();
    // }, 500);
    // return () => clearTimeout(debounce);
    setWatchList(recentEpisodeList);
  }, []);

  return (
    <section>
      {/* <DisplayRecentEpisode animeList={recentEpisodes} /> */}
      <DisplayRecentEpisode animeList={watchList} />
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

"use client";
import { ApiError } from "next/dist/server/api-utils";
import React, { useEffect, useState } from "react";
import { IRecentEpisode } from "@/utils";
import DisplayRecentEpisode from "../list/DisplayRecentEpisode";

const FetchRecentEpisodes = () => {
  const [recentEpisodes, setRecentEpisodes] = useState<IRecentEpisode[]>([]);

  const data = async () => {
    try {
      const data = await fetch("/api/anilist/recentEpisodes");
      const res = await data.json();
      if (res.success) {
        setRecentEpisodes(res.results);
      }
    } catch (error) {
      if (error instanceof ApiError) throw new Error(error.message);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      data();
    }, 500);
    return () => clearTimeout(debounce);
  }, []);

  return <DisplayRecentEpisode animeList={recentEpisodes} />;
};

export default FetchRecentEpisodes;

{
  /* <h2 className="heading">Recent Episodes</h2>
      <div className="no-scrollbar flex w-full gap-2 overflow-x-scroll">
        {recentEpisodes.map((anime) => (
          <EpisodeCard key={anime.id} anime={anime} />
        ))}
        {
          recentEpisodes.length == 0 && [...Array(7)].map(() => <EpisodeCardSkeleton />)
        }
      </div> */
}

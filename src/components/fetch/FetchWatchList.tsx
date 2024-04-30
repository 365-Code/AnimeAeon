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
      <DisplayWatchList animeEpList={watchList} />
    </section>
  );
};

export default FetchWatchList;

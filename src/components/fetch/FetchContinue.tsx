"use client";
import React, { useEffect, useState } from "react";
import { IRecentEpisode } from "@/utils";
import DisplayContinue from "../list/DisplayContinue";

const FetchContinue = () => {
  const [continueList, setContinueList] = useState<IRecentEpisode[]>([]);

  const data = () => {
    const dta = localStorage.getItem("continueList");
    if (dta) {
      const list = JSON.parse(dta);
      setContinueList(list);
    }
  };

  useEffect(() => {
    data();
  }, []);

  return (
      <DisplayContinue animeEpList={continueList} />
    // <section>
    //   <DisplayRecentEpisode animeList={recentEpisodes} />
    //   <h2 className="heading">Recent Episodes</h2>
    //   <div className="no-scrollbar flex w-full gap-2 overflow-x-scroll">
    //     {recentEpisodes.map((anime) => (
    //       <EpisodeCard key={anime.id} anime={anime} />
    //     ))}
    //     {
    //       recentEpisodes.length == 0 && [...Array(7)].map(() => <EpisodeCardSkeleton />)
    //     }
    //   </div>
    // </section>
  );
};

export default FetchContinue;

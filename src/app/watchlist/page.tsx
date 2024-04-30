"use client";
import WatchCard from "@/components/cards/WatchCard";
import { IRecentEpisode } from "@/utils";
import React, { useEffect, useState } from "react";

const Page = () => {
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
    <section className="flex h-full flex-1 flex-col">
      <h1 className="heading">Watchlist</h1>
      <div className="grid flex-1 grid-cols-2 gap-4 no-scrollbar overflow-y-scroll sm:grid-cols-3 md:grid-cols-5">
        {
      watchList.map((watch, i) => <WatchCard key={i} watch={watch} />)
      }
      </div>
    </section>
  );
};

export default Page;

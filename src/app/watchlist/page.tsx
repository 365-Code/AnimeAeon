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
    <section className="mx-auto flex h-full max-w-7xl flex-1 flex-col">
      {!watchList || watchList.length == 0 ? (
        <div className="flex h-full flex-1 flex-col items-center justify-center">
          <h2 className="gradient-text from-red-500 to-blue-500 text-center text-xl font-medium sm:text-3xl md:text-5xl">
            You didn&apos;t like anything yet
          </h2>
        </div>
      ) : (
        <>
          <h1 className="heading">Watchlist</h1>
          <div className="no-scrollbar grid flex-1 grid-cols-2 gap-4 overflow-y-scroll sm:grid-cols-3 md:grid-cols-5">
            {watchList.map((watch, i) => (
              <WatchCard key={i} watch={watch} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Page;

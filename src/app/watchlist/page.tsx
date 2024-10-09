"use client";
import Carousel from "@/components/carousel/carousel";
import { IRecentEpisode } from "@/utils";
import { IAnimeResult } from "@consumet/extensions";
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
    <section className="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col">
      {!watchList || watchList.length == 0 ? (
        <div className="flex h-full flex-1 flex-col items-center justify-center">
          <h2 className="gradient-text from-red-500 to-blue-500 text-center text-xl font-medium sm:text-3xl md:text-5xl">
            You didn&apos;t like anything yet
          </h2>
        </div>
      ) : (
        <>
          <h1 className="bg-gradient-to-br from-slate-300 to-slate-400 bg-clip-text text-left text-2xl text-transparent sm:text-3xl md:text-5xl">
            Watch List
          </h1>
          <Carousel animeList={watchList as IAnimeResult[]} />
        </>
      )}
    </section>
  );
};

export default Page;

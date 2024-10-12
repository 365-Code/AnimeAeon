"use client";
import StAnimeCard from "@/components/cards/StAnimeCard";
import Carousel from "@/components/carousel/carousel";
import { IRecentEpisode } from "@/utils";
import { IAnimeResult } from "@consumet/extensions";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [watchList, setWatchList] = useState<IRecentEpisode[]>([]);

  useEffect(() => {
    const dta = localStorage.getItem("watchList");
    if (dta) {
      const list = JSON.parse(dta);
      setWatchList(list);
    }
  }, []);

  return (
    <section className="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col justify-center">
      {!watchList || watchList.length == 0 ? (
        <div className="flex h-full flex-1 flex-col items-center justify-center">
          <h2 className="gradient-text from-red-500 to-blue-500 text-center text-xl font-medium sm:text-3xl md:text-5xl">
            You didn&apos;t like anything yet
          </h2>
        </div>
      ) : (
        <div>
          {watchList.length >= 5 ? (
            <Carousel animeList={watchList as IAnimeResult[]} />
          ) : (
            <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-4">
              {watchList.map((anime, i) => (
                <div className="max-w-[300px]" key={i}>
                  <StAnimeCard anime={anime as IAnimeResult} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Page;

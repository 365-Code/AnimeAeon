"use client";
import { IRecentEpisode, toAnimeTitle } from "@/utils";
import { ITitle } from "@consumet/extensions";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ListCardSkeleton from "../skeletons/ListCardSkeleton";

const DisplayContinue = ({
  animeEpList,
}: {
  animeEpList: IRecentEpisode[];
}) => {
  const [avl, setAvl] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (animeEpList.length == 0) {
        setAvl(true);
      }
    }, 1000);
  }, []);

  return (
    <div className=" no-scrollbar flex flex-col gap-4 overflow-y-scroll">
      {animeEpList?.map((animeEp) => (
        <Link
          href={"/anime/" + animeEp.id + "?episode=" + animeEp.episodeId}
          key={animeEp?.id}
          className="flex items-center justify-between gap-2"
        >
          <div className="min-w-[64px] max-w-[64px]  overflow-hidden rounded-lg">
            <img src={animeEp.image} alt="" className="cover-img" />
          </div>
          <div className="flex-1">
            <p className="max-h-[52px] overflow-y-hidden">
              {toAnimeTitle(animeEp?.title as ITitle)}
            </p>
            <p>Episode - {animeEp?.episodeNumber}</p>
          </div>
          <button className="rounded-full bg-white/10 p-4 text-sm transition-all hover:bg-white/20">
            <i className="fi fi-ss-play" />
          </button>
        </Link>
      ))}
      {!avl && animeEpList.length == 0
        ? [...Array(4)].map((x, i) => (
            <div
              key={i}
              style={{ animationDelay: `${(i + 1) * 0.25}s` }}
              className="animate-pulse"
            >
              <ListCardSkeleton />
            </div>
          ))
        : animeEpList.length == 0 && (
            <h2 className="gradient-text from-slate-200 to-slate-800 p-4 text-center text-xl">
              Nothing To Continue
            </h2>
          )}
    </div>
  );
};

export default DisplayContinue;

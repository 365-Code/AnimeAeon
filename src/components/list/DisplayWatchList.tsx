import { IRecentEpisode, toAnimeTitle } from "@/utils";
import { ITitle } from "@consumet/extensions";
import React, { useEffect, useState } from "react";
import ListCardSkeleton from "../skeletons/ListCardSkeleton";
import Link from "next/link";

const DisplayWatchList = ({
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
    }, 3000);
  }, []);
  return (
    <div className=" no-scrollbar flex flex-col gap-4 overflow-y-scroll">
      {animeEpList?.map((animeEp) => (
        <div
          key={animeEp.id}
          className="flex items-center justify-between gap-2"
        >
          <div className="min-w-[64px] max-w-[64px] overflow-hidden rounded-lg">
            <img src={animeEp.image} alt="" className="cover-img" />
          </div>
          <div className="flex max-h-[70px] flex-1 items-start">
            <p className="">{toAnimeTitle(animeEp?.title as ITitle)}</p>
          </div>
          <Link
            href={"/anime/" + animeEp.id}
            className="h-fit rounded-full bg-white/10 p-4 text-sm"
          >
            <i className="fi fi-ss-play" />
          </Link>
        </div>
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
            <h2 className="p-4 text-center text-xl">
              Nothing In WatchList
            </h2>
          )}
    </div>
  );
};

export default DisplayWatchList;

import { ISearchResult, toAnimeTitle } from "@/utils";
import Link from "next/link";
import React from "react";

const StCard = ({ anime }: { anime: ISearchResult }) => {
  return (
    <div className="relative h-[450px] min-w-[350px] snap-start overflow-hidden rounded-xl">
      <div className="h-full w-full">
        <img src={anime.image} className="h-full w-full object-cover" alt="" />
      </div>
      <div
        style={{
          backgroundColor: anime.color ? anime.color + "aa" : "#000000aa",
        }}
        className={`absolute bottom-0 left-0 z-[1] h-fit w-full p-4`}
      >
        <p className="no-scrollbar flex gap-2 overflow-x-scroll">
          {anime.genres?.map((g, i) => (
            <span
              key={i}
              className="text-nowrap rounded-full bg-black/30 px-3 py-1 text-sm font-medium"
            >
              {g}
            </span>
          ))}
        </p>
        <h2 className="max-h-[72px] overflow-hidden text-3xl">
          {toAnimeTitle(anime.title)}
        </h2>
        <div className="flex items-start justify-between">
          <p className="max-h-[58px] hyphens-auto">{anime.description}</p>
          <Link
            href={"/anime/" + anime.id}
            className="h-fit w-fit rounded-full bg-black/70 p-3 transition-all hover:bg-black"
          >
            <i className="fi fi-ss-play" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StCard;

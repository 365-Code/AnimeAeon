import { IRecentEpisode, toAnimeTitle } from "@/utils";
import { ITitle } from "@consumet/extensions";
import Link from "next/link";
import React from "react";

const WatchCard = ({ watch }: { watch: IRecentEpisode }) => {
  return (
    <Link href={"/anime/" + watch.id}>
      <div className=" h-[300px] w-full max-w-[260px] overflow-hidden rounded-xl shadow-xl shadow-black/30 transition-all hover:z-20 hover:h-[350px]">
        <div className="relative h-full w-full">
          <img
            src={watch.image}
            className="h-full w-full object-cover object-center"
            alt=""
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/60 p-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl">
              {toAnimeTitle(watch.title)}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WatchCard;

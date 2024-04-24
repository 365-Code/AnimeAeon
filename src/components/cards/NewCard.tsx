import { IRecentEpisode, ISearchResult, toAnimeTitle } from "@/utils";
import { IAnimeResult, ISearch } from "@consumet/extensions";
import Link from "next/link";
import React from "react";

const NewCard = ({ anime }: { anime: ISearchResult }) => {
  return (
    <Link
      href={"#"}
      className="relative h-[450px] min-w-[350px] snap-start overflow-hidden rounded-xl"
    >
      <div className="h-full w-full">
        <img src={anime.image} className="h-full w-full object-cover" alt="" />
      </div>
      <div
        style={{
          backgroundColor: anime.color + "aa",
        }}
        className={`absolute bottom-0 left-0 z-[1] h-fit w-full p-4`}
      >
        <h2 className="text-3xl">{toAnimeTitle(anime.title)}</h2>
        <p>{anime.description}</p>
      </div>
    </Link>
  );
};

export default NewCard;

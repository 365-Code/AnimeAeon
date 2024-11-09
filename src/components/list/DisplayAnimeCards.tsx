import { IAnimeResult } from "@consumet/extensions";
import React from "react";
import AnimeCard from "../cards/AnimeCard";

const DisplayAnimeCards = ({
  animeList,
  title,
}: {
  animeList: IAnimeResult[];
  title?: string;
}) => {
  return (
    <section className="relative space-y-4">
      {title && <h2 className="text-xl sm:text-2xl md:text-3xl">{title}</h2>}
      <div className="relative flex w-full snap-x snap-mandatory items-center gap-2 overflow-x-scroll rounded-r-2xl no-scrollbar sm:gap-4 md:gap-6">
        {animeList?.map((anime) => <AnimeCard key={anime.id} anime={anime} />)}
      </div>
    </section>
  );
};

export default DisplayAnimeCards;

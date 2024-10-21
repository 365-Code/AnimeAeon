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
    <section id="disp" className="relative snap-start space-y-4">
      {title && (
        <h2 className="text-xl sm:text-2xl md:text-3xl">
          {title}
        </h2>
      )}
      <div className="relative flex w-full snap-x snap-mandatory items-center gap-6 overflow-x-scroll rounded-r-2xl no-scrollbar">
        {animeList?.map((anime) => <AnimeCard key={anime.id} anime={anime} />)}
      </div>
    </section>
  );
};

export default DisplayAnimeCards;

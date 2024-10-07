import { IAnimeResult } from "@consumet/extensions";
import React, { useRef } from "react";
import AnimeCard from "../cards/AnimeCard";

const DisplayAnimeCards = ({
  animeList,
  title,
}: {
  animeList: IAnimeResult[];
  title?: string;
}) => {
  // React
  const scrollRef = useRef<HTMLDivElement>(null);

  // handles
  const handleScroll = (dir: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir * 500,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="disp" className="relative snap-start space-y-4">
      {title && (
        <h2 className="gradient-text from-red-500 to-blue-500 text-xl sm:text-2xl md:text-3xl">
          {title}
        </h2>
      )}
      <div
        ref={scrollRef}
        className="no-scrollbar relative flex w-full snap-x snap-mandatory items-center gap-6 overflow-x-scroll rounded-r-2xl"
      >
        {animeList?.map((anime) => <AnimeCard key={anime.id} anime={anime} />)}
      </div>
    </section>
  );
};

export default DisplayAnimeCards;

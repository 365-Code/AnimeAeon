import AnimeListCard from "@/components/AnimeListCard";
import NavTop from "@/components/NavTop";
import { animeList, getAnime } from "@/utils";
import React from "react";

const Page = () => {
  return (
    <div className="h-full flex flex-col">
      <NavTop title="top hits anime" />
      <div className="flex-1 overflow-y-scroll space-y-3 custom-scrollbar">
        {getAnime().map((anime) => (
          <AnimeListCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default Page;

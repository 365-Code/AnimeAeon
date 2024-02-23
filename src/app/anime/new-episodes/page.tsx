import AnimePreview from "@/components/AnimePreview";
import NavTop from "@/components/NavTop";
import { getAnime } from "@/utils";
import React from "react";

const Page = () => {
  return (
    <div className="h-full flex flex-col">
      <NavTop title="top hits anime" />
      <div className="flex-1 overflow-y-scroll custom-scrollbar grid grid-cols-2 gap-2">
        {getAnime().map((anime) => (
            <div key={anime.id} className="w-full h-[300px]">
          <AnimePreview image={anime.thumbnail} title={anime.title} />
            </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

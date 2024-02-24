import AnimeListCard from "@/components/AnimeListCard";
import AnimePreview from "@/components/AnimePreview";
import NavTop from "@/components/Nav/NavTop";
import NotificationCard from "@/components/NotificationCard";
import { animeList, getAnime } from "@/utils";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-full overflow-x-hidden no-scrollbar absolute -top-8 left-0">
    <div className="rotate-12 justify-center gap-3 custom-scrollbar flex flex-wrap">
      {animeList.map((anime) => (
        <div key={anime.id} className="w-[150px] h-[200px]">
          <AnimePreview
          id={anime.id}
            key={anime.id}
            title={anime.title}
            image={anime.image}
            />
        </div>
      ))}
      {animeList.map((anime) => (
        <div key={anime.id} className="w-[150px] h-[200px]">
          <AnimePreview
          id={anime.id}
            key={anime.id}
            title={anime.title}
            image={anime.image}
            />
        </div>
      ))}
      {animeList.map((anime) => (
        <div key={anime.id} className="w-[150px] h-[200px]">
          <AnimePreview
          id={anime.id}
            key={anime.id}
            title={anime.title}
            image={anime.image}
            />
        </div>
      ))}
      </div>
    </div>
  );
};

export default Page;

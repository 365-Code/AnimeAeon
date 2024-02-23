import Link from "next/link";
import React from "react";
import { getAnime } from "@/utils";
import AnimePreview from "./AnimePreview";

const HomeAnimeList = ({
  title,
  linkTo,
}: {
  title: string;
  linkTo: string;
}) => {
  return (
    <div className="max-h-fit min-h-fit">
      <div className="py-4 flex items-center justify-between">
        <h3 className="capitalize font-medium text-lg">{title}</h3>
        <Link href={linkTo} className="text-[#06c149] font-medium text-sm">
          See all
        </Link>
      </div>
      <div className="w-full overflow-x-scroll flex gap-4 items-center custom-scrollbar">
        {getAnime().map((anime) => (
          <div key={anime.id} className=" min-w-[140px] h-[200px]">
            <AnimePreview
              title={anime.title}
              image={anime.thumbnail}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeAnimeList;

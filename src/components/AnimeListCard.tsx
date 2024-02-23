"use client";
import { animeListCardType } from "@/utils";
import AnimePreview from "./AnimePreview";
import MyListButton from "./MyListButton";

const AnimeListCard = ({ anime }: { anime: animeListCardType }) => {
  function listTostring(list: Array<string>) {
    let str = list[0];
    for (let i = 1; i < list.length; i++) {
      str += ", " + list[i];
    }
    if (str.length > 50) {
      str = str.slice(0, 50);
      str += "...";
    }
    return str;
  }

  return (
    <div className="flex h-[200px] items-start gap-4 min-w-fit">
      <div className="w-[140px] h-[200px]">
        <AnimePreview image={anime.thumbnail} title={anime.title} />
      </div>

      <div className="flex-1 flex h-full flex-col justify-around">
        <h3 className="text-base font-semibold leading-6 capitalize">
          {anime.title.slice(0, 36)}
          {anime.title.length > 36 ? "..." : ""}
        </h3>
        <p className="text-sm font-medium">
          <span>{anime.release_year}</span> |{" "}
          <span>{anime.release_country}</span>
        </p>
        <p className="flex flex-wrap gap-x-1 text-xs font-normal">
          Genre: {listTostring(anime.genres)}
        </p>
        <MyListButton id={anime.id} />
      </div>
    </div>
  );
};

export default AnimeListCard;

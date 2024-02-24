import React from "react";
import AnimePreview from "./AnimePreview";

const NotificationCard = ({
  anime,
  episode,
  type
}: {
  anime: any;
  episode: string;
  type: string
}) => {
  return (
    <div className="flex items-start gap-4 h-[140px]">
      <div className="w-full max-w-[140px] h-[140px]">
        <AnimePreview id={anime.id} image={anime.image} title={anime.title} />
      </div>
      <div className="flex flex-col justify-between h-full w-full">
        <h3 className="flex items-center justify-between text-base font-medium">
          {" "}
          <span className="">
            {anime.title.slice(0, 23)}
            {anime.title.length > 23 ? "..." : ""}{" "}
          </span>{" "}
          <span className="text-xs font-light w-fit">
            20/03/{anime.release_year}
          </span>{" "}
        </h3>
        <p className="font-normal text-sm">{episode}</p>
        <button className="font-normal text-sm w-fit px-2 py-1 bg-[#06b149]/10 hover:text-white hover:bg-[#06b149] rounded-lg text-[#06c149]">
          {type}
        </button>
      </div>
    </div>
  );
};

export default NotificationCard;

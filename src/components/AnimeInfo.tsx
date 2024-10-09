import { IAnimeInfoAnilit } from "@/utils";
import React from "react";
import AnimeEpisodes from "./list/AnimeEpisodes";

const AnimeInfo = ({ anime }: { anime: IAnimeInfoAnilit }) => {
  return (
    <section
      style={{
        display: "grid",
        gap: "1.5rem",
        justifyContent: "space-between",
        gridTemplateColumns: "minmax(70%,1fr) minmax(0%, 28%)",
      }}
      className="relative h-[512px] w-full border"
    >
      <AnimeEpisodes episodeList={anime?.episodes || []} />
    </section>
  );
};

export default AnimeInfo;

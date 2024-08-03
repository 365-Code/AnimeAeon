"use client";
import React, { Dispatch, SetStateAction } from "react";
import { IAnimeInfoAnilit } from "@/utils";
import AnimeEpisodes from "../list/AnimeEpisodes";
import dynamic from "next/dynamic";

const DynamicVideoPlayer = dynamic(() => import("./VideoPlayer"), {
  ssr: false,
});

const Watch = ({
  anime,
  setWatch,
}: {
  anime: IAnimeInfoAnilit;
  setWatch: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <section
      style={{
        gap: "1.5rem",
        gridTemplateColumns: "65% 30%",
      }}
      className="relative w-full sm:grid md:h-[512px] xl:h-[680px]"
    >
      <DynamicVideoPlayer setWatch={setWatch} />
      <AnimeEpisodes episodeList={anime.episodes || []} />
    </section>
  );
};

export default Watch;

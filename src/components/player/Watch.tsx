"use client";
import React from "react";
import { IAnimeInfoAnilit } from "@/utils";
import AnimeEpisodes from "../list/AnimeEpisodes";
import dynamic from "next/dynamic";

const DynamicVideoPlayer = dynamic(() => import("./VideoPlayer"), {
  ssr: false,
});

const Watch = ({ anime }: { anime: IAnimeInfoAnilit }) => {
  return (
    <section className="relative flex flex-col gap-4 md:grid md:grid-cols-3">
      <div className="col-span-2">
        <DynamicVideoPlayer
          episodes={anime.episodes}
          totalEpisodes={anime.totalEpisodes || anime.episodes?.length}
        />
      </div>
      <div className="col-span-1">
        <AnimeEpisodes episodeList={anime.episodes || []} />
      </div>
    </section>
  );
};

export default Watch;

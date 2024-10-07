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
    <section className="relative flex flex-col md:grid md:grid-cols-3 gap-4">
      <div className="col-span-2">
        <DynamicVideoPlayer setWatch={setWatch} />
      </div>
      <div className="col-span-1">
        <AnimeEpisodes episodeList={anime.episodes || []} />
      </div>
    </section>
  );
};

export default Watch;

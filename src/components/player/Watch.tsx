"use client";
import React, { Dispatch, SetStateAction } from "react";
import { IAnimeInfoAnilit } from "@/utils";
import AnimeEpisodes from "../list/AnimeEpisodes";
import dynamic from "next/dynamic";
import { IAnimeEpisode } from "@consumet/extensions";

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
    <section className="relative flex flex-col gap-4 md:grid md:grid-cols-3">
      <div className="col-span-2">
        <DynamicVideoPlayer
          setWatch={setWatch}
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

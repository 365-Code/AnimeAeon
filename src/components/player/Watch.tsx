"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Player from "./Player";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { IAnimeResult, IVideo } from "@consumet/extensions";
import { IAnimeInfoAnilit, episodeInfo, infoAnime } from "@/utils";
import VideoPlayer from "./VideoPlayer";
import AnimeEpisodes from "../list/AnimeEpisodes";

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
        display: "grid",
        gap: "1.5rem",
        gridTemplateColumns: "65% 30%",
      }}
      className="relative h-[512px] w-full"
    >
      <VideoPlayer setWatch={setWatch} />
      <AnimeEpisodes episodeList={anime.episodes || []} />
    </section>
  );
};

export default Watch;

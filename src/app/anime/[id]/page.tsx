"use client";
import DisplayAnimeCards from "@/components/list/DisplayAnimeCards";
import AnimeInfoCard from "@/components/cards/AnimeInfoCard";
import { IAnimeInfoAnilit, infoAnime } from "@/utils";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import DisplayCharacters from "@/components/list/DisplayCharacters";
import DisplayCharacterActors from "@/components/list/DisplayCharactersActors";
import Watch from "@/components/player/Watch";
import AnimeInfo from "@/components/sections/AnimeInfo";

const Page = () => {
  const params = useParams();
  const animeId = params["id"] as string;

  const [animeInfo, setAnimeInfo] = useState<IAnimeInfoAnilit>(
    {} as IAnimeInfoAnilit,
  );
  const fetchAnimeInfo = async () => {
    try {
      const data = await fetch("/api/anilist/info?id=" + animeId);
      const res = await data.json();
      if (res.success) {
        setAnimeInfo(res.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      animeId && fetchAnimeInfo();
    }, 100);
    return () => clearTimeout(debounce);
  }, [animeId]);

  
  const searchParams = useSearchParams()
  const playing = searchParams.get("episode") as string
  const [watch, setWatch] = useState(playing ? true : false);

  return (
    <section className="space-y-6">
      {/* <AnimeInfo anime={animeInfo} /> */}
      {watch ? <Watch anime={animeInfo} setWatch={setWatch} /> : <AnimeInfoCard setWatch={setWatch} anime={animeInfo} />}
      <DisplayCharacters characterList={animeInfo?.characters || []} />
      <DisplayAnimeCards
        title="You Might Like"
        animeList={animeInfo?.recommendations || []}
      />
      <DisplayCharacterActors charActorList={animeInfo?.characters || []} />
    </section>
  );
};

export default Page;

"use client";
import DisplayAnimeCards from "@/components/list/DisplayAnimeCards";
import AnimeInfoCard from "@/components/cards/AnimeInfoCard";
import { IAnimeInfoAnilit } from "@/utils";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import DisplayCharacters from "@/components/list/DisplayCharacters";
import Watch from "@/components/player/Watch";

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

  const searchParams = useSearchParams();
  const playing = searchParams.get("episode") as string;
  const [watch, setWatch] = useState(playing ? true : false);

  return (
    <section className="no-scrollbar space-y-6 overflow-y-scroll">
      {watch ? (
        <Watch anime={animeInfo} setWatch={setWatch} />
      ) : (
        <AnimeInfoCard setWatch={setWatch} anime={animeInfo} />
      )}
      <DisplayAnimeCards
        title="You Might Like"
        animeList={animeInfo?.recommendations || []}
      />
      <DisplayCharacters characterList={animeInfo?.characters || []} />
    </section>
  );
};

export default Page;

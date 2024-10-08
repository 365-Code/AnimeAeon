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
  const [loading, setLoading] = useState(false)

  const [animeInfo, setAnimeInfo] = useState<IAnimeInfoAnilit>(
    {} as IAnimeInfoAnilit,
  );
  const fetchAnimeInfo = async () => {
    setLoading(true)
    try {
      const data = await fetch("/api/anilist/info?id=" + animeId);
      const res = await data.json();
      if (res.success) {
        setAnimeInfo(res.result);
      }
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false)
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
    <section className="no-scrollbar mx-auto flex w-full max-w-7xl flex-col gap-4 overflow-y-scroll mt-4">
      {watch ? (
        <Watch anime={animeInfo} setWatch={setWatch} />
      ) : (
        <AnimeInfoCard setWatch={setWatch} anime={animeInfo} />
      )}
      <div className="mb-4 mt-2">
        <DisplayAnimeCards
          title="You Might Like"
          animeList={animeInfo?.recommendations || []}
        />
      </div>
      
      <div className="mb-4">
        <DisplayCharacters characterList={animeInfo?.characters || []} />
      </div>
    </section>
  );
};

export default Page;

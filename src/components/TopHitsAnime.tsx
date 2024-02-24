"use client";
import { animeListCardType } from "@/utils";
import React, { useEffect, useState } from "react";
import AnimeListCard from "./AnimeListCard";

const TopHitsAnime = () => {
  const [topHits, setTopHits] = useState<Array<animeListCardType>>([]);
  const [page, setPage] = useState(1);

  const fetchHits = async () => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || ""}/gogoPopular/${page}`
      );
      if (result.ok) {
        const { results } = await result.json();
        const res = results as Array<animeListCardType>;
        setTopHits(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHits();
  }, []);

  return (
    <div className="overflow-y-scroll custom-scrollbar flex-col flex gap-3">
      {topHits.map((anime) => (
        <AnimeListCard key={anime.id} anime={anime} />
      ))}
    </div>
  );
};

export default TopHitsAnime;

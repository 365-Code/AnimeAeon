"use client";
import { animeListCardType } from "@/utils";
import React, { useEffect, useState } from "react";
import AnimeListCard from "./AnimeListCard";
import InfiniteScroll from "./InfiniteScroll";

const TopHitsAnime = () => {
  const [topHits, setTopHits] = useState<Array<animeListCardType>>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const fetchHits = async () => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || ""}/gogoPopular/${page}`
      );
      if (result.ok) {
        const { results } = await result.json();
        const res = results as Array<animeListCardType>;
        setTopHits((prev) => [...prev, ...res]);
        setLoading(false);
        setHasMore(true);
      }
    } catch (error) {
      setLoading(false);
      setHasMore(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHits();
  }, [page]);

  return (
    <>
      <div className="overflow-y-scroll custom-scrollbar md:grid md:grid-cols-2 justify-between flex-col flex gap-3">
        {topHits.map((anime, ind) => (
          <AnimeListCard key={anime.id + ind} anime={anime} />
        ))}
      </div>
      <InfiniteScroll
        page={page}
        setPage={setPage}
        loading={loading}
        setLoading={setLoading}
        hasMore={hasMore}
      />
    </>
  );
};

export default TopHitsAnime;

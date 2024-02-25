"use client";
import { animeUpcomingType } from "@/utils";
import React, { useCallback, useEffect, useRef, useState } from "react";
import AnimeListCard from "./AnimeListCard";
import AnimePreview from "./AnimePreview";
import AnimeCardSkeleton from "./AnimeCardSkeleton";
import InfiniteScroll from "./InfiniteScroll";

const UpcomingAnime = () => {
  const [upcoming, setUpcoming] = useState<Array<animeUpcomingType>>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchUpcoming = async () => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || ""}/upcoming/${page}`
      );
      if (result.ok) {
        const { results } = await result.json();
        const res = results as Array<animeUpcomingType>;
        setUpcoming((prev) => [...prev, ...res]);
        setLoading(false);
        setHasMore(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setHasMore(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchUpcoming();
  }, [page]);

  return (
    <>
      <div
        id="upcoming-scroll"
        className="custom-scrollbar overflow-y-scroll grid-cards gap-3"
      >
        {upcoming.map((anime, ind) => (
          <div key={anime.media.id + ind} className="min-w-[160px]">
            <AnimePreview
              id={anime.media.title.english + anime.media.id}
              title={
                anime.media.title.english ||
                anime.media.title.userPreferred ||
                anime.media.title.romaji
              }
              image={anime.media.bannerImage || anime.media.coverImage.large}
              rating={anime.media.averageScore / 10}
            />
          </div>
        ))}
      </div>
      <InfiniteScroll page={page} setPage={setPage} loading={loading} setLoading={setLoading} hasMore={hasMore} />
      {/* {loading && [...Array(8)].map((v, ind) => <AnimeCardSkeleton key={ind} />)} */}
    </>
  );
};

export default UpcomingAnime;

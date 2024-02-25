"use client";
import { animeListCardType, animePreviewType } from "@/utils";
import React, { useEffect, useState } from "react";
import AnimeListCard from "./AnimeListCard";
import AnimePreview from "./AnimePreview";
import InfiniteScroll from "./InfiniteScroll";

const RecentsAnime = () => {
  const [recents, setRecents] = useState<Array<animePreviewType>>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const fetchRecents = async () => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/recent/${page}`
      );

      if (result.ok) {
        const { results } = await result.json();
        const res = results as Array<animePreviewType>;
        setRecents((prev) => [...prev, ...res]);
        setHasMore(true);
        setLoading(false);
      }
    } catch (error) {
      setHasMore(false);
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchRecents();
  }, [page]);

  return (
    <>
      <div className="overflow-y-scroll custom-scrollbar grid-cards gap-3">
        {recents.map((anime, ind) => (
          <AnimePreview
            key={anime.id + ind}
            image={anime.image}
            title={anime.title}
            id={anime.id}
          />
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

export default RecentsAnime;

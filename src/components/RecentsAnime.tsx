"use client";
import { animeListCardType, animePreviewType } from "@/utils";
import React, { useEffect, useState } from "react";
import AnimeListCard from "./AnimeListCard";
import AnimePreview from "./AnimePreview";

const RecentsAnime = () => {
  const [recents, setRecents] = useState<Array<animePreviewType>>([]);
  const [page, setPage] = useState(1);

  const fetchRecents = async () => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/recent/${page}`
      );

      if (result.ok) {
        const { results } = await result.json();
        const res = results as Array<animePreviewType>;
        setRecents(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecents();
  }, []);

  return (
    <div className="overflow-y-scroll custom-scrollbar grid-cards gap-3">
      {recents.map((anime) => (
        <AnimePreview key={anime.id} image={anime.image} title={anime.title} id={anime.id} />
      ))}
    </div>
  );
};

export default RecentsAnime;

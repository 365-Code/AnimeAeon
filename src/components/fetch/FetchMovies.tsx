"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { IAnimeResult } from "@consumet/extensions";

const DynamicCarousel = dynamic(
  () => import("@/components/carousel/carousel"),
  {
    ssr: false,
  },
);

const FetchMovies = () => {
  // const [movies, setMovies] = useState<ISearchResult[]>([]);
  const [movies, setMovies] = useState<IAnimeResult[]>([]);

  const fetchMovies = async () => {
    try {
      const res = await (await fetch(`/api/anilist/movies?page=1`)).json();
      if (res.success) {
        setMovies(res.results);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <section className="relative mb-6">
      <DynamicCarousel animeList={movies} title="Movies" />;
    </section>
  );
  // return <DisplayCards animeList={movies} title="Movies" />;
};

export default FetchMovies;

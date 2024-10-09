"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { IAnimeResult } from "@consumet/extensions";
import { useQuery } from "@tanstack/react-query";

const DynamicCarousel = dynamic(
  () => import("@/components/carousel/carousel"),
  {
    ssr: false,
  },
);

const FetchMovies = () => {
  // const [movies, setMovies] = useState<ISearchResult[]>([]);
  // const [movies, setMovies] = useState<IAnimeResult[]>([]);

  // const fetchMovies = async () => {
  //   try {
  //     const res = await (await fetch(`/api/anilist/movies?page=1`)).json();
  //     if (res.success) {
  //       setMovies(res.results);
  //     }
  //   } catch (error: any) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchMovies();
  // }, []);

  const { data: movies, isLoading } = useQuery({
    queryKey: ["fetch-movies"],
    queryFn: async () => {
      try {
        const response = await fetch("/api/anilist/movies?page=1");
        const res = await response.json();
        if (!response.ok) {
          throw Error("Couldn't Fetch Anime Movies");
        }
        if (res.success) {
          return res.results as IAnimeResult[];
        }
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  });

  return (
    <section className="relative mb-6">
      <DynamicCarousel animeList={movies} loading={isLoading} title="Movies" />
    </section>
  );
  // return <DisplayCards animeList={movies} title="Movies" />;
};

export default FetchMovies;

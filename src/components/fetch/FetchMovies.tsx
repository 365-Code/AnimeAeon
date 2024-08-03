"use client";
import { ISearchResult } from "@/utils";
import React, { useEffect, useState } from "react";
import DisplayCards from "../list/DisplayCards";

const FetchMovies = () => {
  const [movies, setMovies] = useState<ISearchResult[]>([]);

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

  return <DisplayCards animeList={movies} title="Movies" />;
};

export default FetchMovies;

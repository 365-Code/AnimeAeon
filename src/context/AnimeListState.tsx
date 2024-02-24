"use client";
import { animeListCardType } from "@/utils";
import React, { createContext, useContext, useEffect, useState } from "react";

export type animeListType = {
  id: string;
  image: string;
};

export type AnimeListContextType = {
  animeList: Array<animeListType>;
  setAnimeList: any;
  addToAnimeList: any;
  removeFromAnimeList: any;
};

export const AnimeListContext = createContext<AnimeListContextType | null>(
  null
);

export const AnimeListState = ({ children }: { children: React.ReactNode }) => {
  const [animeList, setAnimeList] = useState([] as Array<animeListType>);

  const [topHits, setTopHits] = useState<Array<animeListCardType>>([]);
  const [page, setPage] = useState(1);

  const fetchHits = async () => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/gogoPopular/${page}`
      );
      if (result.ok) {
        const { results } = await result.json();
        setTopHits(results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHits();
  }, []);

  useEffect(() => {
    const list = localStorage.getItem("animeList");
    if (list) {
      setAnimeList(JSON.parse(list));
    }
  }, []);

  const addToAnimeList = (anime: animeListType) => {
    if (animeList.findIndex((mid) => mid.id == anime.id) >= 0) {
      return;
    }
    setAnimeList((prev) => [anime, ...prev]);
    localStorage.setItem("animeList", JSON.stringify(animeList));
  };

  const removeFromAnimeList = (id: string) => {
    setAnimeList((prev) => prev.filter((i) => i.id != id));
    localStorage.setItem("animeList", JSON.stringify(animeList));
  };

  return (
    <AnimeListContext.Provider
      value={{ animeList, setAnimeList, addToAnimeList, removeFromAnimeList }}
    >
      {children}
    </AnimeListContext.Provider>
  );
};

export const useAnimeList = () =>
  useContext(AnimeListContext) as AnimeListContextType;

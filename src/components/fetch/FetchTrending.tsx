"use client";
import { ISearchResult, moviesList, trendingList } from "@/utils";
import React, { useEffect, useState } from "react";
import DisplayCards from "../list/DisplayCards";

const FetchTrending = ({ title }: { title?: string }) => {
  const [trending, setTrending] = useState<ISearchResult[]>([]);

  const fetchTrending = async () => {
    try {
      const res = await (await fetch(`/api/anilist/trending?page=1`)).json();
      if (res.success) {
        setTrending(res.results);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    // fetchTrending();
    setTrending(trendingList);
  }, []);

  return <DisplayCards animeList={trending} title="Trending" />;
};

export default FetchTrending;

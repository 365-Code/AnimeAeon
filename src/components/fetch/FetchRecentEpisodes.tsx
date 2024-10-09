"use client";
import { ApiError } from "next/dist/server/api-utils";
import React, { useEffect, useState } from "react";
import { IAnimeResult } from "@consumet/extensions";
import VerticalCarousel from "../carousel/vertical-carousel";

const FetchRecentEpisodes = () => {
  const [recentEpisodes, setRecentEpisodes] = useState<IAnimeResult[]>([]);

  const data = async () => {
    try {
      const data = await fetch("/api/anilist/recentEpisodes");
      const res = await data.json();
      if (res.success) {
        setRecentEpisodes(res.results);
      }
    } catch (error) {
      if (error instanceof ApiError) throw new Error(error.message);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      data();
    }, 500);
    return () => clearTimeout(debounce);
  }, []);
  return (
    <VerticalCarousel
      animeList={recentEpisodes}
      direction="vertical"
      height={400}
    />
  );
};

export default FetchRecentEpisodes;
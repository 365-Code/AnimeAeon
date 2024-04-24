"use client";
import AnimeListCard from "@/components/AnimeListCard";
import AnimePreview from "@/components/AnimePreview";
import NavTop from "@/components/Nav/NavTop";
import NotificationCard from "@/components/NotificationCard";
import { animeList, getAnime } from "@/utils";
import { META } from "@consumet/extensions";
import { ApiError } from "next/dist/server/api-utils";
import React, { useEffect } from "react";

const Page = () => {
  // Using the example id of "21" (one piece) and the query of "gogoanime"
  const url = "/api/anilist/upcoming";
  // const data = async () => {
  //   try {
  //     const data = await fetch(url);
  //     const res = await data.json();
  //     console.log(res);
  //     return data;
  //   } catch (err) {
  //     if (err instanceof ApiError) throw new Error(err.message);
  //   }
  // };

  const recentEpisodes = async () => {
    try {
      const data = fetch("/api/anilist/recentEpisodes");
      const res = await data.json();
    } catch (error) {
      if (error instanceof ApiError) throw new Error(error.message);
    }
  };

  useEffect(() => {
    // const debounce = setTimeout(() => {
    recentEpisodes();
    // }, 500);
    // return () => clearTimeout(debounce);
  }, []);

  useEffect(() => {
    recentEpisodes();
  }, []);

  return (
    <div>
      <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
    </div>
  );
};

export default Page;

/*
return (
  <div className="w-full h-full overflow-x-hidden no-scrollbar absolute -top-8 left-0">
  <div className="rotate-12 justify-center gap-3 custom-scrollbar flex flex-wrap">
    {animeList.map((anime) => (
      <div key={anime.id} className="w-[150px] h-[200px]">
        <AnimePreview
        id={anime.id}
          key={anime.id}
          title={anime.title}
          image={anime.image}
          />
      </div>
    ))}
    {animeList.map((anime) => (
      <div key={anime.id} className="w-[150px] h-[200px]">
        <AnimePreview
        id={anime.id}
          key={anime.id}
          title={anime.title}
          image={anime.image}
          />
      </div>
    ))}
    {animeList.map((anime) => (
      <div key={anime.id} className="w-[150px] h-[200px]">
        <AnimePreview
        id={anime.id}
          key={anime.id}
          title={anime.title}
          image={anime.image}
          />
      </div>
    ))}
    </div>
  </div>
); */

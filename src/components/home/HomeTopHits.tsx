"use client"
import { animePreviewType } from "@/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AnimePreview from "../AnimePreview";

const HomeTopHits = () => {

  const [topHits, setTopHits] = useState<Array<animePreviewType>>([])

  const fetchHits = async () => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/gogoPopular/1`
      );
      if (result.ok) {
        const { results } = await result.json();
        const res = results as Array<animePreviewType>
        setTopHits(res.slice(0,10));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHits()
  }, [])

  return (
    <div className="max-h-fit min-h-fit">
      <div className="py-4 flex items-center justify-between">
        <h3 className="capitalize font-medium text-lg">Top Hits Anime</h3>
        <Link href={'/top-hits-anime'} className="text-[#06c149] font-medium text-sm">
          See all
        </Link>
      </div>
      <div className="w-full overflow-x-scroll flex gap-4 items-center custom-scrollbar">
        {topHits.map((anime, ind) => (
          <div key={anime.id + ind} className=" min-w-[140px]">
            <AnimePreview
            id={anime.id}
              title={anime.title}
              image={anime.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTopHits;
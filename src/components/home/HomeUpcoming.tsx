"use client";
import { animePreviewType, animeUpcomingType } from "@/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AnimePreview from "../AnimePreview";

const HomeUpcoming = () => {
  

  const [upcoming, setUpcoming] = useState<Array<animeUpcomingType>>([]);

  const fetchUpcoming = async () => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/upcoming/1`
      );
      if (result.ok) {
        const { results } = await result.json();
        const res = results as Array<animeUpcomingType>;
        setUpcoming(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUpcoming();
  }, []);

  return (
    <div className="max-h-fit min-h-fit">
      <div className="py-4 flex items-center justify-between">
        <h3 className="capitalize font-medium text-lg">Upcoming Anime</h3>
        <Link
          href={"/upcoming"}
          className="text-[#06c149] font-medium text-sm"
        >
          See all
        </Link>
      </div>
      <div className="w-full overflow-x-scroll h-fit flex gap-4 items-start custom-scrollbar">
        {upcoming.map((anime, ind) => (
          <div key={anime.media.id + ind} className=" min-w-[160px]">
            <AnimePreview
                id={anime.media.title.english + anime.media.id}
              title={anime.media.title.english || anime.media.title.userPreferred || anime.media.title.romaji}
              image={anime.media.bannerImage || anime.media.coverImage.large}
              rating={anime.media.averageScore / 10}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeUpcoming;

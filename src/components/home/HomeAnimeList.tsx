"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { animePreviewType, getAnime } from "@/utils";
import AnimePreview from "../AnimePreview";

const HomeAnimeList = ({
  title,
  type,
  linkTo,
}: {
  title: string;
  type: string;
  linkTo: string;
}) => {
  const [animeList, setAnimeList] = useState<Array<animePreviewType>>();
  const fetchAnimeList = async () => {
    try {
      let result;
      if (type == "topHits") {
        result = await fetch(`/api/anilist/popular`);
      } else {
        result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recent/1`);
      }
      if (result.ok) {
        const { results } = await result.json();
        const res = results as Array<animePreviewType>;
        setAnimeList(res.slice(0, 10));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAnimeList();
  }, []);

  return (
    <div className="">
      <div className="flex items-center justify-between py-4">
        <h3 className="text-lg font-medium capitalize">{title}</h3>
        <Link href={linkTo} className="text-sm font-medium text-[#06c149]">
          See all
        </Link>
      </div>
      <div className="custom-scrollbar flex w-full items-start gap-4 overflow-x-scroll">
        {animeList?.map((anime, ind) => (
          <div key={anime.id + ind} className="min-w-[160px]">
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

export default HomeAnimeList;

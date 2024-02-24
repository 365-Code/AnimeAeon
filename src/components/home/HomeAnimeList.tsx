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
        result = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/gogoPopular/1`
        );
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
      <div className="py-4 flex items-center justify-between">
        <h3 className="capitalize font-medium text-lg">{title}</h3>
        <Link href={linkTo} className="text-[#06c149] font-medium text-sm">
          See all
        </Link>
      </div>
      <div className="w-full custom-scrollbar overflow-x-scroll flex gap-4 items-start">
        {animeList?.map((anime) => (
          <div key={anime.id} className="min-w-[160px]">
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

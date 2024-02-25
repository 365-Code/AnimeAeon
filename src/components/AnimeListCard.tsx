"use client";
import { animeListCardType } from "@/utils";
import AnimePreview from "./AnimePreview";
import MyListButton from "./MyListButton";
import { useEffect, useState } from "react";

const AnimeListCard = ({ anime }: { anime: animeListCardType }) => {
  type animeShortDetailType = {
    name: string;
    image: string;
    id: string;
    genre: string;
    released: string;
    status: string;
  };

  const [animeDet, setAnimeDet] = useState<animeShortDetailType>({
    name: "",
    image: "",
    id: "",
    genre: "",
    released: "",
    status: "",
  });

  const fetchAnime = async () => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/anime/${anime.id}`
      );
      if (result.ok) {
        const { results } = await result.json();
        setAnimeDet(results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <div className="flex h-[200px] items-start gap-4 w-full">
      <div className="w-[160px]">
        <AnimePreview id={anime.id} image={animeDet.image} />
      </div>

      <div className="flex-1 flex h-full flex-col justify-around">
        <h3 className="text-base font-semibold leading-6 capitalize">
          {animeDet?.name?.slice(0, 36)}
          {animeDet?.name?.length > 36 ? "..." : ""}
        </h3>
        <p className="text-sm font-medium">
          <span>{animeDet.released}</span> | <span>{animeDet.status}</span>
        </p>
        <p className="flex flex-wrap gap-x-1 text-xs font-normal">
          <span>
            Genre:{" "}
            {animeDet?.genre?.slice(0, 50) +
              (animeDet?.genre?.length > 50 ? "..." : "")}
          </span>
        </p>
        <MyListButton id={anime.id} image={animeDet.image} />
      </div>
    </div>
  );
};

export default AnimeListCard;

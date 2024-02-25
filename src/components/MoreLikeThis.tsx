"use client";
import { animePreviewType } from "@/utils";
import React, { useEffect, useState } from "react";
import AnimePreview from "./AnimePreview";

const MoreLikeThis = ({ like }: { like: string }) => {
  type moreType = {
    id: number;
    meanScore: number;
    title: {
      romaji: string;
      english: string;
      native: string;
      userPreferred: string;
    };
    status: string;
    episodes: number;
    coverImage: {
      extraLarge: string;
      large: string;
      medium: string;
      color: string;
    };
    bannerImage: string;
    format: string;
  };

  const [more, setMore] = useState<Array<moreType>>();
  const fetchMore = async () => {
    try {
      const result = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/recommendations/${like}`
      );
      if (result.ok) {
        const { results } = await result.json();
        const res = results as Array<moreType>;
        setMore(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMore();
  }, []);

  return (
    <div className="w-full grid-cards gap-4">
      {more?.map(({ bannerImage, coverImage, id, title }, ind) => (
        <div key={id + ind} className="min-w-[150px]">
          <AnimePreview
            image={bannerImage || coverImage.large || coverImage.medium}
            id={title.english || title.userPreferred}
            title={title.english || title.userPreferred}
          />
        </div>
      ))}
    </div>
  );
};

export default MoreLikeThis;

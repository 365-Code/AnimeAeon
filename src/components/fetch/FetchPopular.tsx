"use client";
import React, { useEffect, useState } from "react";
import { IAnimeResult } from "@consumet/extensions";
import dynamic from "next/dynamic";

const DynamicCarousel = dynamic(
  () => import("@/components/carousel/carousel"),
  {
    ssr: false,
  },
);

const FetchPopular = () => {
  // const [popular, setPopular] = useState<ISearchResult[]>([]);
  const [popular, setPopular] = useState<IAnimeResult[]>([]);

  const fetchPopular = async () => {
    try {
      const res = await (await fetch(`/api/anilist/trending?page=1`)).json();
      if (res.success) {
        setPopular(res.results);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  // return <Carousel animeList={popular} />;
  return (
    <section className="relative mb-6">
      <DynamicCarousel animeList={popular} title="Popular" />;
    </section>
  );

  // return <DisplayCards animeList={popular} title="Popular" />;
};

export default FetchPopular;

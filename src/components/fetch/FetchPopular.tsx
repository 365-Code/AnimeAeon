"use client";
import React, { useEffect, useState } from "react";
import { IAnimeResult } from "@consumet/extensions";
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";

const DynamicCarousel = dynamic(
  () => import("@/components/carousel/carousel"),
  {
    ssr: false,
  },
);

const FetchPopular = () => {
  // const [popular, setPopular] = useState<ISearchResult[]>([]);
  // const [popular, setPopular] = useState<IAnimeResult[]>([]);

  // const fetchPopular = async () => {
  //   try {
  //     const res = await (await fetch(`/api/anilist/trending?page=1`)).json();
  //     if (res.success) {
  //       setPopular(res.results);
  //     }
  //   } catch (error: any) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchPopular();
  // }, []);

  const { data: popular, isLoading } = useQuery({
    queryKey: ["fetch-popular"],
    queryFn: async () => {
      try {
        const response = await fetch("/api/anilist/popular");
        const res = await response.json();
        if (!response.ok) {
          throw Error("Couldn't Fetch Popular Anime");
        }
        if (res.success) {
          return res.results as IAnimeResult[];
        }
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  });

  return (
    <section className="relative mb-6">
      <DynamicCarousel
        animeList={popular}
        loading={isLoading}
        title="Popular"
      />
    </section>
  );
};

export default FetchPopular;

"use client";
import React from "react";
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

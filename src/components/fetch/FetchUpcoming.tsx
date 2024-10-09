"use client";
import React, { useEffect, useState } from "react";
import HeroCarousel from "../carousel/hero-carousel";
import { IAnimeResult } from "@consumet/extensions";
import { useQuery } from "@tanstack/react-query";

const FetchUpcoming = () => {
  // const [upcoming, setUpcoming] = useState<IAnimeResult[]>([]);

  const { data: upcoming, isLoading } = useQuery({
    queryKey: ["fetch-upcoming"],
    queryFn: async () => {
      try {
        const response = await fetch("/api/anilist/upcoming");
        const res = await response.json();
        if (!response.ok) {
          throw Error("Couldn't Fetch Upcming Anime");
        }
        if (res.success) {
          return res.results as IAnimeResult[];
        }
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  });

  // const fetchUpcoming = async () => {
  //   try {
  //     const res = await (await fetch("/api/anilist/upcoming")).json();
  //     if (res.success) {
  //       setUpcoming(res.results);
  //     }
  //   } catch (error: any) {
  //     throw new Error(error.message);
  //   }
  // };

  // useEffect(() => {
  //   fetchUpcoming();
  // }, []);

  return (
    <section className="relative mb-6">
      <HeroCarousel animeList={upcoming} loading={isLoading} modifier={0.5} />
    </section>
  );
};

export default FetchUpcoming;

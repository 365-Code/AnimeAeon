"use client";
import React, { useEffect, useState } from "react";
import HeroCarousel from "../carousel/hero-carousel";
import { IAnimeResult } from "@consumet/extensions";

const FetchUpcoming = () => {
  const [upcoming, setUpcoming] = useState<IAnimeResult[]>([]);

  const fetchUpcoming = async () => {
    try {
      const res = await (await fetch("/api/anilist/upcoming")).json();
      if (res.success) {
        setUpcoming(res.results);
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    fetchUpcoming();
  }, []);

  const [currentBanner, setCurrentBanner] = useState(0);

  const handleSlideShow = (n: 1 | -1) => {
    setCurrentBanner(
      (prev) =>
        (prev + n < 0 ? upcoming?.length - 1 : prev + n) % upcoming?.length,
    );
  };

  return (
    <section className="relative mb-6">
      <HeroCarousel animeList={upcoming} modifier={0.5} />
    </section>
  );
};

export default FetchUpcoming;

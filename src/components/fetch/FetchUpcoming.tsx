"use client";
import React, { useEffect, useState } from "react";
import UpcomingCard from "../cards/UpcomingCard";
import { ISearchResult } from "@/utils";
import UpcomingSkeleton from "../skeletons/UpcomingSkeleton";

const FetchUpcoming = () => {
  const [upcoming, setUpcoming] = useState<ISearchResult[]>([]);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % upcoming?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentBanner, upcoming]);

  const handleSlideShow = (n: 1 | -1) => {
    setCurrentBanner(
      (prev) =>
        (prev + n < 0 ? upcoming?.length - 1 : prev + n) % upcoming?.length,
    );
  };

  return (
    <section className="no-scrollbar relative flex max-h-[50vh] w-full snap-x snap-mandatory items-center overflow-hidden rounded-xl">
      {upcoming?.map((up, i) => (
        <div
          key={i}
          className={`h-full w-full snap-start bg-black opacity-40 transition-all ${currentBanner == i ? "animate-fade-visible block translate-x-0" : "hidden translate-x-10"}`}
        >
          <UpcomingCard anime={up} />
        </div>
      ))}
      {upcoming.length == 0 && <UpcomingSkeleton />}
      <div className="absolute bottom-4 right-4 z-10">
        <div className="flex items-center gap-4">
          <button
            className="rounded-full bg-black/30 p-4 transition-all hover:bg-black/40"
            onClick={() => handleSlideShow(-1)}
          >
            <i className="fi fi-sr-angle-left" />
          </button>
          <button
            className="rounded-full bg-black/30 p-4 transition-all hover:bg-black/40"
            onClick={() => handleSlideShow(1)}
          >
            <i className="fi fi-sr-angle-right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FetchUpcoming;

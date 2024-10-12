"use client";
import DisplayAnimeCards from "@/components/list/DisplayAnimeCards";
import AnimeInfoCard from "@/components/cards/AnimeInfoCard";
import { IAnimeInfoAnilit } from "@/utils";
import React, { useEffect, useState } from "react";
import DisplayCharacters from "@/components/list/DisplayCharacters";
import Watch from "@/components/player/Watch";
import { Skeleton } from "@/components/ui/skeleton";
import StCardSkeleton from "@/components/skeletons/StCardSkeleton";
import { toast } from "sonner";
import { notFound } from "next/navigation";

interface PageProps {
  params: { id: string };
  searchParams: { episode: string };
}

const Page = ({
  params: { id: animeId },
  searchParams: { episode },
}: PageProps) => {
  const [animeInfo, setAnimeInfo] = useState<IAnimeInfoAnilit>(
    {} as IAnimeInfoAnilit,
  );

  const [loading, setLoading] = useState(false);

  const fetchAnimeInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/anilist/info?id=" + animeId);
      // const data = await fetch("/api/anilist/info/" + animeId);

      if (!response.ok) {
        const response = await fetch("/api/anilist/info/" + animeId);
        const res = await response.json();
        if (!response.ok) {
          toast.error("Couldn't Fetch Anime");
          return;
        }
        setAnimeInfo(res.result);
      } else {
        const res = await response.json();
        if (res.success) {
          setAnimeInfo(res.result);
        }
      }
    } catch (error) {
      toast("Error Occured");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      animeId && fetchAnimeInfo();
    }, 100);
    return () => clearTimeout(debounce);
  }, [animeId]);

  if (loading) {
    return (
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
        <AnimeBannerSkeleton />
        <div className="flex items-center gap-4 overflow-x-scroll no-scrollbar">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <StCardSkeleton key={i} />
            ))}
        </div>
      </div>
    );
  }

  if (!loading && !animeInfo) {
    return notFound();
  }
  console.log(animeInfo.characters);

  return (
    <section className="mx-auto mt-4 flex w-full max-w-7xl flex-col gap-4 overflow-y-scroll no-scrollbar">
      {episode ? (
        <Watch anime={animeInfo} />
      ) : (
        <AnimeInfoCard anime={animeInfo} />
      )}
      {animeInfo.recommendations && (
        <div className="mb-4 mt-2">
          <DisplayAnimeCards
            title="You Might Like"
            animeList={animeInfo.recommendations}
          />
        </div>
      )}
      {animeInfo.characters && (
        <div className="mb-4">
          <DisplayCharacters characterList={animeInfo.characters} />
        </div>
      )}
    </section>
  );
};

export default Page;

const AnimeBannerSkeleton = () => {
  return (
    <section
      className={`relative h-[412px] w-full max-w-7xl overflow-hidden rounded-xl bg-black/20 shadow-sm shadow-black/80 backdrop-blur-sm`}
    >
      {/* Image Skeleton */}
      <Skeleton className="h-full w-full object-cover object-center" />

      <div className="absolute bottom-0 left-0 flex w-full flex-col gap-4 p-8">
        {/* Genre Badges Skeleton */}
        <div className="flex flex-wrap items-center gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>

        {/* Title Skeleton */}
        <Skeleton className="h-10 w-3/4 sm:h-14 md:h-16" />

        {/* Studio and Info Skeleton */}
        <div className="flex max-w-[50%] flex-col gap-2">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-6 w-48" />
        </div>

        {/* Rating Skeleton */}
        <div className="flex flex-wrap items-center gap-1">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-6 w-12" />
        </div>

        {/* Action Buttons Skeleton */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Skeleton className="h-10 w-32 rounded-md" />
            <Skeleton className="h-10 w-48 rounded-md" />
          </div>

          {/* Arrow Buttons Skeleton */}
          <div className="flex flex-wrap items-center gap-4">
            <Skeleton className="h-[2.3rem] w-[2.3rem] rounded-full" />
            <Skeleton className="h-[2.3rem] w-[2.3rem] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

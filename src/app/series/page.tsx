"use client";
import StAnimeCard from "@/components/cards/StAnimeCard";
import StCardSkeleton from "@/components/skeletons/StCardSkeleton";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { perPage } from "@/utils";
import { IAnimeResult } from "@consumet/extensions";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [series, setSeries] = useState<IAnimeResult[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState(1);

  const { mutateAsync: fetchSeries, isPending: loading } = useMutation({
    mutationKey: ["fetch-series"],
    mutationFn: async () => {
      try {
        const response = await fetch(
          `/api/anilist/series?page=${page}&perPage=${perPage}`,
        );

        const res = await response.json();
        if (!response.ok) {
          console.info("Couldn't Fetch Trending Anime");
          return;
        }
        if (res.success) {
          return {
            results: res.results as IAnimeResult[],
            hasMore: res.hasNextPage,
          };
        }
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
    onSuccess(data) {
      if (data) {
        setHasMore(data.hasMore);
        setSeries((prev) => [...prev, ...data.results]);
      }
    },
  });

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchSeries();
    }, 100);
    return () => clearTimeout(debounce);
  }, [page]);

  const { lastEleRef } = useInfiniteScroll({ loading, hasMore, setPage });

  return (
    <main className="mx-auto h-full max-w-7xl flex-1">
      <div className="my-4 grid grid-cols-2 justify-between gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
        {series.length > 0 &&
          series.map((anime, i) =>
            i + 1 == page * perPage ? (
              <div ref={lastEleRef} className="w-full" key={i}>
                <StAnimeCard anime={anime} />
              </div>
            ) : (
              <StAnimeCard key={i} anime={anime} />
            ),
          )}
        {loading && Array(10).map((_, i) => <StCardSkeleton key={i} />)}
      </div>
    </main>
  );
};

export default Page;

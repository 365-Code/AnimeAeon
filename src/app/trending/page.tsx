"use client";
import StAnimeCard from "@/components/cards/StAnimeCard";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { perPage } from "@/utils";
import { IAnimeResult } from "@consumet/extensions";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const Page = () => {
  // const [trending, setTrending] = useState<IAnimeResult[][]>([]);
  const [trending, setTrending] = useState<IAnimeResult[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState(1);

  const { mutateAsync: fetchTrending, isPending: loading } = useMutation({
    mutationKey: ["fetch-trending"],
    mutationFn: async () => {
      try {
        const response = await fetch(
          `/api/anilist/trending?page=${page}&perPage=${perPage}`,
        );
        const res = await response.json();
        if (!response.ok) {
          // throw Error("Couldn't Fetch Trending Anime");
          console.error("Couldn't Fetch Trending Anime");
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
        setTrending((prev) => [...prev, ...data.results]);
      }
    },
  });

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchTrending();
    }, 100);
    return () => clearTimeout(debounce);
  }, [page]);

  const { lastEleRef } = useInfiniteScroll({ loading, hasMore, setPage });

  return (
    <main className="mx-auto h-full max-w-7xl flex-1">
      <div className="my-4 grid grid-cols-2 justify-between gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
        {trending.length > 0 &&
          trending?.map((anime, i) =>
            i + 1 == page * perPage ? (
              <div ref={lastEleRef} className="w-full" key={i}>
                <StAnimeCard anime={anime} />
              </div>
            ) : (
              <StAnimeCard key={i} anime={anime} />
            ),
          )}
      </div>
    </main>
  );
};

export default Page;

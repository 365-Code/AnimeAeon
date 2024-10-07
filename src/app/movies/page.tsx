"use client";
import StAnimeCard from "@/components/cards/StAnimeCard";
import Carousel from "@/components/carousel/carousel";
import InfiniteScroll from "@/components/InfiniteScroll";
import DisplayCards from "@/components/list/DisplayCards";
import StCardSkeleton from "@/components/skeletons/StCardSkeleton";
import { Separator } from "@/components/ui/separator";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { ISearchResult, perPage } from "@/utils";
import { IAnimeResult } from "@consumet/extensions";
import React, { Fragment, useEffect, useState } from "react";

const Page = () => {
  // const [movies, setMovies] = useState<IAnimeResult[][]>([]);
  const [movies, setMovies] = useState<IAnimeResult[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState(1);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const res = await (
        await fetch(`/api/anilist/movies?page=${page}&perPage=${perPage}`)
      ).json();
      if (res.success) {
        setHasMore(res.hasNextPage);
        setMovies((prev) => [...prev, ...res.results]);
        // Carousel
        // if (page % 2 == 1) setPage(page + 1);
        // setMovies((prev) => [...prev, res.results]);
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchMovies();
    }, 100);
    return () => clearTimeout(debounce);
  }, [page]);

  const { lastEleRef } = useInfiniteScroll({ loading, hasMore, setPage });

  return (
    <main className="mx-auto h-full max-w-7xl flex-1">
      <div className="my-4 grid grid-cols-2 justify-between gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
        {movies.length > 0 &&
          movies.map((movie, i) =>
            i + 1 == page * perPage ? (
              <div ref={lastEleRef} className="w-full" key={i}>
                <StAnimeCard anime={movie} />
              </div>
            ) : (
              <StAnimeCard key={i} anime={movie} />
            ),
          )}
        {loading && Array(10).map((_, i) => <StCardSkeleton key={i} />)}
      </div>
    </main>
  );
};

export default Page;

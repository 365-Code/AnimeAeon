"use client";
import StAnimeCard from "@/components/cards/StAnimeCard";
import { perPage } from "@/utils";
import { useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import StCardSkeleton from "../skeletons/StCardSkeleton";
import { IAnimeResult } from "@consumet/extensions";

const FetchSearch = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const format = searchParams.get("format")?.toString() || "";
  const sort = searchParams.get("sort")?.split(",") || ["TRENDING_DESC"] || "";
  const genres = searchParams.get("genres")?.split(",") || "";
  const status = searchParams.get("status") || "";
  const season = searchParams.get("season") || "";

  const [searchResults, setSearchResults] = useState<IAnimeResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [page, setPage] = useState(1);

  const searchQuery = `?query=${query || "All"}&page=${page}&perPage=${perPage}&format=${format || "All"}&sort=${sort || "All"}&genres=${genres || "All"}&status=${status || "All"}&season=${season || "All"}`;

  const advanceSearch = async () => {
    setLoading(true);
    try {
      const data = await fetch("/api/anilist/advance-search" + searchQuery);
      const res = await data.json();
      if (res.success) {
        setHasMore(res.hasNextPage);
        setLoading(false);
        if (page == 1) {
          setSearchResults(res.results);
        } else {
          setSearchResults((prev) => [...prev, ...res.results]);
        }
      }
    } catch (error: any) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPage(1);
    advanceSearch();
  }, [query, genres, status, season]);

  useEffect(() => {
    advanceSearch();
  }, [page]);

  const observer = useRef<IntersectionObserver | null>(null);

  const lastEleRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((enteries) => {
        if (enteries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore],
  );

  return (
    <section className="flex-1">
      <div className="grid flex-1 grid-cols-2 justify-between gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
        {searchResults.length > 0 &&
          searchResults.map((anime, i) =>
            i + 1 == page * perPage ? (
              <div ref={lastEleRef} className="w-full" key={i}>
                <StAnimeCard anime={anime} />
              </div>
            ) : (
              <StAnimeCard key={i} anime={anime} />
            ),
          )}

        {searchResults.length == 0 ||
          (loading && [...Array(10)].map((_, i) => <StCardSkeleton key={i} />))}
      </div>
    </section>
  );
};

export default FetchSearch;

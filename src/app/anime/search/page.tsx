"use client";
import InfiniteScroll from "@/components/InfiniteScroll";
import StAnimeCard from "@/components/cards/StAnimeCard";
import MainSection from "@/components/sections/MainSection";
import EpisodeCardSkeleton from "@/components/skeletons/EpisodeCardSkeleton";
import { ISearchResult } from "@/utils";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const format = searchParams.get("format")?.toString() || "";
  const sort = searchParams.get("sort")?.split(",") || "";
  const genres = searchParams.get("genres")?.split(",") || "";
  const status = searchParams.get("status") || "";
  const season = searchParams.get("season") || "";

  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState<ISearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [page, setPage] = useState(1);

  const perPage = 18;

  const searchQuery = `?query=${query || "All"}&page=${page}&perPage=${perPage}&format=${format || "All"}&sort=${sort || "All"}&genres=${genres || "All"}&status=${status || "All"}&season=${season || "All"}`;

  const advanceSearch = async () => {
    try {
      const data = await fetch("/api/anilist/advance-search" + searchQuery);
      const res = await data.json();
      if (res.success) {
        setHasMore(res.hasNextPage);
        setLoading(false);
        setTotalPages(res.totalPages);
        if (page == 1) {
          setSearchResults(res.results);
        } else {
          setSearchResults((prev) => [...prev, ...res.results]);
        }
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    advanceSearch();
  }, [searchQuery]);

  return (
    <MainSection>
      <div className="flex-1 flex flex-col justify-between">
        <h2 className="sub-heading">Search</h2>
        <div
          id="search-results"
          className="max-h-[85vh] custom-scrollbar grid flex-1 grid-cols-2 gap-4 overflow-y-scroll sm:grid-cols-3 2xl:grid-cols-4"
        >
          {searchResults.length == 0 &&
            [...Array(10)].map((a, i) => <EpisodeCardSkeleton key={i} />)}
          {searchResults.map((anime) => (
            <StAnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </div>
      <InfiniteScroll
        page={page}
        setLoading={setLoading}
        setPage={setPage}
        hasMore={hasMore}
        loading={loading}
        id="search-results"
      />
    </MainSection>
  );
};

export default Page;

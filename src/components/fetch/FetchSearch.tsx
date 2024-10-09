"use client";
import StAnimeCard from "@/components/cards/StAnimeCard";
import { animeGenres, perPage } from "@/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import StCardSkeleton from "../skeletons/StCardSkeleton";
import { IAnimeResult } from "@consumet/extensions";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useMutation } from "@tanstack/react-query";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

const FetchSearch = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const format = searchParams.get("format")?.toString() || "";
  const sort = searchParams.get("sort")?.split(",") || ["TRENDING_DESC"] || "";
  const genres = searchParams.get("genres")?.split(",") || "";
  const status = searchParams.get("status") || "";
  const season = searchParams.get("season") || "";

  const [searchResults, setSearchResults] = useState<IAnimeResult[]>([]);
  // const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState(1);

  const searchQuery = `?query=${query || "All"}&page=${page}&perPage=${perPage}&format=${format || "All"}&sort=${sort || "All"}&genres=${genres || "All"}&status=${status || "All"}&season=${season || "All"}`;

  const [filter, setFilter] = useState({
    genres: genres || [],
    status: status,
    searchInput: query == "All" ? "" : query,
  });

  const {
    mutate: advanceSearch,
    data,
    isPending: loading,
  } = useMutation({
    mutationKey: ["advance-search"],
    gcTime: 0,
    mutationFn: async () => {
      try {
        const response = await fetch(
          "/api/anilist/advance-search" + searchQuery,
        );
        const res = await response.json();
        if (!response.ok) {
          console.error("Couldn't Search");
          return;
        }
        if (res.success) {
          return {
            result: res.results,
            hasMore: res.hasNextPage,
          };
        }
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess(data) {
      if (data?.result) {
        setHasMore(data.hasMore);
        if (page == 1) {
          setSearchResults(data.result);
        } else {
          setSearchResults((prev) => [...prev, ...data.result]);
        }
      }
    },
  });

  useEffect(() => {
    const debounce = setTimeout(() => {
      advanceSearch();
    }, 1000);
    return () => clearTimeout(debounce);
  }, [searchQuery, page]);

  const handleGenre = (genre: string) => {
    const genres = filter.genres;
    if (filter.genres.findIndex((g) => g == genre) != -1) {
      setFilter((prev) => ({
        ...prev,
        genres: prev.genres.filter((g) => g !== genre),
      }));
    } else {
      genres.push(genre);
      setFilter((prev) => ({
        ...prev,
        genres: genres,
      }));
    }
  };

  const { lastEleRef } = useInfiniteScroll({ loading, hasMore, setPage });

  const nav = useRouter();
  const handleFilters = () => {
    setPage(1);
    const searchQuery = `?query=${filter.searchInput || "All"}&genres=${filter.genres.join(",") || "All"}&page=1&perPage=${perPage}&sort=${sort || "All"}&status=${status || "All"}&season=${season || "All"}`;
    nav.push(searchQuery);
  };

  return (
    <section className="flex-1">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Filters</CardTitle>
          <Card className="my-2 flex flex-1 items-center gap-2 rounded-xl pl-4 ring-slate-900 transition-all focus-within:ring-1">
            <Search />
            <Input
              type="search"
              value={filter.searchInput}
              onChange={(e) =>
                setFilter((prev) => ({
                  ...prev,
                  searchInput: e.target.value,
                }))
              }
              placeholder="Search anime..."
              className="w-full border-none bg-transparent text-base outline-none focus-visible:ring-0"
            />
          </Card>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            {animeGenres.map((g, i) => (
              <Button
                key={i}
                onClick={() => handleGenre(g)}
                variant={
                  filter.genres.findIndex((genre) => genre == g) != -1
                    ? "default"
                    : "secondary"
                }
              >
                {g}
              </Button>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleFilters}>Filter</Button>
        </CardFooter>
      </Card>
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

        {loading &&
          hasMore &&
          Array(10)
            .fill(0)
            .map((_, i) => <StCardSkeleton key={i} />)}
      </div>
      {!loading && data && data.result.length == 0 && (
        <h1 className="gradient-text my-6 from-slate-200 to-slate-400 text-center">
          Nothing Found
        </h1>
      )}
    </section>
  );
};

export default FetchSearch;

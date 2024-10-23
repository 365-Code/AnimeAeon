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
import Image from "next/image";

type SearchProps = {
  query?: string;
  format?: string;
  sort?: string;
  genres?: string;
  animeStatus?: string;
  season?: string;
};

const FetchSearch = ({ searchParams }: { searchParams: SearchProps }) => {
  // const searchParams = useSearchParams();
  // const query = searchParams.get("query") || "";
  // const format = searchParams.get("format")?.toString() || "";
  // const sort = searchParams.get("sort")?.split(",") || ["TRENDING_DESC"] || "";
  // const genres = searchParams.get("genres")?.split(",") || "";
  // const status = searchParams.get("status") || "";
  // const season = searchParams.get("season") || "";

  const query = searchParams["query"] || "";
  const format = searchParams["format"] || "";
  const sort =
    searchParams["sort"]?.split(",") || ["START_DATE_DESC", "TRENDING_DESC"] ||
    "";
  const genres = searchParams["genres"]?.split(",") || "";
  const status = searchParams["animeStatus"] || "";
  const season = searchParams["season"] || "";

  const [searchResults, setSearchResults] = useState<IAnimeResult[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState(1);

  const searchQuery = `?query=${query || "All"}&page=${page}&perPage=${perPage}&format=${format || "ALL"}&sort=${sort || "All"}&genres=${genres || "All"}&animeStatus=${status || "All"}&season=${season || "All"}`;

  const [filter, setFilter] = useState({
    genres: genres || [],
    status: status,
    type: format.toLowerCase() || "all",
    searchInput: query == "All" ? "" : query,
  });

  const {
    mutate: advanceSearch,
    data,
    isPending: loading,
  } = useMutation({
    mutationKey: ["advance-search"],
    gcTime: 1000,
    mutationFn: async () => {
      try {
        const response = await fetch(
          "/api/anilist/advance-search" + searchQuery,
        );
        const res = await response.json();
        if (!response.ok) {
          console.info("Couldn't Search");
          return;
        }
        if (res.success) {
          return {
            result: res.results,
            hasMore: res.hasNextPage,
          };
        }
      } catch (error) {
        console.error(error);
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
    const searchQuery = `?query=${filter.searchInput || "All"}&genres=${filter.genres.join(",") || "All"}&page=1&perPage=${perPage}&format=${filter.type.toUpperCase()}&sort=${sort || "All"}&animeStatus=${status || "All"}&season=${season || "All"}`;
    nav.push(searchQuery);
  };

  return (
    <section className="flex-1">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFilters();
        }}
      >
        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Filters</CardTitle>
            <Card className="my-2 flex flex-1 items-center gap-2 rounded-xl pl-4 ring-slate-900 transition-all focus-within:ring-1">
              <Search />
              <Input
                autoFocus={true}
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
            <CardTitle className="mb-2">Type</CardTitle>
            <div className="flex flex-wrap gap-4">
              {["all", "movie", "tv", "ona", "ova"].map((type, i) => (
                <Button
                  key={i}
                  type="button"
                  className="capitalize"
                  onClick={() => setFilter((prev) => ({ ...prev, type }))}
                  variant={filter.type == type ? "default" : "secondary"}
                >
                  {type}
                </Button>
              ))}
            </div>
          </CardContent>
          <CardContent>
            <CardTitle className="mb-2">Genres</CardTitle>
            <div className="flex flex-wrap gap-4">
              {animeGenres.map((g, i) => (
                <Button
                  key={i}
                  type="button"
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
            <Button type="submit">Filter</Button>
          </CardFooter>
        </Card>
      </form>

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
        <Image
          width={300}
          height={200}
          alt="notthing-found"
          src={"/assets/nothing-found.png"}
          className="mx-auto my-[2rem] invert dark:invert-0"
        />
      )}
    </section>
  );
};

export default FetchSearch;

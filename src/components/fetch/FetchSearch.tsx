"use client";
import StAnimeCard from "@/components/cards/StAnimeCard";
import { animeGenres, perPage } from "@/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import StCardSkeleton from "../skeletons/StCardSkeleton";
import { IAnimeResult } from "@consumet/extensions";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { Input } from "../ui/input";

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
  }, [searchQuery]);

  useEffect(() => {
    advanceSearch();
  }, [page]);

  const [filter, setFilter] = useState({
    genres: genres || [],
    status: status,
    searchInput: query == "All" ? "" : query,
  });

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

  const nav = useRouter();
  const handleFilters = () => {
    const searchQuery = `?query=${filter.searchInput || "All"}&genres=${filter.genres.join(",") || "All"}&page=${page}&perPage=${perPage}&format=${format || "All"}&sort=${sort || "All"}&status=${status || "All"}&season=${season || "All"}`;
    nav.push(searchQuery);
  };

  return (
    <section className="flex-1">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Filters</CardTitle>
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
          Array(10)
            .fill(0)
            .map((_, i) => <StCardSkeleton key={i} />)}
      </div>
    </section>
  );
};

export default FetchSearch;

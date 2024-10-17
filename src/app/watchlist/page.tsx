"use client";
import StAnimeCard from "@/components/cards/StAnimeCard";
import Carousel from "@/components/carousel/carousel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { animeGenres, IRecentEpisode, toAnimeTitle } from "@/utils";
import { IAnimeResult, ITitle } from "@consumet/extensions";
import { Search } from "lucide-react";
import React, { use, useEffect, useState } from "react";

type WatchlistType = {
  id: string;
  title: string | ITitle;
  genres: string[];
  image: string;
};

const Page = () => {
  const [AllWatchList, setAllWatchList] = useState<WatchlistType[]>([]);
  const [watchList, setWatchList] = useState<WatchlistType[]>([]);

  const [filterGenres, setFilterGenres] = useState<string[]>([]);
  const [filterInput, setFilterInput] = useState<string>("");

  const handleGenre = (genre: string) => {
    if (filterGenres.findIndex((g) => g == genre) != -1) {
      setFilterGenres((prev) => prev.filter((g) => g !== genre));
    } else {
      setFilterGenres((prev) => [...prev, genre]);
    }
  };

  useEffect(() => {
    const dta = localStorage.getItem("watchList");
    if (dta) {
      const list = JSON.parse(dta);
      setWatchList(list);
      setAllWatchList(list);
    }
  }, []);

  useEffect(() => {
    if (!filterInput && !filterGenres.length && AllWatchList.length) {
      setWatchList(AllWatchList);
      return;
    }

    if (filterGenres.length != 0) {
      const list: WatchlistType[] = [];
      filterGenres.forEach((g) => {
        AllWatchList.forEach((a) => {
          if (a.genres?.length && a.genres.includes(g)) {
            list.push(a);
          }
        });
      });
      setWatchList(() => list);
    }
    if (filterInput) {
      setWatchList(() =>
        AllWatchList.filter((a) =>
          toAnimeTitle(a.title as ITitle)
            ?.toLowerCase()
            ?.includes(filterInput),
        ),
      );
    }
  }, [filterGenres, filterInput]);

  return (
    <section className="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col justify-center">
      {/* {!watchList || watchList.length == 0 ? ( */}
      {!AllWatchList || AllWatchList.length == 0 ? (
        <div className="flex h-full flex-1 flex-col items-center justify-center">
          <h2 className="gradient-text from-red-500 to-blue-500 text-center text-xl font-medium sm:text-3xl md:text-5xl">
            You didn&apos;t like anything yet
          </h2>
        </div>
      ) : (
        <>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Filters</CardTitle>
              <Card className="my-2 flex flex-1 items-center gap-2 rounded-xl pl-4 ring-slate-900 transition-all focus-within:ring-1">
                <Search />
                <Input
                  type="search"
                  value={filterInput}
                  onChange={(e) => setFilterInput(e.target.value)}
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
                    type="button"
                    onClick={() => handleGenre(g)}
                    variant={
                      filterGenres.findIndex((genre) => genre == g) != -1
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
          <div>
            {watchList.length == 0 && (
              <h2 className="my-8 text-center text-3xl sm:text-4xl md:text-5xl">
                Nothing Found
              </h2>
            )}
            {watchList.length >= 5 ? (
              <Carousel animeList={watchList as IAnimeResult[]} />
            ) : (
              <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-4">
                {watchList.map((anime, i) => (
                  <div className="max-w-[300px]" key={i}>
                    <StAnimeCard anime={anime as IAnimeResult} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Page;

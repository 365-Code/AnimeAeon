"use client";
import StAnimeCard from "@/components/cards/StAnimeCard";
import Carousel from "@/components/carousel/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { animeGenres, toAnimeTitle } from "@/utils";
import { IAnimeResult, ITitle } from "@consumet/extensions";
import { Search } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// type WatchlistType = {
//   id: string;
//   title: string | ITitle;
//   description: string
//   genres: string[];
//   image: string;
// };

const Page = () => {
  const [AllWatchList, setAllWatchList] = useState<IAnimeResult[]>([]);
  const [watchList, setWatchList] = useState<IAnimeResult[]>([]);

  const [filterType, setFilterType] = useState<string>("all");
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
    if (
      !filterInput &&
      !filterGenres.length &&
      filterType == "all" &&
      AllWatchList.length
    ) {
      setWatchList(AllWatchList);
      return;
    }
    if (filterGenres.length != 0) {
      const list: IAnimeResult[] = [];
      // filterGenres.forEach((g) => {
      //   AllWatchList.forEach((a) => {
      //     if (a.genres?.length && a.genres.includes(g)) list.push(a);
      //   });
      // });
      let flag = true;
      AllWatchList.forEach((anime) => {
        flag = true;
        if (anime.genres) {
          for (let i = 0; i < filterGenres.length; i++) {
            if (
              anime.genres.findIndex((g: string) => g == filterGenres[i]) == -1
            )
              flag = false;
          }
          if (flag) {
            list.push(anime);
          }
        }
      });
      setWatchList(() => list);
    }
    if (filterType != "all") {
      setWatchList(AllWatchList.filter((anime) => anime.type == filterType));
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
  }, [filterGenres, filterInput, filterType]);

  return (
    <section className="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col justify-center">
      {/* {!watchList || watchList.length == 0 ? ( */}
      {!AllWatchList || AllWatchList.length == 0 ? (
        <div className="flex h-full flex-1 flex-col items-center justify-center">
          <h2 className="text-center text-xl font-medium sm:text-3xl md:text-5xl">
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
              <CardTitle className="mb-2">Type</CardTitle>
              <div className="flex flex-wrap gap-4">
                {["all", "movie", "tv", "ova", "ona"].map((t, i) => (
                  <Button
                    key={i}
                    type="button"
                    onClick={() => setFilterType(t)}
                    className="capitalize"
                    variant={filterType == t ? "default" : "secondary"}
                  >
                    {t}
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
          </Card>
          <div>
            {watchList.length == 0 && (
              <Image
                width={300}
                height={200}
                alt="notthing-found"
                src={"/assets/nothing-found.png"}
                className="mx-auto my-[2rem] invert dark:invert-0"
              />
            )}
            {watchList.length >= 12 ? (
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
